import users from "/public/Images/Header/users.svg";
import pinpoint from "/public/Images/Header/pinpoint.svg";
import server from "/public/Images/Header/server.svg";
import BarItem from "./BarItem";
const HeaderBar = () => {
  const barItems = [
    { image: users, number: "90+", name: "Users" },
    { image: pinpoint, number: "30+", name: "Locations" },
    { image: server, number: "50+", name: "Servers" },
  ];
  return (
    <div className="hidden sm:grid sm:grid-cols-1 md:grid-cols-3 md:divide-x-2 divide-gray-200 divide-opacity-70 md:rounded-lg sm:p-1 md:p-5 md:shadow-md lg:mb-20 xl:mb-24">
      {barItems.map((item, index) => {
        return <BarItem src={item} key={index} />;
      })}
    </div>
  );
};

export default HeaderBar;
