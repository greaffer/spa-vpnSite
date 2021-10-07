import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [isSelected, setIsSelected] = useState(null);

  const clickMe = (type) => {
    setIsSelected(type);
  };

  let cards = ["free", "standard", "premium"];

  const navigationLinks = [
    { name: "About", link: "#" },
    { name: "Features", link: "#" },
    { name: "Pricing", link: "#" },
    { name: "Testimonials", link: "#" },
    { name: "Help", link: "#" },
  ];

  return (
    <DataContext.Provider
      value={{
        cards,
        isSelected,
        clickMe,
        navigationLinks,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
