const { Order, User } = require("../models/index");
const { success } = require("../utils/helper");


exports.createOrder = async(_,input)=>{
    try {
        const {userId,productName,price,quantity} =input

        const data =await Order.create({
            product_name:productName,
            user_id:userId,
            price:price,
            quantity:quantity
        })
        return success("order created successfully",data,200)

    } catch (error) {
        console.log(error);
    }
}

exports.fetchOrder = async(_,input)=>{
    try {
        let where={}
        const page= input.page?input.page:1
        const limit= input.limit?input.limit:10
        const offset = (page-1)*limit
        const sortBy = input.sortBy?input.sortBy:"created_at"
        const sortOrder= input.sortOrder?input.sortOrder:"asc"
        const data = await Order.findAll({
            where,
            include:[{model:User}],
            order:[[sortBy,sortOrder]],
            offset,
            limit
        })
        return success("order fetch successfully",data,200)
    } catch (error) {
        console.log(error);
    }
}