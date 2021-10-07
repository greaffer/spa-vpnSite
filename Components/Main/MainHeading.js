import Image from "next/image";
import illustrationTwo from "/public/Images/illustrationTwo.svg";
import check from "/public/Images/Body/Vector.svg";

const MainHeading = () => {
  const features = [
    { name: "Powerfull online protection.", src: check },
    { name: "Internet without borders.", src: check },
    { name: "Supercharged VPN.", src: check },
    { name: "No specific time limits.", src: check },
  ];
  return (
    <>
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:gap-x-20 xl:gap-x-40 lg:mb-20 xl:mb-52">
        <div className="sm:pt-10 md:pt-0 order-last">
          <Image src={illustrationTwo} alt={"image"} />
        </div>
        <div className="flex flex-col pt-10 order-first">
          <h2 className="text-4xl font-medium leading-tight mb-5 pr-6">
            We Provide Many Features You Can Use
          </h2>
          <p className="text-vpnSite-navGray font-normal text-base mb-5 leading-8 pr-12">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <ul className="text-sm text-vpnSite-navGray sm:space-y-2 md:space-y-4">
            {features.map((item, index) => {
              return (
                <li className="flex items-center" key={index}>
                  <span className="pr-2">
                    <Image src={item.src} alt={"image"} />
                  </span>
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainHeading;
