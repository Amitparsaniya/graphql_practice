const {User} = require("../models/index") 
const bcrypt = require("bcrypt")
const { success, failure } = require("../utils/helper")
const { Op } = require("sequelize")


exports.createUser =async (_,input)=>{
    const {firstName,lastName,email,password} = input

    const userDetail = await User.findOne({
        where:{email:email}
    })
    if(userDetail){    
        return failure("email is already exist",400)
    }
    const hashpassword = await bcrypt.hash(password,10)
    const data = await User.create({
        firstName:firstName,
        lastName:lastName,
        password:hashpassword,
        email
    })

    return success("user created successfully",data,200)
}

exports.fetchUser =async (_,input)=>{
    let where ={deleted_at:null}
    const limit =input.limit ?input.limit:10
    const page = input.page?input.page:1
    const offset = (page-1)*limit
    const sortBy =input.sortBy?input.sortBy:"created_at"
    const sortOrder = input.sortOrder?input.sortOrder:"asc"

    if(input.firstName){
        where={
            ...where,
            firstName:{[Op.iLike]:`%${input.firstName}`}
        }
    }
    const userData= await User.findAll({
        where,
        order:[[sortBy,sortOrder]],
        offset,
        limit
    })
    const userCount = await User.count()
    const userDetail =[]
    userData.forEach((data)=>{
        userDetail.push({
            id:data.id,
            uuid:data.uuid,
            firstName :data.firstName ||"",
            lastName:data.lastName ||"",
            email:data.email ||"",
            created_at:data.created_at
        })

    })
    const data={
        userDetail,
        userCount
    }
    return success("user fetch successfully",data,200)
    // return data
}

exports.singleUSer =async (_,{uuid})=>{
    const userDetail =await User.findOne({
        where:{uuid:uuid},
        attributes:['id','uuid','firstName','lastName','email','created_at']
    })

    const userData ={
        id:userDetail.id,
        uuid:userDetail.uuid,
        firstName :userDetail.firstName ||"",
        lastName:userDetail.lastName ||"",
        email:userDetail.email ||"",
        created_at:userDetail.created_at ||""
    }

    return success("user fetch successfully",userData,200)
}

exports.loginUser = async (_,input) =>{
    try {
        const {email,password} =input

        const userDetail = await User.findOne({where:{email:email}})

        if(!userDetail) return failure("user detail not found",404);

        const verifypassword =   await bcrypt.compare(password,userDetail.password)

        if(!verifypassword) return  failure("email or password does not match",404);
        return  success("user login successfully",userDetail,200)
    
    } catch (error) {
        console.log(error);
    }
}