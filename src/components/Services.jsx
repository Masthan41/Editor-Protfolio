import { services } from "../data/services.js";

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-heading reveal">
        <p className="eyebrow">Services</p>
        <h2>Editing support from first cut to final upload.</h2>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card reveal" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <strong>{service.price}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
