import Image from "next/image";
import Button from "../UI/Button";
import checked from "/public/Images/Body/checked.svg";
import free from "/public/Images/Body/Card/Free.svg";
import premium from "/public/Images/Body/Card/Premium.svg";
import standard from "/public/Images/Body/Card/Standard.svg";
const Card = ({ type, active, click }) => {
  const prices = {
    standardPrice: (
      <p>
        $9 <span className="font-normal">/ mo</span>
      </p>
    ),
    premiumPrice: (
      <p>
        $12 <span className="font-normal">/ mo</span>
      </p>
    ),
  };
  const clickHandler = () => {
    click(type);
  };
  return (
    <section
      className={`text-center border-2 rounded-xl pt-4 pb-9 mb-5 sm:mb-0 sm:pt-5 lg:pt-12 lg:pb-10 xl:pt-16 xl:pb-12 flex flex-col justify-between space-y-5 sm:space-y-10 lg:space-y-14 xl:space-y-32 ${
        active ? "border-opacity-100 border-vpnSite-redBorder" : ""
      }`}
    >
      <div>
        <Image
          src={
            (type === "free" && free) ||
            (type === "standard" && standard) ||
            (type === "premium" && premium)
          }
          alt={"image"}
        />
        <h3 className="text-lg font-medium py-8">
          {(type === "free" && "Free Plan") ||
            (type === "standard" && "Standard Plan") ||
            (type === "premium" && "Premium Plan")}
        </h3>
        <div className="flex justify-center">
          <ul>
            <li className="flex items-center">
              <span className="sm:pr-2 lg:pr-1">
                <Image src={checked} alt={"image"} />
              </span>
              <p className="align-top inline-block text-sm font-normal text-vpnSite-navGray">
                Unlimited Bandwitch
              </p>
            </li>
            <li className="flex items-center">
              <span className="sm:pr-2 lg:pr-1 pr-1">
                <Image src={checked} alt={"image"} />
              </span>
              <p className="align-top inline-block text-sm font-normal text-vpnSite-navGray">
                Encrypted Connection
              </p>
            </li>
            <li className="flex items-center">
              <span className="sm:pr-2 lg:pr-1 pr-1">
                <Image src={checked} alt={"image"} />
              </span>
              <p className="align-top inline-block text-sm font-normal text-vpnSite-navGray">
                {(type === "free" && "No Traffic Logs") ||
                  (type === "standard" && "Yes Traffic Logs") ||
                  (type === "premium" && "Yes Traffic Logs")}
              </p>
            </li>
            <li className="flex items-center">
              <span className="sm:pr-2 lg:pr-1 pr-1">
                <Image src={checked} alt={"image"} />
              </span>
              <p className="align-top inline-block text-sm font-normal text-vpnSite-navGray">
                Works on All Devices
              </p>
            </li>
            {(type === "standard" || type === "premium") && (
              <li className="flex items-center">
                <span className="sm:pr-2 lg:pr-1 pr-1">
                  <Image src={checked} alt={"image"} />
                </span>
                <p className="align-top inline-block text-sm font-normal text-vpnSite-navGray">
                  Connect Anyware
                </p>
              </li>
            )}
            {type === "premium" && (
              <li className="flex items-center">
                <span className="sm:pr-2 lg:pr-1 pr-1">
                  <Image src={checked} alt={"image"} />
                </span>
                <p className="align-top inline-block text-sm font-normal text-vpnSite-navGray">
                  Get New Features
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-medium mb-5">
          {(type === "free" && "Free") ||
            (type === "standard" && prices.standardPrice) ||
            (type === "premium" && prices.premiumPrice)}
        </h2>
        <Button variant={"standard-card"} shadow={"true"} click={clickHandler}>
          Select
        </Button>
      </div>
    </section>
  );
};

export default Card;
