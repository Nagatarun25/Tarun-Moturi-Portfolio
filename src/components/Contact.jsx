export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form
        action="https://formsubmit.co/nagatarunmoturi@gmail.com"
        method="POST"
        noValidate
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://nagatarun25.github.io/Tarun-Moturi-Portfolio/#contact" />

        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="phone" placeholder="Phone (optional)" />
        <textarea name="message" placeholder="Message" required rows="5" />
        <button type="submit">Send Message</button>
      </form>

      <div className="hologram-bg"></div>
    </section>
  );
}
