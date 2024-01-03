import {graphql} from '../../gql';






 export const verifiyGoogleTokenQuery=graphql(` #graphql 
 query verifiyGoogleTokenQuery($token:String!){

    verfiyGoogleToken(token: $token)
}
`)

    
   

