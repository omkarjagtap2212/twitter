/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    " #graphql\n\nmutation CreateTweet($payload: CreateTweetData!) {\n    createTweet(payload: $payload) {\n      \n      id\n    \n  }\n}\n\n\n\n\n\n": types.CreateTweetDocument,
    "#graphql\n\nquery GetAllTweets {\n    getAllTweets{\n        id\n        content\n        imageURL\n        author {\n            id\n              firstName\n              lastName\n              profileImage\n\n          }\n    }\n\n\n}\n\n\n\n": types.GetAllTweetsDocument,
    "\nquery GetSignedURL($imageName: String!, $imageType: String!) {\n    getSignedURLForTweet(imageName: $imageName, imageType: $imageType)\n  }\n\n\n\n\n": types.GetSignedUrlDocument,
    " \n  #graphql\n\n  query VerifyUserGoogleToken($token:String!){\n      verfiyGoogleToken(token: $token)\n  \n  }\n  \n  \n  \n  \n  \n  ": types.VerifyUserGoogleTokenDocument,
    " #graphql\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      profileImage\n      email\n      firstName\n      lastName\n      tweets{\n        id\n        content\n        author{\n          id\n          firstName\n          lastName\n          profileImage\n        }\n       \n\n      }\n    }\n  }\n  \n  \n  ": types.GetCurrentUserDocument,
    " #graphql\n  \n  query GetuserById($id: ID!) {\n    getUserById(id: $id) {\n     id\n     firstName\n     lastName\n     profileImage\n     followers {\n      firstName\n      lastName\n      profileImage\n     }\n     following {\n       firstName\n       lastName\n       profileImage\n     }\n\n     tweets {\n       content\n       id\n       imageURL\n       author {\n        id\n         firstName\n         lastName\n         profileImage\n       }\n     }\n  \n    }\n  }\n  \n  \n  \n  ": types.GetuserByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " #graphql\n\nmutation CreateTweet($payload: CreateTweetData!) {\n    createTweet(payload: $payload) {\n      \n      id\n    \n  }\n}\n\n\n\n\n\n"): (typeof documents)[" #graphql\n\nmutation CreateTweet($payload: CreateTweetData!) {\n    createTweet(payload: $payload) {\n      \n      id\n    \n  }\n}\n\n\n\n\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n\nquery GetAllTweets {\n    getAllTweets{\n        id\n        content\n        imageURL\n        author {\n            id\n              firstName\n              lastName\n              profileImage\n\n          }\n    }\n\n\n}\n\n\n\n"): (typeof documents)["#graphql\n\nquery GetAllTweets {\n    getAllTweets{\n        id\n        content\n        imageURL\n        author {\n            id\n              firstName\n              lastName\n              profileImage\n\n          }\n    }\n\n\n}\n\n\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetSignedURL($imageName: String!, $imageType: String!) {\n    getSignedURLForTweet(imageName: $imageName, imageType: $imageType)\n  }\n\n\n\n\n"): (typeof documents)["\nquery GetSignedURL($imageName: String!, $imageType: String!) {\n    getSignedURLForTweet(imageName: $imageName, imageType: $imageType)\n  }\n\n\n\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " \n  #graphql\n\n  query VerifyUserGoogleToken($token:String!){\n      verfiyGoogleToken(token: $token)\n  \n  }\n  \n  \n  \n  \n  \n  "): (typeof documents)[" \n  #graphql\n\n  query VerifyUserGoogleToken($token:String!){\n      verfiyGoogleToken(token: $token)\n  \n  }\n  \n  \n  \n  \n  \n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " #graphql\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      profileImage\n      email\n      firstName\n      lastName\n      tweets{\n        id\n        content\n        author{\n          id\n          firstName\n          lastName\n          profileImage\n        }\n       \n\n      }\n    }\n  }\n  \n  \n  "): (typeof documents)[" #graphql\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      profileImage\n      email\n      firstName\n      lastName\n      tweets{\n        id\n        content\n        author{\n          id\n          firstName\n          lastName\n          profileImage\n        }\n       \n\n      }\n    }\n  }\n  \n  \n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " #graphql\n  \n  query GetuserById($id: ID!) {\n    getUserById(id: $id) {\n     id\n     firstName\n     lastName\n     profileImage\n     followers {\n      firstName\n      lastName\n      profileImage\n     }\n     following {\n       firstName\n       lastName\n       profileImage\n     }\n\n     tweets {\n       content\n       id\n       imageURL\n       author {\n        id\n         firstName\n         lastName\n         profileImage\n       }\n     }\n  \n    }\n  }\n  \n  \n  \n  "): (typeof documents)[" #graphql\n  \n  query GetuserById($id: ID!) {\n    getUserById(id: $id) {\n     id\n     firstName\n     lastName\n     profileImage\n     followers {\n      firstName\n      lastName\n      profileImage\n     }\n     following {\n       firstName\n       lastName\n       profileImage\n     }\n\n     tweets {\n       content\n       id\n       imageURL\n       author {\n        id\n         firstName\n         lastName\n         profileImage\n       }\n     }\n  \n    }\n  }\n  \n  \n  \n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;