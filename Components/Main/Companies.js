import Image from "next/image";
import one from "/public/Images/Companies/1.svg";
import two from "/public/Images/Companies/2.svg";
import three from "/public/Images/Companies/3.svg";
import four from "/public/Images/Companies/4.svg";
import five from "/public/Images/Companies/5.svg";
const Companies = () => {
  const logos = [
    { image: one },
    { image: two },
    { image: three },
    { image: four },
    { image: five },
  ];
  return (
    <div className="sm:h-40 sm:flex grid grid-cols-2 justify-between items-center mb-10 sm:mb-0">
      {logos.map((logo, index) => {
        // if (logo.image === five) {
        //   return (
        //     <a
        //       href="#"
        //       className="transition duration-500 ease-in-out col-span-2 text-center hover:scale-150"
        //       key={index}
        //     >
        //       <Image src={logo.image} alt={"image"} />
        //     </a>
        //   );
        // }
        return (
          <a
            href="#"
            className="transition duration-500 ease-in-out text-center"
            key={index}
          >
            <Image src={logo.image} alt={"image"} />
          </a>
        );
      })}
    </div>
  );
};

export default Companies;
