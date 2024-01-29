import { graphql } from "@/gql";

export const gwtAllTweetQuery = graphql(`#graphql

query GetAllTweets {
    getAllTweets{
        id
        content
        imageURL
        author {
            id
              firstName
              lastName
              profileImage

          }
    }


}



`)

export const getSignedURLForTweetQuery = graphql(`
query GetSignedURL($imageName: String!, $imageType: String!) {
    getSignedURLForTweet(imageName: $imageName, imageType: $imageType)
  }




`


)