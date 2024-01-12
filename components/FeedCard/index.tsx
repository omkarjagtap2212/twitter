import Image from 'next/image'
import React from 'react'
import { BiMessageRounded } from "react-icons/bi";
import { FaRegHeart, FaRetweet } from "react-icons/fa6";
import { MdOutlineFileUpload } from 'react-icons/md';

const FeedCard: React.FC = () => {
    return (
        <div className='border border-gray-600 border-r-0 border-l-0  border-b-0  p-5  hover:bg-[#181818]  cursor-pointer transition-all'>
            <div className='grid grid-cols-12 gap-3 '>
                <div className='col-span-1'>
                    <Image className='rounded-full' src="https://avatars.githubusercontent.com/u/93461504?v=4" alt="userPic" height={50} width={50} />
                </div>
                <div className='col-span-11 mb-1 px-1'>
                    <h5>Omkar Jagtap</h5>
                    <p>
                        Expanding our search for a CS2 coach/retired CSGO Player with hands-on experience in competitive CS for
                        @GodsReignIN If you bring
                    </p>
                    <div className="flex  justify-between mt-4 text-lg p-1">
                        <div className='mr-4'>
                            <BiMessageRounded />
                        </div>
                        <div>
                            <FaRetweet />
                        </div>
                        <div>
                            <FaRegHeart />
                        </div>
                        <div className='mr-4'>
                            <MdOutlineFileUpload />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeedCard



