const catchErr = fn => (req,res,next)=>{  
    Promise.resolve(fn(req,res,next)).catch(err => next(err));
 }
 module.exports = catchErr  