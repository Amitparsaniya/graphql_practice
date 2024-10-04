const { fetchUser, createUser, singleUSer, loginUser } = require("../../services/user")


const userResolver={
    Query:{
        userDetail:fetchUser,
        singleUser:singleUSer
    },
    Mutation:{
        createUser:createUser,
        loginUser:loginUser
    }
}

module.exports ={userResolver}