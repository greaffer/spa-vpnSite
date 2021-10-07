import Button from "../UI/Button";
import Image from "next/image";
import illustration from "/public/Images/illustrationOne.svg";
import HeaderBar from "./HeaderBar";

const HeaderMain = () => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:gap-1 xl:gap-3 sm:mb-5 lg:mb-20 xl:mb-28">
      <div className="pt-2 flex flex-col justify-center items-center sm:items-start sm:block">
        <h1 className="font-medium text-55xl leading-normal mb-5 text-center sm:text-left">
          Want anything to be easy with{" "}
          <span className="font-bold">LaslesVPN.</span>
        </h1>
        <p className="text-center sm:text-left leading-8 text-vpnSite-navGray mb-5 sm:mb-7 md:mb-13">
          Provide a network for all your needs with ease and fun using
          <span className="font-medium">LaslesVPN</span> discover interesting
          features from us.
        </p>
        <Button variant={"square"}>Get Started</Button>
      </div>
      <div className="w-full pt-10 sm:pt-30 md:pt-0">
        <Image src={illustration} alt={"image"} />
        <div className="md:hidden">
          <HeaderBar />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
