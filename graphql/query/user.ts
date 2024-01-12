<<<<<<< HEAD
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
=======
import {graphql} from '../../gql';






 export const verifiyGoogleTokenQuery=graphql(` #graphql 
 query verifiyGoogleTokenQuery($token:String!){

    verfiyGoogleToken(token: $token)
}
`)

    
   

>>>>>>> c94cb66032fa9d1e97422f59a23e1e062a53af92
