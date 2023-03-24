const validacoes = {
    validaString : (valor) => {
        console.log(typeof valor)
        if (typeof valor === "string"){
            return true
        } else {
            return false
        }
    }
}

validacoes.validaString("teste")

export default validacoes