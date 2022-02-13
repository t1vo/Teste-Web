$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Compra.feature");
formatter.feature({
  "name": "Comprar itens",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "filtrar preco do menor para maior",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@filtrar"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no menu filtrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CompraSteps.euClicarNoMenuFiltrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar na aba price low to high",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.clicarNaAbaPriceLowToHigh()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "os itens serao reorganizados do menor preco para o maior",
  "keyword": "Entao "
});
formatter.match({
  "location": "CompraSteps.osItensSeraoReorganizadosDoMenorPrecoParaOMaior()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "adicionar tres itens ao carrinho",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@adicionaritens"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao add to cart do item Sauce Labs Onesie",
  "keyword": "Quando "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoAddToCartDoItemSauceLabsOnesie()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao add to cart do item Sauce Labs Bike Light",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoAddToCartDoItemSauceLabsBikeLight()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao add to cart do item Sauce Labs Bolt T Shirt",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoAddToCartDoItemSauceLabsBoltTShirt()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "os tres itens aparecem no carrinho",
  "keyword": "Entao "
});
formatter.match({
  "location": "CompraSteps.osTresItensAparecemNoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "remover um item do carrinho",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@removeritens"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao add to cart do item Sauce Labs Onesie",
  "keyword": "Quando "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoAddToCartDoItemSauceLabsOnesie()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao remove",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoRemove()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o item Sauce Labs Onesie sera removido",
  "keyword": "Entao "
});
formatter.match({
  "location": "CompraSteps.oItemSauceLabsOnesieSeraRemovido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "cancelar compra antes de finalizar o checkout",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cancelarcheckout"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao add to cart do item Sauce Labs Onesie",
  "keyword": "Quando "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoAddToCartDoItemSauceLabsOnesie()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao add to cart do item Sauce Labs Bike Light",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoAddToCartDoItemSauceLabsBikeLight()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao add to cart do item Sauce Labs Bolt T Shirt",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoAddToCartDoItemSauceLabsBoltTShirt()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao checkout",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoCheckout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu escrever no campo First Name \"Nome\"",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euEscreverNoCampoFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu escrever no campo Last Name \"Sobrenome\"",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euEscreverNoCampoLastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu escrever no campo Postal Code \"1111111\"",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euEscreverNoCampoPostalCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao continue",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoContinue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao cancel",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoCancel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "retorno para a pagina inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "CompraSteps.retornoParaAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "validar o preenchimento dos campos de informacoes pessoais",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@camposinvalidos"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao add to cart do item Sauce Labs Onesie",
  "keyword": "Quando "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoAddToCartDoItemSauceLabsOnesie()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao checkout",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoCheckout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao continue",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoContinue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aparece erro first name is required na tela",
  "keyword": "Entao "
});
formatter.match({
  "location": "CompraSteps.apareceErroFirstNameIsRequiredNaTela()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu escrever no campo First Name \"Nome\"",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euEscreverNoCampoFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao continue",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoContinue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aparece erro last name is required na tela",
  "keyword": "Entao "
});
formatter.match({
  "location": "CompraSteps.apareceErroLastNameIsRequiredNaTela()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu escrever no campo Last Name \"Sobrenome\"",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euEscreverNoCampoLastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao continue",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoContinue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aparece erro postal code is required na tela",
  "keyword": "Entao "
});
formatter.match({
  "location": "CompraSteps.apareceErroPostalCodeIsRequiredNaTela()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "adicionar tres itens ao carrinho e finalizar o checkout",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@finalizarcompra"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao add to cart do item Sauce Labs Onesie",
  "keyword": "Quando "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoAddToCartDoItemSauceLabsOnesie()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao add to cart do item Sauce Labs Bike Light",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoAddToCartDoItemSauceLabsBikeLight()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao add to cart do item Sauce Labs Bolt T Shirt",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoAddToCartDoItemSauceLabsBoltTShirt()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao checkout",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoCheckout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu escrever no campo First Name \"Nome\"",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euEscreverNoCampoFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu escrever no campo Last Name \"Sobrenome\"",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euEscreverNoCampoLastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu escrever no campo Postal Code \"1111111\"",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euEscreverNoCampoPostalCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao continue",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoContinue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao finish",
  "keyword": "E "
});
formatter.match({
  "location": "CompraSteps.euClicarNoBotaoFinish()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem de checkout complete",
  "keyword": "Entao "
});
formatter.match({
  "location": "CompraSteps.receboAMensagemDeCheckoutComplete()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "usuario invalido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginFalha"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"Ad\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"asd\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a mensagem de usuario invalido",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaExibeAMensagemDeUsuarioInvalido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar login",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginSucesso"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"standard_user\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"secret_sauce\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario acessa o site",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oUsuarioAcessaOSite()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
});