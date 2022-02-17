function HeaderOption({ Icon, title, selected }) {
  return (
    <div
      className={`flex items-center space-x-1 border-b-2 border-transparent hover:text-blue-400 
    hover:border-blue-400 pb-2 cursor-pointer ${
      selected && "text-blue-500 boarder-blue-400"
    }`}
    >
      <Icon className="h-5" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
