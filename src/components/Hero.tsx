const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-zenDark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zenPurple/20 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-inter mb-6 animate-slideUp">
            Creative Developer & Designer
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 animate-fadeIn">
            Crafting digital experiences that leave lasting impressions
          </p>
          <a
            href="#work"
            className="inline-block bg-zenPurple text-white px-8 py-3 rounded-full font-medium hover:bg-zenPurple/90 transition-colors duration-300"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;