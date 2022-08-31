import SocialNetwork from "./SocialNetwork";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <p>imagem</p>
      {/* <img src={Avatar} alt="Gabriel Garcia" /> */}
      <p className="title">Desenvolvedor Web</p>
      <SocialNetwork />
      <InformationContainer/>
      <a href="" className="btn">
        Download curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
