// class apiError {
//     constructor(message,statuscode){
//       this.message = message,
//       this.statuscode = statuscode
//     } 
// }
// module.exports = apiError
class ApiError {
  constructor(statusCode,message){
      this.statusCode = statusCode,
      this.message = message
  }
}
module.exports = ApiError
