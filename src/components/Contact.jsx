import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "YouTube", href: "https://youtube.com/" }
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  async function handleSubmit(event) {
    event.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Email service is not configured yet. Add your EmailJS keys to the Vite env file."
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey
      });

      formRef.current.reset();
      setStatus({
        type: "success",
        message: "Message sent successfully. I'll get back to you soon."
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Message could not be sent right now. Please email me directly at waheedabbu147@gmail.com."
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="contact-panel reveal">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Have footage, an idea, or a deadline?</h2>
          <p>Send the brief and I'll reply with a clear timeline, workflow, and quote.</p>
          <div className="contact-links">
            <a href="mailto:waheedabbu147@gmail.com">waheedabbu147@gmail.com</a>
            <a href="tel:+918897728847">+91 8897728847</a>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input type="text" name="user_name" placeholder="Your name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="user_email" placeholder="you@example.com" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="5" placeholder="Tell me about your project" required />
          </label>
          <input type="hidden" name="to_email" value="waheedabbu147@gmail.com" />
          <button className="btn btn-primary" type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
          {status.message ? (
            <p className={`form-status ${status.type}`} role="status" aria-live="polite">
              {status.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
