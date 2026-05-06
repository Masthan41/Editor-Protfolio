import { testimonials } from "../data/testimonials.js";

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="section-heading reveal">
        <p className="eyebrow">Testimonials</p>
        <h2>Clients value sharp edits, smooth communication, and reliable delivery.</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <blockquote className="reveal" key={testimonial.name}>
            <p>{testimonial.quote}</p>
            <cite>{testimonial.name}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
