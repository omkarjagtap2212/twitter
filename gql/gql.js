"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphql = void 0;
/* eslint-disable */
const types = __importStar(require("./graphql"));
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
    " #graphql\n  \n  query GetuserById($id: ID!) {\n    getUserById(id: $id) {\n     id\n     firstName\n     lastName\n     profileImage\n     tweets {\n       content\n       id\n       imageURL\n       author {\n        id\n         firstName\n         lastName\n         profileImage\n       }\n     }\n  \n    }\n  }\n  \n  \n  \n  ": types.GetuserByIdDocument,
};
function graphql(source) {
    var _a;
    return (_a = documents[source]) !== null && _a !== void 0 ? _a : {};
}
exports.graphql = graphql;
