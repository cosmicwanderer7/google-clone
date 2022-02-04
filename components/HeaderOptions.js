import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { useRef } from "react";
import { useRouter } from "next/router";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 boarer-b font-OpenSans">
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <a href="https://www.google.co.in/imghp?hl=en&ogbl">
          {" "}
          <HeaderOption Icon={PhotographIcon} title="Images" />
        </a>
        <a href="https://www.youtube.com">
          {" "}
          <HeaderOption Icon={PlayIcon} title="Videos" />
        </a>
        <a href="https://news.google.com">
          {" "}
          <HeaderOption Icon={NewspaperIcon} title="News" />
        </a>
        <a href="https://www.google.com/maps">
          {" "}
          <HeaderOption Icon={MapIcon} title="Maps" />
        </a>
        <a href="">
          {" "}
          <HeaderOption Icon={DotsVerticalIcon} title="More" />
        </a>
      </div>

      <div className="flex space-x-4">
        <a href="https://www.google.com/preferences?hl=en-IN&fg=1">
          <p className="link">Settings</p>
        </a>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
