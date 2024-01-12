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
<<<<<<< HEAD
    " \n  #graphql\n\n  query VerifyUserGoogleToken($token:String!){\n      verfiyGoogleToken(token: $token)\n  \n  }\n  \n  \n  \n  \n  \n  ": types.VerifyUserGoogleTokenDocument,
    "\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      profileImage\n      email\n      firstName\n      lastName\n    }\n  }\n  \n  \n  ": types.GetCurrentUserDocument,
=======
    " #graphql \n query verifiyGoogleTokenQuery($token:String!){\n\n    verfiyGoogleToken(token: $token)\n}\n": types.VerifiyGoogleTokenQueryDocument,
>>>>>>> c94cb66032fa9d1e97422f59a23e1e062a53af92
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
<<<<<<< HEAD
export function graphql(source: " \n  #graphql\n\n  query VerifyUserGoogleToken($token:String!){\n      verfiyGoogleToken(token: $token)\n  \n  }\n  \n  \n  \n  \n  \n  "): (typeof documents)[" \n  #graphql\n\n  query VerifyUserGoogleToken($token:String!){\n      verfiyGoogleToken(token: $token)\n  \n  }\n  \n  \n  \n  \n  \n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      profileImage\n      email\n      firstName\n      lastName\n    }\n  }\n  \n  \n  "): (typeof documents)["\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      profileImage\n      email\n      firstName\n      lastName\n    }\n  }\n  \n  \n  "];
=======
export function graphql(source: " #graphql \n query verifiyGoogleTokenQuery($token:String!){\n\n    verfiyGoogleToken(token: $token)\n}\n"): (typeof documents)[" #graphql \n query verifiyGoogleTokenQuery($token:String!){\n\n    verfiyGoogleToken(token: $token)\n}\n"];
>>>>>>> c94cb66032fa9d1e97422f59a23e1e062a53af92

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;