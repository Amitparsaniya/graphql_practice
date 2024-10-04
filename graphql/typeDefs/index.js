const { commonTypeDefs } = require("./common");
const { orderTypeDefs } = require("./order");
const { userTypeDefs } = require("./user");

const typeDefs =[
    commonTypeDefs,
    userTypeDefs,
    orderTypeDefs
]

module.exports ={typeDefs}