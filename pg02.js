//switch case
//let resPosta = document.querySelector('#IdtagSelecionada').value = 'qualquer coisa';
//console.log(resPosta)

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
  })