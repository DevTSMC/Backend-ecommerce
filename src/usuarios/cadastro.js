const regx = require('../utils/regex');
class Cadastro{

    constructor (nome,email,senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    async cadastro(request){

        const {nome, senha, email} = request.body;
        const rgx= new regx();
        if(!email || !senha || !nome){
            return{statusCode:401, message:"Existe algum(s) campo(s) null"}
        }
        if(this.email == email){
            return{statusCode:401, message:"Email já utilizado"}
        }
        if(!rgx.isEmail(email)){
            return{statusCode: 401, message:"email inválido"}
        }
        if(!rgx.isName(nome)){
            return{statusCode: 401, message:"nome inválido"}
        }
        if(!rgx.isStrong(senha)){
            return{statusCode: 401, message:"senha inválida"}
        }
        return {statusCode: 200 , message:"tudo certo"}

    }
}
module.exports = Cadastro