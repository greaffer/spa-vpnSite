import VpnContainer from "./UI/VpnSiteContainer";
import HeaderMain from "./Header/HeaderMain";
import HeaderBar from "./Header/HeaderBar";
const Header = () => {
  return (
    <VpnContainer>
      <HeaderMain />
      <div className="hidden md:block">
        <HeaderBar />
      </div>
    </VpnContainer>
  );
};

export default Header;
