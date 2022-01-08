var n = undefined;
var tipo = undefined;
var resto = undefined;

function calcular(){
    n = document.getElementById('input').value //recebe o valor digitado
    var numeros = /^[0-9]+$/; //valores permitidos

    //valida o que foi digitado
    if(n.match(numeros)){
        //caso for somente numeros:
        n = parseFloat(n)
        tipo = isNaN(n)
        document.getElementById('input').style = "border-color: rgb(82, 252, 167);"
        document.getElementById('txt').style = "color: rgb(82, 252, 167);"

        resto = n % 2;
        if(resto == 0){
            document.getElementById('txt').innerHTML = "Este numero é Par!"
        }else{
            document.getElementById('txt').innerHTML = "Este numero é Ímpar!"
        }

    }else if(n == ""){
        //caso não escreva nada:
        document.getElementById('txt').style = "color: rgb(255, 0, 0);"
        document.getElementById('txt').innerHTML = "digite algo !"
        document.getElementById('input').style = "border-color:rgb(255, 0, 0);"

    }else{
        //caso escreva letras ou caracteres especiais:
        document.getElementById('txt').style = "color: rgb(255, 0, 0);"
        document.getElementById('txt').innerHTML = "digite somente NUMEROS !"
        document.getElementById('input').style = "border-color:rgb(255, 0, 0);"

    }
    
}
