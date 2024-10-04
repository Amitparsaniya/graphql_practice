const express =require('express')
const {ApolloServer}= require("@apollo/server")
const {expressMiddleware} = require("@apollo/server/express4")
const axios =require('axios')
const sequelize =require('sequelize')
const db =require("./models/index")
const { typeDefs } = require('./graphql/typeDefs')
const { resolvers } = require('./graphql/resolvers')

const app =express()

app.use(express.json())

const server =new ApolloServer({
    typeDefs:typeDefs,
    resolvers:resolvers
})

 server.start().then(()=>{
     app.use("/gql",expressMiddleware(server))
 })

 db.sequelize.authenticate().then(()=>{
    console.log("db connected");
 }).catch((error)=>{
    console.log(error);
 })


app.listen(5000,()=>{
    console.log('server is up on the port 5000');
})