const User = require("../helpers/login_helper")
class Login {
    constructor (email, senha){
        this.user = new User(email, senha)
    }
    async login(httpRequest){
        const {email, senha}  = httpRequest.body
        if (!email || !senha){
            return {statusCode: 401, message: "Email ou Senha Null" }
        }
        if(await this.user.login(email,senha) == true){
            return {statusCode: 200 }
        }
        if(await this.user.login(email,senha) == false){
            return {statusCode: 401, message: "Email invalido ou senha" }
        }
    }
}
module.exports = Login