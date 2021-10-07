import { useContext } from "react";
import DataContext from "../Context/context";
import Card from "./Card";
const MainCardCards = () => {
  const { cards, isSelected, clickMe } = useContext(DataContext);
  return (
    <div className="block mx-auto max-w-sm sm:grid sm:max-w-none sm:grid-cols-3 sm:gap-x-1 lg:gap-x-6 xl:gap-x-12 px-6.5 lg:mb-20 xl:mb-40 mb-4">
      {cards.map((item, index) => {
        if (item === isSelected) {
          return <Card active type={item} click={clickMe} key={index} />;
        } else {
          return <Card type={item} click={clickMe} key={index} />;
        }
      })}
    </div>
  );
};

export default MainCardCards;
