const { orderResolver } = require("./order");
const { userResolver } = require("./user");

const resolvers =[
    userResolver,
    orderResolver
]

module.exports ={resolvers}