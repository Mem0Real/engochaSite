export const LazyAutoplayVideo = ({
  src,
  autoplay = true,
  type = 'video/mp4',
}: {
  src: string;
  autoplay?: boolean;
  type?: string;
}) => {
  return (
    <video
      controls
      autoPlay={autoplay}
      muted // Muted is often required for autoplay on mobile and some browsers
      loop
      playsInline // Important for iOS to play video within its element
      style={{ width: '100%', height: '100%' }}
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};
