const About = () => {
  return (
    <section id="about" className="py-20 bg-zenDark text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-inter">About Me</h2>
            <p className="text-white/80 leading-relaxed">
              I'm a creative developer with a passion for building beautiful, functional websites and applications. With a
              focus on user experience and attention to detail, I bring ideas to life through clean code and thoughtful
              design.
            </p>
            <p className="text-white/80 leading-relaxed">
              My approach combines technical expertise with creative problem-solving to deliver solutions that exceed
              expectations.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-zenPurple/20 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="About"
                className="w-full h-full object-cover mix-blend-luminosity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;