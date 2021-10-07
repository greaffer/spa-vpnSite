const VpnContainer = ({ children }) => {
  return (
    <main
      className={`2xl:container mx-auto md:px-10 px-4 sm:px-5 md:px-13 lg:px-15 xl:px-37 font-rubik overflow-hidden`}
    >
      {children}
    </main>
  );
};

export default VpnContainer;
