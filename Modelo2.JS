function tabuada() {
    let num = document.getElementById('txtn') // selecionar sempre os nomes do id
    let tab = document.getElementById('seltab')
    if (num.value.length == 0 ) { // mensagem de erro se a resposta n for a q o codigo precisa 
        window.alert('Por favor, digite um numero') // mensagem de erro 
    }else {
         let n = Number(num.value) // variavel com o numero que a pessoa digitou
         let c = 1 // variavel para da valor ao 'c'
         tab.innerHTML = '' // funcao p limpar os codigos e mostrar outros (reset)
         while (c <= 10 ) { // poderia ser usado o 'for' tmb, aq estar mostrando a condicao
            let item = document.createElement('option') // funcao (option dentro do select 'html')
            item.text = `${n} X ${c}  = ${n*c}` // parte de dentro da tabela, numeros da tabuada
            item.value= `tab${c}` // funcao para dar valor a tav selecionada
            tab.appendChild(item) // adicionar o elemento filho
            c++ // icrementacao do valor de 'c' para ele mudar de valor

         }
    }
    
}