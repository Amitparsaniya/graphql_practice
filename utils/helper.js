const success = (message,data,statusCode = 200)=>{
    const result ={}
    result.meta={
        message:message,
        statusCode,
        status:statusCode
    }
    console.log(/data/,data);
   
    if(data  || data.userDetail){
        result.data = data
    }
    
    console.log(/result/,result);
    return result
}


const failure =(message,statusCode=400)=>{
    const result ={}
    result.meta ={
        message:message,
        statusCode,
        status:statusCode
    }

    return result
}

module.exports ={success,failure}