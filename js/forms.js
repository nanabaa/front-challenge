function checkInputs(){

    let nome = document.querySelector('#nome').value
    let email = document.querySelector('#email').value
    let telefone = document.querySelector('#telefone').value
    let mensagem = document.querySelector('#mensagem').value
    
    if (!nome || !email || !telefone || !mensagem){
        alert("Preencha todos os campos!")
       
    }
    else{
        alert("Mensagem enviada!")
    }
    
}


/*let expressao = '/^(55)?(?:([1-9]{2})?)(\d{4,5})(\d{4})$/';
    let regex = new RegExp(expressao);
else if(!regex.test(telefone)){
       alert("Telefone inválido!")
    }*/
