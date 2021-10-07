import { useContext } from "react";
import DataContext from "./Context/context";
import VpnContainer from "./UI/VpnSiteContainer";
import Image from "next/image";
import Logo from "../public/Images/Logo.svg";
import Drop from "./UI/DropDown";
import Button from "./UI/Button";
const Navigation = () => {
  const { navigationLinks } = useContext(DataContext);
  const secondaryButtons = [
    { name: "Sign In", link: "#" },
    { name: "Sign Up", link: "#" },
  ];
  return (
    <VpnContainer>
      <nav className="flex flex-col sm:flex-col md:flex-row justify-between items-center mt-3 sm:mt-5 sm:mb-17 md:mt-12 md:mb-28">
        <a href="#" className="flex items-center pb-3 sm:pb-5 md:pb-0">
          <Image src={Logo} alt="logo image" />
        </a>
        {/* mid area */}
        <ul className="hidden items-center sm:space-x-17 md:space-x-5 text-base text-vpnSite-navGray sm:pb-5 md:pb-0 sm:hidden md:flex">
          {navigationLinks.map((link, index) => {
            return (
              <li key={index}>
                <a href="#" key={link.link}>
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="sm:block md:hidden">
          <Drop />
        </div>
        {/* login area */}
        <ul className="flex items-center space-x-3 xl:space-x-8 pb-2">
          {secondaryButtons.map((item, index) => {
            if (item.name === "Sign Up") {
              return (
                <li key={index}>
                  <Button variant={"standard-navigation"}>{item.name}</Button>
                </li>
              );
            }
            return (
              <li className="text-black font-medium" key={index}>
                <a href="#" key={index}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </VpnContainer>
  );
};

export default Navigation;
