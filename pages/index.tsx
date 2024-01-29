import { FaImage } from "react-icons/fa"
import React, { useCallback, useEffect, useState } from "react"
// import { it } from "node:test";
import FeedCard from "@/components/FeedCard";
import { useCurrentUser } from "@/hooks/user";
// import {  useQueryClient } from "@tanstack/react-query";
import { useCreateTweet, useGetAllTweets } from "@/hooks/tweet";
import { Tweet } from "@/gql/graphql";
import TwitterLayout from "@/components/FeedCard/Layout/TwitterLayout";
import { getSignedURLForTweetQuery, gwtAllTweetQuery } from "@/graphql/query/tweet";
import { GetServerSideProps } from "next";
import { graphqlClient } from "@/clients/api";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';



interface HomeProps {
  tweets?: Tweet[]

}

export default function Home(props: HomeProps) {
  const { user } = useCurrentUser()
  const { tweets = props.tweets as Tweet[] } = useGetAllTweets()

  const { mutateAsync } = useCreateTweet()

  // const [_tweets, setTweet] = useState<Tweet[]>(props.tweets as Tweet[])
  // const queryClient = ()

  const [content, setContent] = useState("")
  const [imageURL, setImageURL] = useState("")

  // useEffect(() => {
  //   if (tweets) {
  //     setTweet(tweets as Tweet[])
  //   }

  // }, [])

  const handleChnageFile = useCallback((input: HTMLInputElement) => {
    return async (event: Event) => {
      event.preventDefault()
      // console.log(input.files)
      const file: File | null | undefined = input.files?.item(0)
      if (!file) return

      const { getSignedURLForTweet } = await graphqlClient.request(getSignedURLForTweetQuery, {
        imageName: file.name,
        imageType: file.type

      })
      if (getSignedURLForTweet) {
        toast.loading("Uploading...", { id: "2" })
        await axios.put(getSignedURLForTweet, file, {
          headers: {
            "Content-Type": file.type,

          },
        })
        toast.success("Upload Done!", { id: "2" })
        const url = new URL(getSignedURLForTweet)
        const myFilePath = `${url.origin}${url.pathname}`
        setImageURL(myFilePath)


      }

    }


  }, [])

  const handleClickImage = useCallback(() => {
    const input = document.createElement("input")
    input.setAttribute("type", "file")
    input.setAttribute("accept", "image/*")

    const handleFn = handleChnageFile(input)




    input.addEventListener("change", handleFn)
    input.click()


  }, [handleChnageFile])

  const handleCreateTweet = useCallback(async () => {
    await mutateAsync({
      content,
      imageURL,
    })
    // setTweet((e)=>[{content,imageURL,author},...e])//optimisting apporoch not recommended
    setContent("")
    setImageURL("")


  }, [mutateAsync, content, imageURL])




  return <div >
    <TwitterLayout>
      {user && <div>
        <div className='border border-gray-600 border-r-0 border-l-0  border-b-0  p-5  hover:bg-[#181818]  cursor-pointer transition-all'>
          <div className='grid grid-cols-12 gap-3 '>
            <div className='col-span-1'>

              {user?.profileImage && <Image className='rounded-full' src={user?.profileImage} alt="userPic" height={50} width={50} />}

            </div>
            <div className="col-span-11" >
              <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                className="w-full bg-transparent text-xl px-3 border-b border-slate-800"
                placeholder="What is Happening?!"
                rows={4}
              ></textarea>
              {
                imageURL && <Image src={imageURL} alt="mytweetphoto" height={300} width={300} />
              }
              <div className="mt-2 flex justify-between">
                <FaImage onClick={handleClickImage} className="text-xl" />
                <button onClick={handleCreateTweet} type="button" className="bg-[#1D9BF0] font-semibold py-2 px-4 text-sm rounded-full  ">Tweet</button>

              </div>
            </div>

          </div>
        </div>
      </div>}

      {
        tweets?.map(tweet => tweet ? <FeedCard key={tweet.id} data={tweet as Tweet} /> : null)
      }

    </TwitterLayout>


  </div>
}


export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {

  const allTweets = await graphqlClient.request(gwtAllTweetQuery)
  return {
    props: {
      tweets: allTweets.getAllTweets as Tweet[]
    }
  }

}