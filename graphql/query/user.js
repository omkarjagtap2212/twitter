"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdQuery = exports.getCurrentUserQuery = exports.verifyUserGoogleQuery = void 0;
const gql_1 = require("../../gql");
exports.verifyUserGoogleQuery = (0, gql_1.graphql)(` 
  #graphql

  query VerifyUserGoogleToken($token:String!){
      verfiyGoogleToken(token: $token)
  
  }
  
  
  
  
  
  `);
exports.getCurrentUserQuery = (0, gql_1.graphql)(` #graphql
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
exports.getUserByIdQuery = (0, gql_1.graphql)(` #graphql
  
  query GetuserById($id: ID!) {
    getUserById(id: $id) {
     id
     firstName
     lastName
     profileImage
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
  
  
  
  `);
