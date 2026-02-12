import heroVideo from "@/assets/hero-video.mp4";
import heroFallback from "@/assets/hero-fallback.jpg";

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroFallback}
        className="h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      {/* Extra dark bottom for readability */}
      <div className="absolute inset-0 bg-background/40" />
    </div>
  );
};

export default VideoBackground;
