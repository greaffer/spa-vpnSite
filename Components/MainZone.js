import VpnContainer from "./UI/VpnSiteContainer";
import MainHeading from "./Main/MainHeading";
import MainCard from "./Main/MainCard";
import Slider from "./Main/Slider/Slider";
const MainZone = () => {
  return (
    <>
      <VpnContainer>
        <MainHeading />
        <MainCard />
      </VpnContainer>
      <Slider />
    </>
  );
};

export default MainZone;
