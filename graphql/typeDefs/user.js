const userTypeDefs =`
scalar UUID
scalar Date
type User{
    id:ID
    uuid:UUID
    firstName:String
    lastName:String
    email:String
    created_at:Date

}

type UserResponse{
    data:User
    meta:Meta
}

type UserList {
    userDetail:[User]
    userCount:Int
}


type UserListResponse{
    data:UserList
    meta:Meta
}

type Query{
    userDetail(
        page:Int
        limit:Int
        sortBy:String
        sortOrder:String
        firstName:String
    ):UserListResponse
    singleUser(uuid:UUID): UserResponse
}

type Mutation {
    createUser(
        firstName:String
        lastName:String
        email:String
        password:String
    ):UserResponse

    loginUser(
        email:String
        password:String
    ):UserResponse
}

`

module.exports =  {userTypeDefs}