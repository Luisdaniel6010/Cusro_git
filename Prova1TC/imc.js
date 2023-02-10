var conta = 100;

function grojeta(conta){

   if (conta <= 100){
    return(conta * 0.15)
   } else if ( conta > 100 && conta <= 150){
    return(conta * 0.10)
   } else if (conta > 150 && conta <= 300){
    return(conta * 0.08)
   }else (conta > 300)
    return(conta * 0.05)
}


   function notaMedia(n1, n2, n3){
    var media = n1 + n2 + n3 / 3;
         
    if (media > 10){
        return (media)
    } else if (nota <= 10)
        return (media)
         
   }

var contas =  [589, 448, 
    697, 4568, 1487, 668, 478, 5387, 1147, 2235, 
    5578, 5693, 335, 114, 225, 356, 358, 774, 441, 
    325, 2254, 225, 220, 100, 89, 78, 558, 25]



    contas.forEach(function(item,pos){
        var gro1 = item*0.15
        var gro2 = item*0.10
        var gro3 = item*0.08
        var gro4 = item*0.05
        if(item < 100){
            console.log(pos, item, gro1)
        }else if(item >=100 && item <= 150){
            console.log(pos, item, gro2)
        }else if(item >150 && item <= 300){
            console.log(pos, item, gro3)
        }else(item >300)
            console.log(pos, item, gro4)
                        
    })
    

    var contas =  [589, 448, 
        697, 4568, 1487, 668, 478, 5387, 1147, 2235, 
        5578, 5693, 335, 114, 225, 356, 358, 774, 441, 
        325, 2254, 225, 220, 100, 89, 78, 558, 25]

        

        contas.forEach(function(item){
            var gro1 = item*0.15
            var gro2 = item*0.10
            var gro3 = item*0.08
            var gro4 = item*0.05
            var grojetas = []
            

            if(item < 100){
                grojetas.push(gro1)
            }else if(item >=100 && item <= 150){
                grojetas.push(gro2)
            }else if(item >150 && item <= 300){
                grojetas.push(gro3)
            }else(item >300);
                grojetas.push(gro4)
                    
                console.log(grojetas)
        })  

        var pessoas = [
            {
                peso: 89,
                altura: 1.78
            },{
                peso: 76,
                altura: 1.69
            },{
                peso: 87,
                altura: 1.88
            }]

        pessoas.forEach(function(item){
            var imcs = []
            var peso = item.peso
            var altura = item.altura
            var imc = peso/altura**altura;

            imcs.push(imc)
            console.log(imcs)

        })
        
        var contas = [589, 448, 697, 4568, 1487, 668, 478, 5387, 1147, 2235, 5578, 5693, 335, 114, 225, 356, 358, 774, 441, 325, 2254, 225, 220, 100, 89, 78, 558, 25]

var gorjetas = [];


contas.forEach(function(c){
    if(c < 100){
        gorjetas.push(c * 0.15)
    } else if(c >= 100 && c <= 150){
        gorjetas.push(c * 0.10)
    } else if(c > 150 && c <= 300){
        gorjetas.push(c * 0.08)
    } else {
        gorjetas.push(c * 0.05)
    }
})


var agregarcarrito = document.querySelectorAll('.add_to_cart_button')

agregarcarrito.forEach(function(botao){
    botao.addEventListener('click', function(){
        console.log('foi')
    })    
})

document.querySelectorAll('.add_to_cart_button').forEach(function(el){
    el.addEventListener('click', function(){
        console.log('adicionei ao carrinho')
    })
})


var btn = []

document.querySelectorAll('#buttons button').forEach(function(){

  btn.push(buttons.innerText)
  btn.addEventListener('click', function(){
    
  })
  console.log(btn)