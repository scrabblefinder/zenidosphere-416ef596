const Work = () => {
  const projects = [
    { title: "Project One", category: "Web Design" },
    { title: "Project Two", category: "Development" },
    { title: "Project Three", category: "Branding" },
  ];

  return (
    <section id="work" className="py-20 bg-zenDark text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-inter mb-12 text-center">Selected Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-square bg-zenPurple/20 rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src="/placeholder.svg"
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/80">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;