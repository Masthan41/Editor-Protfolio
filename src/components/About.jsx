import mainProfileImage from "../../assets/main_pf.jpeg";

const skills = ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Color Grading", "Motion Graphics"];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-heading reveal">
        <p className="eyebrow">About</p>
        <h2>Editing that keeps attention without losing the story.</h2>
      </div>
      <div className="about-grid">
        <div className="profile-frame reveal">
          <img
            loading="lazy"
            src={mainProfileImage}
            alt="Professional portrait placeholder for M A Waheed"
          />
        </div>
        <div className="about-copy reveal">
          <p>
            I'm M A Waheed, a video editor focused on shaping raw footage into sharp, purposeful stories. Over the past 2+ years, I've helped creators, startups, and personal brands turn ideas into YouTube videos, reels, ads, thumbnails, and cinematic edits that feel polished without feeling overproduced.
          </p>
          <p>
            My editing style is clean, paced, and audience-aware: strong hooks, natural flow, thoughtful sound design, tasteful motion graphics, and color that supports the emotion of the piece.
          </p>
          <div className="skills" aria-label="Editing skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
