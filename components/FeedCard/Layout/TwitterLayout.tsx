import { graphqlClient } from '@/clients/api'
import { verifyUserGoogleQuery } from '@/graphql/query/user'
import { useCurrentUser } from '@/hooks/user'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useCallback, useMemo } from 'react'
import toast from 'react-hot-toast'
import { CgMoreR, CgProfile } from 'react-icons/cg'
import { FaSearch } from 'react-icons/fa'
import {  FaRegBookmark, FaTwitter } from 'react-icons/fa6'
import { IoNotificationsOutline } from 'react-icons/io5'
import { MdOutlineHome, MdOutlineMail } from 'react-icons/md'


interface TwitterLayoutProps {
    children: React.ReactNode
}

interface TwitterSidebarButton {
    title: string
    icon: React.ReactNode
    link:string

}


const TwitterLayout: React.FC<TwitterLayoutProps> = (props) => {
    const { user } = useCurrentUser()
    const queryClient = useQueryClient()
  
    const SidebarMenuItems:TwitterSidebarButton[]=useMemo(()=>[
     

    {
        title: "Home",
        icon: <MdOutlineHome />,
        link:"/"

    },
    {
        title: "Explore",
        icon: <FaSearch />,
        link:"/"

    },

    {
        title: "Notifications",
        icon: <IoNotificationsOutline />,
        link:"/"

    },
    {
        title: "Messages",
        icon: <MdOutlineMail />,
        link:"/"

    },
    {
        title: "Bookmarks",
        icon: <FaRegBookmark />,
        link:"/"

    },

    {
        title: "Profile",
        icon: <CgProfile />,
        link:`/${user?.id}`

    },
    {
        title: "More",
        icon: <CgMoreR />,
        link:"/"

    },
],[user?.id])






    

    const handleLoginWithGoogle = useCallback(async (cred: CredentialResponse) => {
        const googleToken = cred.credential
        if (!googleToken) return toast.error("token invalid")

        const { verfiyGoogleToken } = await graphqlClient.request(verifyUserGoogleQuery, { token: googleToken })

        toast.success("verified successfully")
        // console.log(verfiyGoogleToken)


        //used a localstorage foe store token inside a web browser
        if (verfiyGoogleToken) window.localStorage.setItem("__twitter_token", verfiyGoogleToken)
        //@ts-ignore
        await queryClient.invalidateQueries(["current-user"])

    }, [queryClient])


    return (
        <div className="grid grid-cols-12 h-screen w-screen sm:px-56">
            <div className='col-span-2 sm:col-span-3 pt-2 flex sm:justify-end pr-4 relative ' >
                <div>
                    <div className="text-3xl h-fit w-fit hover:bg-[#181818] rounded-full p-2  cursor-pointer transition-all">
                        <FaTwitter />
                    </div>
                    <div className="mt-1 text-2xl pr-4">
                        <ul>
                            {SidebarMenuItems.map((item) => (
                                <li 
                                    key={item.title}
                                >
                                   <Link className="flex justify-start items-center gap-2.5 hover:bg-[#181818] mt-2 rounded-full px-2 py-3 w-full cursor-pointer  transition-all" href={item.link}>
                                   <span>{item.icon}</span>
                                    <span className=' hidden sm:inline'>{item.title}</span>
                                   
                                   </Link>
                                </li>
                            ))}
                        </ul>
                        {/* <button className="flex justify-start items-start font-medium  pr-4  mr-2 mt-7 bg-blue-500 px-12 py-3 w-full rounded-full" >Tweet</button> */}
                        <div className="mt-5 ">
                            <button type="button" onClick={(e)=>queryClient.invalidateQueries(["current-user"])} className="hidden sm:block bg-[#1D9BF0] font-semibold p-4 px-2 text-lg rounded-full w-full ">Tweet</button>

                            <button type="button" className="block sm:hidden  bg-[#1D9BF0] font-semibold p-3 px-4 m-1 text-lg rounded-full w-full "> <FaTwitter/>   </button>
                        </div>
                    </div>
                </div>
                {user && <div className="bottom-5 absolute flex gap-2 items-center px-6 py-3 rounded-full hover:bg-[#1D1F23] ">
                    {/* {user && user.profileImage &&<Image src={user?.profileImage} alt="the current login user pic" height={50} width={50}/>} */}
                    {user && user.profileImage && <img className="rounded-full   " src={user.profileImage} alt="the current login user pic" height={50} width={50} />}
                    <div className='hidden sm:block '>

                        <h3 className="text-xl">
                            {user.firstName}
                            {" "}
                            {user.lastName}
                        </h3>


                    </div>
                </div>}



            </div>
            <div className='col-span-10 sm:col-span-6 border-r-[1px] border-l-[1px] border border-gray-600 h-screen   overflow-scroll'>
                {props.children}

            </div>
            <div className='col-span-0 sm:col-span-3'>

                {!user && <div className="px-0.9  py-5 m-3.5 hover:bg-neutral-700 rounded-lg">
                    <h1 className=" text-2xl font-bold text-b" >New to Twitter</h1>
                    <GoogleLogin onSuccess={handleLoginWithGoogle} />
                </div>}

            </div>

        </div>
    )
}

export default TwitterLayout