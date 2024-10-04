const orderTypeDefs =`
  scalar ID
  scalar UUID
  scalar Date
 type Order{
    id:ID
    uuid:UUID
    user_id:Int
    product_name :String
    price:Int
    quantity:Int
    created_at:Date
    user:User
 }
 type OrderListWithUser{
    id:ID
    uuid:UUID
    user_id:Int
    product_name :String
    price:Int
    quantity:Int
    created_at:Date
    user:User
 }

 type OrderResponse{
    data :Order
    meta:Meta
 }

 type OrderList{
    data :[OrderListWithUser]
    meta:Meta
 }

 type Query{
    OrderDetail(
        page:Int
        limit:Int
        sortBy:String
        sortOrder:String
    ):OrderList
 }

 type Mutation{
    createOrder(
        userId:Int
        productName :String
        price:Int
        quantity:Int
    ):OrderResponse
 }

`

module.exports ={orderTypeDefs}