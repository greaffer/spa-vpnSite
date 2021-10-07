import Image from "next/image";
import picOne from "/public/Images/Slider/pic1.svg";
import picTwo from "/public/Images/Slider/pic2.svg";
import picThree from "/public/Images/Slider/pic3.svg";
import star from "/public/Images/Slider/star.svg";
const SliderCard = ({ id, selection }) => {
  const people = [
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      body: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
      stars: 4.5,
      avatar: picOne,
    },
    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      body: "“I like it because I like to travel far and still can connect with high speed.”.",
      stars: 4.5,
      avatar: picTwo,
    },
    {
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      body: "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
      stars: 4.5,
      avatar: picThree,
    },
    {
      name: "Adrian Gorgos",
      location: "Chisinau, Moldova",
      body: "“I like it because I like to travel far and still can connect with high speed.”.",
      stars: 4.5,
      avatar: picOne,
    },
  ];
  return (
    <>
      {people.map((person, index) => {
        if (id === index) {
          return (
            <section
              className={`sm:p-4 md:p-7 border-2 rounded-xl w-full h-60 ${
                id === selection && "border-vpnSite-redBorder"
              }`}
              key={index}
            >
              <div className="flex justify-between mb-2">
                <header className="flex">
                  <Image src={person.avatar} alt={"image"} />
                  <div className="flex flex-col sm:ml-1 md:ml-5">
                    <h4 className="font-medium text-lg flex">{person.name}</h4>
                    <p className="font-normal text-sm text-vpnSite-navGray">
                      {person.location}
                    </p>
                  </div>
                </header>
                <header className="flex justify-center items-center">
                  <p>{person.stars}</p>
                  <Image src={star} alt={"image"} />
                </header>
              </div>
              <main>
                <p className="sm:overflow-y-scroll sm:h-24 lg:overflow-visible">
                  {person.body}
                </p>
              </main>
            </section>
          );
        }
      })}
    </>
  );
};

export default SliderCard;
