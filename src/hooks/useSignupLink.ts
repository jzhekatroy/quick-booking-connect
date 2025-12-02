import { useEffect, useState } from "react";

const BASE_SIGNUP_URL = "https://app.2minutes.ru/login";
const STORAGE_KEY = "bb_marketing_session";
const SESSION_QUERY_KEY = "bb_session";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

const EXTRA_KEYS = [
  SESSION_QUERY_KEY,
  "click_id",
  "yclid",
  "gclid",
  "fbclid",
  "msclkid",
  "vk_click_id",
  "from",
  "ref",
];

type StoredSession = {
  sessionId: string;
  query: string;
  landingPath?: string;
  referrer?: string;
  capturedAt: string;
  params: Record<string, string>;
};

const isAllowedKey = (key: string) =>
  key.startsWith("utm_") || EXTRA_KEYS.includes(key);

const generateSessionId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `bb_${crypto.randomUUID()}`;
  }
  return `bb_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
};

const readCookieSession = (): StoredSession | null => {
  if (typeof document === "undefined") return null;
  try {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${STORAGE_KEY}=`));
    if (!cookie) return null;
    const value = cookie.split("=")[1];
    if (!value) return null;
    return JSON.parse(decodeURIComponent(value));
  } catch {
    return null;
  }
};

const readLocalStorageSession = (): StoredSession | null => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const persistSession = (session: StoredSession) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } catch {
    // ignore quota errors
  }

  try {
    const hostname = window.location.hostname;
    const domain = hostname.endsWith("2minutes.ru")
      ? ".2minutes.ru"
      : undefined;
    let cookie = `${STORAGE_KEY}=${encodeURIComponent(
      JSON.stringify(session)
    )}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
    if (domain) {
      cookie += `; domain=${domain}`;
    }
    document.cookie = cookie;
  } catch {
    // ignore cookie errors
  }
};

const useSignupLink = () => {
  const [signupUrl, setSignupUrl] = useState(BASE_SIGNUP_URL);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const filtered = new URLSearchParams();

    params.forEach((value, key) => {
      if (isAllowedKey(key)) {
        filtered.set(key, value);
      }
    });

    const storedSession =
      readLocalStorageSession() || readCookieSession() || null;

    if (filtered.toString()) {
      const sessionId = filtered.get(SESSION_QUERY_KEY) || generateSessionId();
      filtered.set(SESSION_QUERY_KEY, sessionId);
      const query = filtered.toString();
      const session: StoredSession = {
        sessionId,
        query,
        landingPath: window.location.href,
        referrer: document.referrer || undefined,
        capturedAt: new Date().toISOString(),
        params: Object.fromEntries(filtered.entries()),
      };
      persistSession(session);
      setSignupUrl(`${BASE_SIGNUP_URL}?${query}`);
      return;
    }

    if (storedSession?.query) {
      setSignupUrl(`${BASE_SIGNUP_URL}?${storedSession.query}`);
    }
  }, []);

  return signupUrl;
};

export default useSignupLink;
