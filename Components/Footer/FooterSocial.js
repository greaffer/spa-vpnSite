import Image from "next/image";
import logo from "/public/Images/Logo.svg";
import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";

const FooterSocial = () => {
  const socialLinks = [
    { social: [<ImFacebook key={1} />], id: 0 },
    { social: [<ImTwitter key={2} />], id: 1 },
    { social: [<ImInstagram key={3} />], id: 2 },
  ];
  return (
    <section className="order-last md:order-first">
      <a href="#" className="hidden md:block">
        <Image src={logo} alt={"image"} />
      </a>
      <p className="def__text sm:w-full md:w-10/12 text-center md:text-left lg:w-7/12 xl:w-6/12 md:mb-3 lg:mb-7 mt-5 mb-3">
        <span className="def__text__bold">LaslesVPN</span> is a private virtual
        network that has unique features and has high security.
      </p>
      <div className="md:w-6/12 w-full">
        <ul className="flex space-x-5 justify-center md:justify-start lg:justify-center sm:space-x-8 my-2">
          {socialLinks.map((link) => {
            return (
              <a
                href="#"
                className="text-vpnSite-redBorder hover:text-gray-500 transition duration-700 ease-in-out"
                key={link.id}
              >
                <li
                  className="sm:h-12 sm:w-12 h-10 w-10 rounded-full flex justify-center items-center shadow-lg"
                  key={link.id}
                >
                  {link.social}
                </li>
              </a>
            );
          })}
        </ul>
      </div>
      <p className="font-normal text-base text-vpnSite-footerCpy my-2 sm:mt-7 text-center md:text-left">
        &copy;2020Lasles
        <span className="text-base text-vpnSite-footerCpy font-medium">
          VPN
        </span>
      </p>
    </section>
  );
};

export default FooterSocial;
