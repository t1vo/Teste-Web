#language: pt
#encoding: UTF-8

Funcionalidade: Comprar itens

@filtrar
Cenario: filtrar preco do menor para maior
Quando eu clicar no menu filtrar
E clicar na aba price low to high
Entao os itens serao reorganizados do menor preco para o maior

@adicionaritens
Cenario: adicionar tres itens ao carrinho
Quando eu clicar no botao add to cart do item Sauce Labs Onesie
E eu clicar no botao add to cart do item Sauce Labs Bike Light
E eu clicar no botao add to cart do item Sauce Labs Bolt T Shirt
E eu clicar no botao carrinho
Entao os tres itens aparecem no carrinho

@removeritens
Cenario: remover um item do carrinho
Quando eu clicar no botao add to cart do item Sauce Labs Onesie
E eu clicar no botao carrinho
E eu clicar no botao remove
Entao o item Sauce Labs Onesie sera removido

@cancelarcheckout
Cenario: cancelar compra antes de finalizar o checkout
Quando eu clicar no botao add to cart do item Sauce Labs Onesie
E eu clicar no botao add to cart do item Sauce Labs Bike Light
E eu clicar no botao add to cart do item Sauce Labs Bolt T Shirt
E eu clicar no botao carrinho
E eu clicar no botao checkout
E eu escrever no campo First Name "Nome"
E eu escrever no campo Last Name "Sobrenome"
E eu escrever no campo Postal Code "1111111"
E eu clicar no botao continue
E eu clicar no botao cancel
Entao retorno para a pagina inicial

@camposinvalidos
Cenario: validar o preenchimento dos campos de informacoes pessoais
Quando eu clicar no botao add to cart do item Sauce Labs Onesie
E eu clicar no botao carrinho
E eu clicar no botao checkout
E eu clicar no botao continue
Entao aparece erro first name is required na tela
E eu escrever no campo First Name "Nome"
E eu clicar no botao continue
Entao aparece erro last name is required na tela
E eu escrever no campo Last Name "Sobrenome"
E eu clicar no botao continue
Entao aparece erro postal code is required na tela



@finalizarcompra
Cenario: adicionar tres itens ao carrinho e finalizar o checkout
Quando eu clicar no botao add to cart do item Sauce Labs Onesie
E eu clicar no botao add to cart do item Sauce Labs Bike Light
E eu clicar no botao add to cart do item Sauce Labs Bolt T Shirt
E eu clicar no botao carrinho
E eu clicar no botao checkout
E eu escrever no campo First Name "Nome"
E eu escrever no campo Last Name "Sobrenome"
E eu escrever no campo Postal Code "1111111"
E eu clicar no botao continue
E eu clicar no botao finish
Entao recebo a mensagem de checkout complete

