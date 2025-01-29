const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-zenDark text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-6">Get in Touch</h2>
          <p className="text-white/80 mb-8">
            Interested in working together? Let's discuss your project and bring your ideas to life.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block bg-zenPurple text-white px-8 py-3 rounded-full font-medium hover:bg-zenPurple/90 transition-colors duration-300"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;