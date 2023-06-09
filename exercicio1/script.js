const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

function caixaAlta(objeto) {
    let novoObjeto = {}
    for (let i in objeto) {
        novoObjeto[i] = objeto[i].toUpperCase()
        //transforma em caixa alta os objetos
    }
    /*let novoObjeto={
        nome:objeto.nome.toUpperCase(),
        profissao: objeto.profissao.toUpperCase(),
        username : objeto.username.toUpperCase(),
        senha:objeto.senha.toUpperCase()
    }*/

    return novoObjeto;
}

console.log(caixaAlta(infosPessoa));


const textoCorrido = (objeto) => {
    let texto = ""
    for (let i in objeto) {
        let valor = objeto[i]  //Cria uma Variavel para armazernar as informações
        let propriedade = [i] //"i"=propriedade ou parte inicial do objeto[i]=valor
        texto = texto + `O valor da propriedade ${propriedade} é ${valor}\n`
    }
    return texto;
}

console.log(textoCorrido(infosPessoa));