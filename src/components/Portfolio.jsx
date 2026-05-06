import { useRef, useState } from "react";

export default function Portfolio({ items }) {
  const videoItems = items.filter((item) => item.mediaType === "video");
  const imageItems = items.filter((item) => item.mediaType !== "video");
  const videoRefs = useRef({});
  const [audioSettings, setAudioSettings] = useState(() =>
    Object.fromEntries(
      videoItems.map((item) => [
        item.title,
        {
          muted: true,
          volume: 0
        }
      ])
    )
  );

  function setVideoRef(title, node) {
    if (node) {
      videoRefs.current[title] = node;
      node.volume = 0;
      node.muted = true;
    }
  }

  function updateVideoAudio(title, nextMuted, nextVolume) {
    const video = videoRefs.current[title];

    if (video) {
      video.muted = nextMuted;
      video.volume = nextVolume;
    }

    setAudioSettings((current) => ({
      ...current,
      [title]: {
        muted: nextMuted,
        volume: nextVolume
      }
    }));
  }

  function handleToggleMute(title) {
    const current = audioSettings[title];
    const nextMuted = !current.muted;
    const nextVolume = nextMuted ? current.volume : current.volume > 0 ? current.volume : 0.6;
    updateVideoAudio(title, nextMuted, nextVolume);
  }

  function handleVolumeChange(title, value) {
    const nextVolume = Number(value);
    const nextMuted = nextVolume === 0;
    updateVideoAudio(title, nextMuted, nextVolume);
  }

  return (
    <section className="section work" id="work">
      <div className="section-heading reveal">
        <p className="eyebrow">Selected Work</p>
        <h2>Portfolio built for creators, brands, and high-retention content.</h2>
      </div>

      <div className="featured-work reveal">
        <div className="featured-work-heading">
          <p className="eyebrow">My Work</p>
          <h3>Featured edits with live preview and audio controls.</h3>
        </div>
        <div className="featured-work-grid">
          {videoItems.map((item) => {
            const settings = audioSettings[item.title];

            return (
              <article className="work-card video-work-card" key={item.title}>
                <video
                  ref={(node) => setVideoRef(item.title, node)}
                  className="work-media"
                  src={item.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  aria-label={item.alt}
                />
                <div className="work-info">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
                <div className="video-controls">
                  <button
                    className="sound-btn"
                    type="button"
                    onClick={() => handleToggleMute(item.title)}
                    aria-pressed={!settings.muted}
                  >
                    {settings.muted ? "Unmute" : "Mute"}
                  </button>
                  <label className="volume-control">
                    <span>Volume</span>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={settings.volume}
                      onChange={(event) => handleVolumeChange(item.title, event.target.value)}
                      aria-label={`${item.title} volume`}
                    />
                  </label>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="portfolio-grid">
        {imageItems.map((item) => (
          <article className="work-card reveal" key={item.title}>
            {
              <img className="work-media" loading="lazy" src={item.image} alt={item.alt} />
            }
            <div className="work-info">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
