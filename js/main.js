function validaFormulario(){
    var user = form.user.value
    var senha = form.senha.value

    if (user == ''){
        alert('O campo usuário não foi preenchido!')
    }else if(senha == '' || senha.length < 4){
        alert('Favor preencher o campo senha corretamente!')
    }else{
        alert('Sucesso!')
    }
}

function validaCadastro(){
    var user = formm.user.value
    var email = formm.email.value
    var senha = formm.senha.value
    var senha2 = formm.senha2.value

    if(user == null){
        alert('Favor cadastrar o nome do usuário')
    }else if(email == null || email.indexOf('@') == -1){
        alert('Favor informar o e-mail')
    }else if(senha == null || senha.length < 4){
        alert('Favor cadastre a senha corretamente de acordo com as exigências informadas')
    }else if(senha2 == null || senha2.length < 4 || senha2 !== senha){
        alert('A senha deve ser igual a senha cadastrada no primero bloco')
    }else{
        alert('Sucesso!!')
    }

}

function validaReset(){
    var user = formm.user.value
    var email = formm.email.value
    var senha = formm.senha.value
    var senha2 = formm.senha2.value

    if(user == ''){
        alert('O nome de usuário não foi informado')
    }else if(email == null || email.indexOf('@') == -1){
        alert('Favor informar o e-mail')
    }else if(senha == null || senha.length < 4){
        alert('Favor cadastre a senha corretamente de acordo com as exigências informadas')
    }else if(senha2 == null || senha2.length < 4 || senha2 !== senha){
        alert('A senha deve ser igual a senha cadastrada no primero bloco')
    }else{
        alert('Sucesso!!')
    }

}