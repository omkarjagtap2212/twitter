import { graphql } from "../../gql";


  export const verifyUserGoogleQuery=graphql(` 
  #graphql

  query VerifyUserGoogleToken($token:String!){
      verfiyGoogleToken(token: $token)
  
  }
  
  
  
  
  
  `);

  export const  getCurrentUserQuery =graphql(`
  query GetCurrentUser {
    getCurrentUser {
      id
      profileImage
      email
      firstName
      lastName
    }
  }
  
  
  `);