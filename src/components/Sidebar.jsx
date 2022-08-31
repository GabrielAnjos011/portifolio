import SocialNetwork from "./SocialNetwork";
import InformationContainer from "./InformationContainer";
import Avatar from "../img/eu.jpg";
import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Gabriel Garcia" />
      <p className="title">Desenvolvedor Web</p>
      <SocialNetwork />
      <InformationContainer />
      <a href="" className="btn">
        Download curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
