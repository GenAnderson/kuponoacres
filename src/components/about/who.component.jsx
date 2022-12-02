import { useInView } from "react-intersection-observer";
import "./who.styles.scss";
import whoPhoto from "../../images/who.avif";

const Who = () => {
  const { ref: myRefWho, inView: elementVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={myRefWho}
      className={`${"whoBackgroundBox"} ${elementVisible ? "shiftUp" : ""}`}
    >
      <div className="whoBox">
        <div className="whoTextBox">
          <p className="sectionHeading">Who we are</p>
          <p className="whoText">
            Born, raised, and educated here in Hawaii the two owners of Kūpono
            Acres are proud to provide their local community with fresh
            microgreens, mushrooms, and edible flowers. With shared degrees in
            environmental science and individual degrees in business
            administration and plant biology & tropical agriculture, Kūpono
            Acres focuses on honest,sustainable, and organic growing practices.
            Together both owners have experience working in sustainable
            commercial agriculture with knowledge in operations management
            large-scale food safety management, organic certification, and
            organic pest management.
          </p>
        </div>
        <img
          src={whoPhoto}
          className="whoPhoto"
          alt="Kupono Acres owners"
          width="500px"
          height="700px"
        />
      </div>
    </div>
  );
};

export default Who;
