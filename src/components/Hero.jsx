export default function Hero() {
  return (
    <section className="hero" id="home">
      <picture className="hero-media">
        <source
          media="(max-width: 760px)"
          srcSet="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=900&q=80"
        />
        <img
          src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1800&q=82"
          alt="Cinematic video editing desk with production monitors"
        />
      </picture>
      <div className="hero-overlay" />
      <div className="hero-content reveal">
        <p className="eyebrow">Video Editor & Visual Storyteller</p>
        <h1>Crafting Stories Through Visual Editing</h1>
        <p className="hero-copy">
          Clean cuts, cinematic rhythm, and scroll-stopping visuals for creators and brands that need their content to land.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#work">
            View My Work
          </a>
          <a className="btn btn-ghost" href="#contact">
            Hire Me
          </a>
        </div>
      </div>
      <div className="hero-stats" aria-label="Portfolio highlights">
        <div>
          <strong>2+</strong>
          <span>Years Editing</span>
        </div>
        <div>
          <strong>120+</strong>
          <span>Videos Delivered</span>
        </div>
        <div>
          <strong>48h</strong>
          <span>Short-form Turnaround</span>
        </div>
      </div>
    </section>
  );
}
