import Image from "next/image";

const BarItem = ({ src }) => {
  return (
    <div className="flex md:justify-center sm:justify-start items-center sm:space-x-5 md:space-x-9 md:h-31 sm:h-20">
      <span className="sm:h-12 sm:w-12 md:h-13 md:w-13 lg:h-14 lg:w-14 bg-vpnSite-pink rounded-full flex justify-center items-center">
        <Image src={src.image} alt={"image"} />
      </span>
      <div>
        <p className="font-bold sm:text-xl md:text-2xl">{src.number}</p>
        <p className="font-normal text-vpnSite-navGray sm:text-lg md:text-xl">
          {src.name}
        </p>
      </div>
    </div>
  );
};

export default BarItem;
