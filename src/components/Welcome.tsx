const Welcome = () => {
  return (
    <section className="py-20 bg-white text-zenDark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-[70%] mx-auto">
              <img
                src="https://www.zenullari.com/wp-content/uploads/2024/11/olgi-zenullari.jpg"
                alt="CEO Portrait"
                className="w-full rounded-lg shadow-xl"
              />
              <div className="text-center mt-4">
                <h4 className="font-bold text-xl text-[#146e82]">Olgi Zenullari</h4>
                <p className="text-[#146e82]">CEO / Founder</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl text-[#146e82] font-medium">Welcome to Zenullari.com</h2>
            <div className="space-y-4">
              <h3 className="text-4xl font-bold leading-tight text-[#146e82]">
                "Domains are the digital real estate of the 21st century—secure yours before someone else does."
              </h3>
              <p className="text-[#146e82] text-lg">
                Your go-to platform for premium domain name acquisition, appraisals, and expert insights. 
                Unlock the value of digital real estate with trusted professionals and data-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;