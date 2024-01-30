import TwitterLayout from "@/components/FeedCard/Layout/TwitterLayout"
import type { GetServerSideProps, NextPage } from "next"
import { FaArrowLeft } from "react-icons/fa6"
import Image from "next/image"
// import { useCurrentUser } from "@/hooks/user"
import FeedCard from "@/components/FeedCard"
import { Tweet, User } from "@/gql/graphql"
import { useRouter } from "next/router"
import { graphqlClient } from "@/clients/api"
// import { GetuserByIdQuery } from '../gql/graphql';
import { getUserByIdQuery } from "@/graphql/query/user"

interface serverProps {
  userInfo?: User

}

const UserProfilePage: NextPage<serverProps> = (props) => {
  // const { user } = useCurrentUser()
  const router = useRouter()
  console.log(props.userInfo?.followers)

  // console.log(props)

  return (
    <div>
      <TwitterLayout>
        <div>
          <nav className=" flex items-center gap-3 py-3 px-3">
            <FaArrowLeft className="text-3xl" />
            <div>
              <h1 className="text-2xl font-semibold ">Omkar Jagtap</h1>
              <h1 className="text-md font-semibold text-slate-500 ">100 Tweets</h1>
            </div>
          </nav>
          <div className=" p-4 border-b border-b-gray-800">
            {props.userInfo?.profileImage && <Image className="rounded-full" src={props.userInfo?.profileImage} alt="userImgae" width={100} height={100} />}
            <h1 className="text-2xl font-bold mt-5">Omkar Jagtap</h1>
            <div className=" flex gap-4 mt-2 text-sm text-gray-400">
              <span>{props.userInfo?.followers?.length} Followers</span>
              <span>{props.userInfo?.following?.length} Following</span>
            </div>

          </div>
          <div>
            {props.userInfo?.tweets?.map(tweet => <FeedCard data={tweet as Tweet} key={tweet?.id} />)}
          </div>
        </div>
      </TwitterLayout>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps<serverProps> = async (context) => {
  const id = context.query.id as string | undefined;
  // console.log(id)
  if (!id) return { notFound: true, props: { userInfo: undefined } }

  const userInfo = await graphqlClient.request(getUserByIdQuery, { id })

  if (!userInfo?.getUserById) return { notFound: true }
  return {
    props: {
      userInfo: userInfo.getUserById as User,
    },


  }

}

export default UserProfilePage