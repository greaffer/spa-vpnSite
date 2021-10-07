const FooterLinks = () => {
  const links = [
    {
      name: "Products",
      items: [
        "Download",
        "Pricing",
        "Locations",
        "Server",
        "Countries",
        "Blog",
      ],
    },
    {
      name: "Engage",
      items: [
        "LaslesVPN",
        "FAQ",
        "Tutorials",
        "About Us",
        "Privacy Policy",
        "Terms of Service",
      ],
    },
    {
      name: "Earn Money",
      items: ["Affiliate", "Become Partner"],
    },
  ];
  return (
    <section className="flex justify-evenly sm:pb-10 pt-10 sm:pt-0 space-x-10  lg:space-x-10 xl:space-x-17">
      {links.map((items, index) => {
        return (
          <ul key={index}>
            <h4 className="text-lg font-medium mb-5">{items.name}</h4>
            {items.items.map((it, index) => {
              return (
                <li
                  className="font-normal text-base text-vpnSite-navGray mb-2"
                  key={index}
                >
                  <a href="#">{it}</a>
                </li>
              );
            })}
          </ul>
        );
      })}
    </section>
  );
};

export default FooterLinks;
