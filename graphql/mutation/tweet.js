"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTweetMutation = void 0;
const gql_1 = require("@/gql");
exports.createTweetMutation = (0, gql_1.graphql)(` #graphql

mutation CreateTweet($payload: CreateTweetData!) {
    createTweet(payload: $payload) {
      
      id
    
  }
}





`);
