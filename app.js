// Visualizar a senha

let btn = document.querySelector('#olhar1')
let inputSenha = document.querySelector('#senha1')

// Visualizar a confirmação
let btn1 = document.querySelector('#olhar2')
let inputSenha1 = document.querySelector('#senha2')

let labelNome = document.querySelector('#labelNome')
let nome = document.querySelector('#nome')
let validNome = false

let labelUsuario = document.querySelector('#labelUsuario')
let usuario = document.querySelector('#usuario')
let validUsuario = false

let labelSenha1 = document.querySelector('#labelSenha1')
let senha1 = document.querySelector('#senha1')
let validSenha1 = false

let labelSenha2 = document.querySelector('#labelSenha2')
let senha2 = document.querySelector('#senha2')
let validSenha2 = false

let pagLogin = document.querySelector(".cadastro")



// Visualizar a senha
btn.addEventListener('click',()=>{    
    if(inputSenha.getAttribute('type')=='password'){
        inputSenha.setAttribute('type','text')
    }
    else{
        inputSenha.setAttribute('type','password')
    }
})

// Visualizar a confirmação
btn1.addEventListener('click',()=>{    
    if(inputSenha1.getAttribute('type')=='password'){
        inputSenha1.setAttribute('type','text')
    }
    else{
        inputSenha1.setAttribute('type','password')
    }
})

nome.addEventListener('keyup',()=>{
    if(nome.value.length <=4){
        labelNome.setAttribute('style', 'color: #FFD700')
        labelNome.innerHTML = 'Nome *Insira no minimo 6 caracteres'
        nome.setAttribute('style', 'border-color: #FFD700')
        // let validNome = false
    }
    else{
        labelNome.setAttribute('style', 'color: #00FF00')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: #00FF00')
        let validNome = true
    }
})

usuario.addEventListener('keyup',()=>{
    if(usuario.value.length <=4){
        labelUsuario.setAttribute('style', 'color:#FFD700')
        labelUsuario.innerHTML = 'Usuário *Insira no minimo 6 caracteres'
        usuario.setAttribute('style', 'border-color: #FFD700')
        let validUsuario = false
    }
    else{
        labelUsuario.setAttribute('style', 'color:#00FF00')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: #00FF00')
        let validUsuario = true
    }
})

senha1.addEventListener('keyup',()=>{
    if(senha1.value.length <=5){
        labelSenha1.setAttribute('style', 'color:#FFD700')
        labelSenha1.innerHTML = 'Senha *Insira no minimo 6 caracteres'
        senha1.setAttribute('style', 'border-color: #FFD700')
        let validSenha1 = false
    }
    else{
        labelSenha1.setAttribute('style', 'color:#00FF00')
        labelSenha1.innerHTML = 'Senha'
        senha1.setAttribute('style', 'border-color: #00FF00')
        let validSenha1 = true
    }
})

senha2.addEventListener('keyup',()=>{
    if(senha1.value != senha2.value){
        labelSenha2.setAttribute('style', 'color:#FFD700')
        labelSenha2.innerHTML = 'As senhas não correspondem'
        senha2.setAttribute('style', 'border-color: #FFD700')
        let validSenha2 = false
    }
    else{
        labelSenha2.setAttribute('style', 'color:#00FF00')
        labelSenha2.innerHTML = 'As senhas correspondem'
        senha2.setAttribute('style', 'border-color: #00FF00')
        let validSenha2 = true
    }
})

function cadastrar(){
       if(nome.value.length >= 7 && usuario.value.length >=7 && senha1.value.length >=7 && senha2.value === senha1.value){
        
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
        listaUser.push(
        {
          nomeCad: nome.value,
          userCad: usuario.value,
          senhaCad: senha1.value
        }
        )
        
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        
       
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        
        setTimeout(()=>{
            window.location.href = '../index.html'
        }, 3000)

    } else {
        pagLogin.setAttribute('style', 'height: 420px')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
      }
    }


