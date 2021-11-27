const catchError = (err,req,res,next)=>{
  
    console.log("====",JSON.stringify(err,null,2))
    if(err.name ==  "ValidationError"){
        const error = err.errors;
        const keys = Object.keys(error);
        const objerr  = {};
        keys.map(key =>{
            objerr[key] = error[key].message
        })
        err.statusCode = 400
        err.message = objerr;
    }
    if(err.name == "CastError"){
        err.statusCode = 400
        err.message = "invalid ID"
    }
    res.status(err.statusCode || 500).json({
        success : false,
        statusCode : err.statusCode || 500,
        message : err.message
    })
}
module.exports = catchError

// const catchError = (err,req,res,next) =>{
//      console.log(JSON.stringify(err,null,2));
//     // console.log(err);
//     // lổi liên quan đến validation error 
//    if(err.name === "ValidationError"){
//         const errors = err.errors;
//         const keys = Object.keys(errors) 
//         const objectError = {}
//         keys.map(key=>{ //duyet qua tung phan tử trong mảng
//             objectError[key] = errors[key].message 
//         })
//         err.statusCode = 400
//         err.message = objectError       
//    }
//    res.status(err.statusCode).json({
//     successs: false,
//     statusCode : err.statusCode || 500,
//     message : err.message || " Internal server"
// })
// }
// module.exports = catchError