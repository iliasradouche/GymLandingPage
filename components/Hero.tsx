import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section className="h-[85vh] lg:h-[712px] bg-hero bg-cover bg-center bg-no-repeat" id="home">
      <div className="container mx-auto h-full">
        {/* slider in the Hero */}
        <HeroSlider/>
      </div>
    </section>
  );
};

export default Hero;
