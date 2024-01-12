import { FaTwitter } from "react-icons/fa"
import { MdOutlineHome } from "react-icons/md";
import React, { useCallback } from "react"
// import { it } from "node:test";
import { FaRegBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CgMoreR } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5"
import { MdOutlineMail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import FeedCard from "@/components/FeedCard";
<<<<<<< HEAD
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleQuery } from "@/graphql/query/user";
import { useCurrentUser } from "@/hooks/user";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

=======
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";import toast from "react-hot-toast";
import { graphqlClient } from "@/clients/api";
import { verifiyGoogleTokenQuery } from "@/graphql/query/user";
 "@react-oauth/google"
>>>>>>> c94cb66032fa9d1e97422f59a23e1e062a53af92




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
<<<<<<< HEAD
  const queryClient = useQueryClient()
  const { user } = useCurrentUser()
  console.log(user)

  const handleLoginWithGoogle = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential
    if (!googleToken) return toast.error("token invalid")

    const { verfiyGoogleToken } = await graphqlClient.request(verifyUserGoogleQuery, { token: googleToken })

    toast.success("verified successfully")
    console.log(verfiyGoogleToken)


    //used a localstorage foe store token inside a web browser
    if (verfiyGoogleToken) window.localStorage.setItem("__twitter_token", verfiyGoogleToken)
    //@ts-ignore
    await queryClient.invalidateQueries(["current-user"])

  }, [queryClient])
=======
  const handleLoginWithGoogle=useCallback(async(cred:CredentialResponse)=>{
    
    const googelToken =cred.credential


    if(!googelToken) return toast.error(`Google Token Not found`)
        
    //  const { verifyGoogleToken }  = await graphqlClient.request(
    //   verifiyGoogleTokenQuery,
    //   {token :googelToken}
    //  )

    const {verfiyGoogleToken} =await graphqlClient.request(verifiyGoogleTokenQuery ,{token:googelToken})








      toast.success(`Verified Successfully`)
    console.log(verfiyGoogleToken)

    if(verfiyGoogleToken) return window.localStorage.setItem("my_token",verfiyGoogleToken)

  },[])
>>>>>>> c94cb66032fa9d1e97422f59a23e1e062a53af92



  return <div >
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className='col-span-3 justify-start pt-2 ml-25 relative ' >
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
<<<<<<< HEAD
            <button type="button" className="bg-[#1D9BF0] font-semibold p-4 px-2 text-lg rounded-full w-full ">Tweet</button>
=======
            <button className="bg-[#1D9BF0] font-semibold p-4 px-2 text-lg rounded-full w-full ">Tweet</button>
>>>>>>> c94cb66032fa9d1e97422f59a23e1e062a53af92
          </div>
        </div>
        {user && <div className="bottom-5 absolute flex gap-2 items-center px-6 py-3 rounded-full hover:bg-[#1D1F23] ">
          {/* {user && user.profileImage &&<Image src={user?.profileImage} alt="the current login user pic" height={50} width={50}/>} */}
          {user && user.profileImage && <img className="rounded-full  " src={user.profileImage} alt="the current login user pic" height={50} width={50} />}
          <div>

            <h3 className="text-xl">
              {user.firstName}
              {" "}
              {user.lastName}
              </h3>


          </div>
        </div>}



      </div>
      <div className='col-span-6 border-r-[1px] border-l-[1px] border border-gray-600 h-screen   overflow-scroll'>
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
<<<<<<< HEAD
      <div className='col-span-3 p-5'>

        {!user && <div className=" w-full p-5 bg-stone-600 rounded-lg">
          <h1 className="my-2 text-2xl" >New to Twitter</h1>
          <GoogleLogin onSuccess={handleLoginWithGoogle} />
        </div>}

=======
      <div className='col-span-3 mx-4 p-4'>
        <div className=" w-full p-6 bg-stone-600 rounded-lg">
          <h1 className="my-2  text-2xl" >New to Twitter</h1>
          <div className="m">
        <GoogleLogin onSuccess={handleLoginWithGoogle}/>

          </div>


        </div>
>>>>>>> c94cb66032fa9d1e97422f59a23e1e062a53af92
      </div>

    </div>

  </div>
}