import { useInView } from "react-intersection-observer";

import "./mission.styles.scss";
import missionPhoto from "../../images/mission.jpg";

function Mission() {
  const { ref: myRefMission, inView: missionBoxInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={myRefMission}
      className={`${"missionBackgroundBox"} ${
        missionBoxInView ? "shiftUp" : ""
      }`}
    >
      <div className="missionBox">
        <img
          src={missionPhoto}
          className="missionPhoto"
          alt="close-up of microgreens"
        />
        <div className="missionTextBox">
          <p className="sectionHeading">Our Mission</p>
          <p className="missionText">
            Our mission at Kūpono Acers is to increase Hawaii's food security by
            providing our community with the highest quality of fresh,
            nutrient-dense produce through honest, sustainable, and organic
            agricultural practices
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
