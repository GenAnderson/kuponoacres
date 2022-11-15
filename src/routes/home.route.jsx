import AboutSection from "../components/about/about.component";
import HeroSection from "../components/hero.component";
import ProductsSection from "../components/products.component";
import WhySection from "../components/why.component";
import How from "../components/how.component";

function Home() {
  return (
    <div>
      <HeroSection />
      <WhySection />
      <AboutSection />
      <ProductsSection />
      <How />
    </div>
  );
}

export default Home;
