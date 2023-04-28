
let valorCompra = prompt('digite o valor de compra do item')



let item = prompt('digite o item')
let estoque = prompt('digite o estoque do item')
let imposto = prompt('digite o imposto sob o item (em %)') / 100 * valorCompra
let markup = (valorCompra * 3) + imposto
let desconto = (prompt('digite um desconto de 0-100')/ 100 * markup)



let preco = (markup - desconto - valorCompra)


let lucroUnid = (preco - desconto)
let lucroTotal = (lucroUnid * estoque)




let produto_1 = (item + ":" + '\n' +
    '\n' +
    "Estoque        : " + estoque + '\n' +
    "Preço compra      : " + valorCompra + '\n' +
    "Imposto sobre     : " + imposto + '\n' +
    "Valor sem desconto: " + markup + '\n' +
    "Desconto          : " + desconto + '\n' +
    '\n' +
    ">>Preço do item   : " + preco + '\n' +
    '\n' +

    ("(LUCRO LÍQUIDO UNITÁRIO: " + lucroUnid + ")") + '\n' +
    ("(LUCRO LÍQUIDO DO ESTOQUE: " + lucroTotal + ")")

)



