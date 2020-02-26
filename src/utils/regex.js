class Regex{

    isName(name){
        const regex = /^(?![ ])(?!.*[ ]{2})((?:e|da|do|das|dos|de|d'|D'|la|las|el|los)\s*?|(?:[A-Z][^\s]*\s*?)(?!.*[ ]$))+$/;
        console.log(regex.test(name))
        return regex.test(name);
     }
    isEmail(email){
        const regex = /^(\S+)@((?:(?:(?!-)[a-zA-Z0-9-]{1,62}[a-zA-Z0-9])\.)+[a-zA-Z0-9]{2,12})$/;
        console.log(regex.test(email)); //true
        return regex.test(email);
    }
    isStrong(senha){
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*()+\-.,;?\^.,;?><:{}\[\]])[\w!@#$%&*()+\-.,;?\^.,;?><:{}\[\]]{6,12}$/;
        console.log(regex.test(senha))
        return regex.test(senha);
        
    }
}
module.exports = Regex;