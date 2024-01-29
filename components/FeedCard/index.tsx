import { Tweet } from '@/gql/graphql';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BiMessageRounded } from "react-icons/bi";
import { FaRegHeart, FaRetweet } from "react-icons/fa6";
import { MdOutlineFileUpload } from 'react-icons/md';

interface FeedCardProp{
    data:Tweet
}


const FeedCard: React.FC<FeedCardProp> = (props) => {
    const {data}=props
    return (
        <div className='border border-gray-600 border-r-0 border-l-0  border-b-0  p-5  hover:bg-[#181818]  cursor-pointer transition-all'>
            <div className='grid grid-cols-12 gap-3 '>
                <div className='col-span-1'>
                    {data.author?.profileImage &&<Image className='rounded-full' src={data.author.profileImage} alt="userPic" height={50} width={50} />}
                </div>
                <div className='col-span-11 mb-1 px-1'>
                   <Link href={`${data.author?.id}`}>
                   <h5>{data.author?.firstName} {data.author?.lastName}</h5>
                   </Link>
                    <p>
                     {data.content}
                    </p>
                    {data.imageURL && <Image src={data.imageURL}  alt='image' width={300} height={300}/>}
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



