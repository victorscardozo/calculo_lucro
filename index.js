function calcularLucro() {

    var item = prompt('Nome do item');
    var custo = parseFloat(prompt('Custo de compra do item'));
    var markup = parseFloat(prompt('insira aqui quantas vezes o valor do custo você quer precificar.'));
    
    var preco = custo*markup;

    var lucro = preco - custo;







    var tabela = document.querySelector('.tabela');
    var novaLinha = tabela.insertRow();




    novaLinha.insertCell(0).innerText = item;
    novaLinha.insertCell(1).innerText = custo;
    novaLinha.insertCell(2).innerText = markup;
    novaLinha.insertCell(3).innerText = preco;
    novaLinha.insertCell(4).innerText = lucro;

    
}
   
   

