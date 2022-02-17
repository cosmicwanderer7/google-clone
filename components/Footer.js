function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-400 bg-gray-100 text-gray-500 font-OpenSans">
      <div className="px-8 py-3">
        <p>India</p>
      </div>

      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex link justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 font-Ubuntu">
          <img src="github-brands.png" className="h-5  px-1 "></img>{" "}
          <a href="https://myaccount.google.com/security-checkup">
            {" "}
            Github.com/cosmicwanderer7{" "}
          </a>
        </div>

        <div className="flex justify-center text-sm space-x-5 whitespace-nowrap md:justify-self-start">
          <a href="https://about.google">
            <p className="link">About</p>
          </a>
          <a href="https://ads.google.com">
            <p className="link">Advertising</p>
          </a>
          <a href="https://www.google.com/intl/en_in/business/">
            <p className="link">Business</p>
          </a>
          <a href="https://www.google.com/search/howsearchworks/">
            <p className="link">How Search Works</p>
          </a>
        </div>
        <div className="flex justify-center text-sm space-x-5 md:ml-auto">
          <a href="https://policies.google.com/privacy?hl=en-IN&fg=1">
            <p className="link">Privacy</p>
          </a>
          <a href="https://policies.google.com/terms?hl=en-IN&fg=1">
            <p className="link">Terms</p>
          </a>
          <a href="https://www.google.com/preferences?hl=en-IN&fg=1">
            <p className="link">Settings</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
