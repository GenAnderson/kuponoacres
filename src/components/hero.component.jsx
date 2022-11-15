import "./hero.styles.scss";

import Logo from "../images/logo-nobg.png";

function HeroSection() {
  return (
    <section className="sectionHero">
      <div className="heroText">
        <h1>Kūpono Acres</h1>
        <div className="heroTextTwo">"Grown with pono"</div>
      </div>
      <img src={Logo} className="kuponoLogo" alt="kupono acres logo" />

      <div className="heroTextBelow">
        In the Hawaiian language, the word “Kūpono” means to be forthright,
        fair,and honest in your relationships with others. Loosely translated,
        our name Kūpono Acres stands for “Honest Acres”. Kupono Acres is highly
        conscious in operating an economically viable,ecologically sound, and
        socially responsible company.
      </div>
    </section>
  );
}

export default HeroSection;
