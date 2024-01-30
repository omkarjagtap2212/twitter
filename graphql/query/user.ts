import { graphql } from "../../gql";


export const verifyUserGoogleQuery = graphql(` 
  #graphql

  query VerifyUserGoogleToken($token:String!){
      verfiyGoogleToken(token: $token)
  
  }
  
  
  
  
  
  `);

export const getCurrentUserQuery = graphql(` #graphql
  query GetCurrentUser {
    getCurrentUser {
      id
      profileImage
      email
      firstName
      lastName
      tweets{
        id
        content
        author{
          id
          firstName
          lastName
          profileImage
        }
       

      }
    }
  }
  
  
  `);


export const getUserByIdQuery = graphql(` #graphql
  
  query GetuserById($id: ID!) {
    getUserById(id: $id) {
     id
     firstName
     lastName
     profileImage
     followers {
      firstName
      lastName
      profileImage
     }
     following {
       firstName
       lastName
       profileImage
     }
     tweets {
       content
       id
       imageURL
       author {
        id
         firstName
         lastName
         profileImage
       }
     }
  
    }
  }
  
  
  
  `)