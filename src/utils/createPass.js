const gerador = require('generate-password')
const RegxSenha = require('../../src/utils/regex')

class Gerador {
  constructor (tamanho) {
    this.tamanho = tamanho
  }

  gerar () {
    const regexSenha = new RegxSenha()
    var senha = ''
    var forte = true
    while (forte) {
      senha = gerador.generate({
        length: this.tamanho,
        numbers: true,
        uppercase: true,
        lowercase: true,
        symbols: true,
        exclude: '"`´^~><|:='
      })
      var resultadoSenha = regexSenha.isStrong(senha)
      if (resultadoSenha === true) {
        forte = false
      }
    }
    return senha
  }
}
module.exports = Gerador
