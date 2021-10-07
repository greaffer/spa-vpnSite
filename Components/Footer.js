import VpnContainer from "./UI/VpnSiteContainer";
import FooterLinks from "./Footer/FooterLinks";
import FooterSocial from "./Footer/FooterSocial";

const Footer = () => {
  return (
    <>
      <div className="bg-vpnSite-footerGray">
        <VpnContainer>
          <footer className="flex flex-col md:flex-row bg-vpnSite-footerGray justify-between sm:pt-10 sm:pb-3 lg:pt-22 xl:pt-44 lg:pb-0">
            <FooterSocial />
            <FooterLinks />
          </footer>
        </VpnContainer>
      </div>
    </>
  );
};

export default Footer;
