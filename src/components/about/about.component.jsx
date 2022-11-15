import Who from "./who.component";
import Mission from "./mission.component";

import "./about.styles.scss";

const AboutSection = () => {
  return (
    <div className="aboutBox">
      <Who />
      <Mission />
    </div>
  );
};

export default AboutSection;
