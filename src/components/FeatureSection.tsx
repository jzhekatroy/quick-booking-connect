import { ReactNode, useState, useEffect } from "react";

interface FeatureSectionProps {
  title: string;
  description: string;
  image?: string;
  video?: string;
  reverse?: boolean;
  children?: ReactNode;
}

const FeatureSection = ({ title, description, image, video, reverse = false }: FeatureSectionProps) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isImageModalOpen || isVideoModalOpen) {
      // Закрытие по Escape
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsImageModalOpen(false);
          setIsVideoModalOpen(false);
        }
      };
      
      // Блокируем скролл страницы при открытом модальном окне
      document.body.style.overflow = 'hidden';
      
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isImageModalOpen, isVideoModalOpen]);

  const handleImageClick = () => {
    if (image) {
      setIsImageModalOpen(true);
    }
  };

  const handleVideoClick = () => {
    if (video) {
      setIsVideoModalOpen(true);
    }
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
  };

  const handleCloseVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const handleModalImageClick = (e: React.MouseEvent) => {
    // На мобильных устройствах закрываем при клике на изображение
    if (isMobile) {
      e.stopPropagation();
      handleCloseImageModal();
    }
  };

  const handleModalVideoClick = (e: React.MouseEvent) => {
    // На мобильных устройствах закрываем при клике на видео
    if (isMobile) {
      e.stopPropagation();
      handleCloseVideoModal();
    }
  };

  return (
    <>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
              </div>
              <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'} flex justify-center ${
                (title === 'Простая запись в 3 клика' ||
                 title === 'Управление записями без звонков' || 
                 title === 'Бесплатные и безлимитные уведомления клиентам' || 
                 title === 'Уведомления сотрудникам и просмотр расписания') 
                  ? 'lg:py-0 py-16' 
                  : ''
              }`}>
                <div style={{ width: video ? '33.33%' : (image && (title === 'Управление записями без звонков' || title === 'Бесплатные и безлимитные уведомления клиентам' || title === 'Уведомления сотрудникам и просмотр расписания') ? '33.33%' : '100%') }}>
                  {video ? (
                    <video 
                      src={video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={`rounded-3xl w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity ${
                        title === 'Простая запись в 3 клика' ? 'lg:scale-100 scale-150 origin-center' : ''
                      }`}
                      onClick={handleVideoClick}
                    />
                  ) : (
                    <img 
                      src={image} 
                      alt={title}
                      className={`rounded-3xl w-full h-auto object-contain ${image ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''} ${
                        (title === 'Управление записями без звонков' || 
                         title === 'Бесплатные и безлимитные уведомления клиентам' || 
                         title === 'Уведомления сотрудникам и просмотр расписания') 
                          ? 'lg:scale-100 scale-150 origin-center' 
                          : ''
                      }`}
                      onClick={handleImageClick}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Модальное окно для полноэкранного просмотра изображения */}
      {isImageModalOpen && image && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={handleCloseImageModal}
        >
          <button
            onClick={handleCloseImageModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
            aria-label="Закрыть"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={image} 
            alt={title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={handleModalImageClick}
          />
        </div>
      )}

      {/* Модальное окно для полноэкранного просмотра видео */}
      {isVideoModalOpen && video && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={handleCloseVideoModal}
        >
          <button
            onClick={handleCloseVideoModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
            aria-label="Закрыть"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <video 
            src={video}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={handleModalVideoClick}
          />
        </div>
      )}
    </>
  );
};

export default FeatureSection;
