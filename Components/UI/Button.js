import classnames from "classnames";
const Button = ({ children, variant, shadow, click }) => {
  return (
    <button
      onClick={click}
      // !standard-navigation
      className={classnames("text-base ring-vpnSite-buttonRed", {
        "text-vpnSite-buttonRed bg-trnsparent rounded-full xl:px-11.5 xl:py-2.1 lg:px-5 lg:py-1 md:px-2 md:py-1 px-1.5 py-1 font-medium border-transparent ring-1 hover:bg-vpnSite-buttonRed hover:text-white transition duration-500 ease-in-out focus:ring-vpnSite-buttonRed":
          variant === "standard-navigation",
        // !standard-card
        "text-vpnSite-buttonRed bg-trnsparent rounded-full xl:px-14 xl:py-2.1 lg:px-8 lg:py-1 md:px-4 md:py-1 px-2 py-1 font-bold ring-2 border-transparent hover:bg-vpnSite-buttonRed hover:text-white transition duration-700 ease-in-out focus:ring-vpnSite-buttonRed":
          variant === "standard-card",
        // !square
        "bg-vpnSite-buttonRed text-white rounded-lg px-2 py-2 md:px-6 md:py-2 lg:px-11 lg:py-2 xl:px-22 xl:py-4 font-bold hover:bg-vpnSite-buttonRed hover:text-white transition duration-500 ease-in-out shadow-2xl w-6/12 sm:w-auto":
          variant === "square",
        // !shadow
        "hover:shadow-2xl": shadow === "true",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
