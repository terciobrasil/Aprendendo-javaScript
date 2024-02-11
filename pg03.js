//Estrutura de repetição 
//switch, case, break, default
let comPonente1 = "HD"
let comPonente2 = "placa mae"
let comPonente3 = "memoria"

let comPonente = comPonente3

switch(comPonente){
    case "placa mae":
       console.log("faremos upgrade de placa mae") 
       comPonente = "placa mãe"
       console.log("componente substituido foi "+ comPonente)
       break

    case "memoria":
        console.log("faremos upgrade de memoria") 
        comPonente = "Memoria"
        console.log("componente substituido foi "+ comPonente)
        break

    case "HD":
        console.log("faremos upgrade de HD") 
        comPonente = "HD"
        console.log("componente substituido foi "+ comPonente)
        break
}           
