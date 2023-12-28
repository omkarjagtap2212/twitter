import { FaTwitter } from "react-icons/fa"
import { MdOutlineHome } from "react-icons/md";
import React from "react"
// import { it } from "node:test";
import { FaRegBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CgMoreR } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5"
import { MdOutlineMail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import FeedCard from "@/components/FeedCard";




interface TwitterSidebarButton {
  title: string
  icon: React.ReactNode

}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <MdOutlineHome />

  },
  {
    title: "Explore",
    icon: <FaSearch />

  },

  {
    title: "Notifications",
    icon: <IoNotificationsOutline />

  },
  {
    title: "Messages",
    icon: <MdOutlineMail />

  },
  {
    title: "Bookmarks",
    icon: <FaRegBookmark />

  },

  {
    title: "Profile",
    icon: <CgProfile />

  },
  {
    title: "More",
    icon: <CgMoreR />

  },
]



export default function Home() {
  return <div >
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className='col-span-3 justify-start pt-2 ml-25 ' >
        <div className="text-3xl h-fit w-fit hover:bg-[#181818] rounded-full p-2  cursor-pointer transition-all">
          <FaTwitter />
        </div>
        <div className="mt-1 text-2xl pr-4">
          <ul>
            {SidebarMenuItems.map((item) => (
              <li className="flex justify-start items-center gap-2.5 hover:bg-[#181818] mt-2 rounded-full px-2 py-3 w-full cursor-pointer  transition-all"
                key={item.title}
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          {/* <button className="flex justify-start items-start font-medium  pr-4  mr-2 mt-7 bg-blue-500 px-12 py-3 w-full rounded-full" >Tweet</button> */}
          <div className="mt-5 ">
          <button className="bg-[#1D9BF0] font-semibold p-4 px-2 text-lg rounded-full w-full ">Tweet</button>
          </div>
        </div>



      </div>
      <div className='col-span-6 border-r-[1px] border-l-[1px] border border-gray-600 h-screen   overflow-scroll'>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>
      <div className='col-span-3 '></div>

    </div>

  </div>
}