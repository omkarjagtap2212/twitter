<<<<<<< HEAD
import {GraphQLClient} from "graphql-request"

const isClient = typeof window !== "undefined"
 export const graphqlClient = new GraphQLClient("http://localhost:8000/graphql",{
    headers:()=>({
        Authorization:isClient
        ?`Bearer ${window.localStorage.getItem("__twitter_token")}`
        :""
    })
 })
=======
import { GraphQLClient } from 'graphql-request';

const isClient = typeof window !== "undefined"

 export const graphqlClient = new GraphQLClient("http://localhost:8000/graphql",{
    headers:()=>({
        Authorization:isClient?`Bearer ${window.localStorage.getItem("my_token")}`:"",
    })
 })
>>>>>>> c94cb66032fa9d1e97422f59a23e1e062a53af92
