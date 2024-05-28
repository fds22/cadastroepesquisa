function login(){
    const user= document.getElementById('nomeUser').value;
    const password = document.getElementById('passwordUser').value;

    var userCerto = 'adm';
    var passwordCerto = 'adm';

    if(user === userCerto && password === passwordCerto){
        window.location.href = 'cadastro.html';
    }else{
        alert('Senha e/ou usuario incorreto(s)');
    }
}