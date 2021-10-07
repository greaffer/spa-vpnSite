import { Disclosure } from "@headlessui/react";
import { FaChevronUp } from "react-icons/fa";
import DataContext from "../Context/context";
import { useContext } from "react";
export default function Example() {
  const { navigationLinks } = useContext(DataContext);
  return (
    <div className="w-screen px-4 pb-3">
      <div className="w-full mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "bg-red-400 text-gray-50" : ""
                } flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-50 hover:text-gray-50 bg-vpnSite-buttonRed rounded-tl-lg rounded-tr-lg hover:bg-vpnSite-buttonRed focus:outline-none focus-visible:ring focus-visible:ring-vpnSite-buttonRed focus-visible:ring-opacity-75 group`}
              >
                <span>What is your refund policy?</span>
                <FaChevronUp
                  className={`${
                    open ? "transform rotate-180 text-gray-50" : ""
                  } w-5 h-5text-gray-50 ml-1`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                <ul className="flex flex-col items-center justify-center space-y-3 w-full bg-vpnSite-pink py-3">
                  {navigationLinks.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.link} className="hover:text-gray-400">
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
