
const db = require('../modle/user');

const { v4: uuidv4 } = require('uuid');

const apiError = require('../utils/apiError');
const catchErr = require('../midlleware/syncErr');

exports.addUser = catchErr(async(req,res)=>{
    console.log('fafdsafsdf')
    const {firstName,lastName} = req.body
   const result = await db.create({
       userID : uuidv4(),
       firstName,
       lastName
   })
   res.json({
       success : true,
       data : result
   })
});
exports.showUser =catchErr(async(req,res)=>{
       const result = await db.find();
       if(!result.length){
           throw new apiError(404,"result is empty");
       } 
       res.status(200).json({
           success : true,
           data : result
       })
})
exports.deleteUser = catchErr(async(req,res)=>{
       const {userID} = req.body;
       const result = await db.findOneAndDelete(userID) //xóa tài liệu phù hợp đầu tiên trong bộ sưu tập khớp với filter. 
                                                        //Các sorttham số có thể được sử dụng để ảnh hưởng đến loại tài liệu sẽ bị xóa.
       console.log(result)
        //await db.findByIdAndDelete(id)
       res.status(200).json({
           success : true,
           data : result,
           message : "delete success",
       })
})
exports.updateUser = catchErr(async(req,res)=>{
    const {userID} = req.body;

    const {firstName,lastName} = req.body
     await db.findOneAndUpdate({userID},{
       firstName,
       lastName
    },
    {   new: true,
        upsert: true,
        rawResult: true // Return the raw result from the MongoDB driver
      })
     res.status(200).json({
         success: true,
         message : "update success"
     })
})
