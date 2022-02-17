import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="coursor-pointer"
        />

        <form className="flex flex-grow px-5 py-3 ml-10 mr-5 border boder-gray-200 rounded-full shadow-lg max-w-3xl items-center ">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none "
            type="text"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer tarnsition duration-100 transform hover:scale-125 "
            onClick={() => [(searchInputRef.current.value = "")]}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-gray-500 border-l-2 pl-4 border-gray-300" />

          <button type="submit" onClick={search}>
            <SearchIcon className=" mb-1 h-5 hidden sm:inline-flex text-gray-500 tarnsition duration-100 transform hover:scale-125 " />
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://i.pinimg.com/564x/de/6b/29/de6b295da4ff46c17e31688c5b274f8a.jpg"
        />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
