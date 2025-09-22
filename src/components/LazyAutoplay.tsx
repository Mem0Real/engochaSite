export const LazyAutoplayVideo = ({ src, type = 'video/mp4' }: { src: string; type?: string }) => {
  return (
    <video
      controls
      autoPlay
      muted // Muted is often required for autoplay on mobile and some browsers
      loop
      playsInline // Important for iOS to play video within its element
      style={{ width: '100%', height: 'auto' }}
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};
