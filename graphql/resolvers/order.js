const { createOrder, fetchOrder } = require("../../services/order");

const orderResolver ={
    Query:{
        OrderDetail:fetchOrder
    },
    Mutation:{
        createOrder:createOrder
    }
}

module.exports ={orderResolver}