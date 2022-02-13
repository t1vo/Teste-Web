package stepsDefinitions;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.PaginaInicialPage;

import static org.junit.Assert.assertEquals;

import static utils.Utils.*;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class CompraSteps {
	PaginaInicialPage ip = new PaginaInicialPage();
	
	@Quando("eu clicar no menu filtrar")
	public void euClicarNoMenuFiltrar() {
		Na(PaginaInicialPage.class).acionarMenuFiltrar();
		
	}

	@Quando("clicar na aba price low to high")
	public void clicarNaAbaPriceLowToHigh() throws InterruptedException {
		Na(PaginaInicialPage.class).acionarAbaLowToHigh();

	}

	@Entao("os itens serao reorganizados do menor preco para o maior")
	public void osItensSeraoReorganizadosDoMenorPrecoParaOMaior() {
		boolean isValida = Na(PaginaInicialPage.class).acionarAbaLowToHigh();
		assertEquals(true, isValida);

	}
	
	@Quando("eu clicar no botao add to cart do item Sauce Labs Onesie")
	public void euClicarNoBotaoAddToCartDoItemSauceLabsOnesie() {
		Na(PaginaInicialPage.class).botaoAddSauceLabsOnesie();

	}

	@Quando("eu clicar no botao add to cart do item Sauce Labs Bike Light")
	public void euClicarNoBotaoAddToCartDoItemSauceLabsBikeLight() {
		Na(PaginaInicialPage.class).botaoAddSauceLabsBikeLight();

	}

	@Quando("eu clicar no botao add to cart do item Sauce Labs Bolt T Shirt")
	public void euClicarNoBotaoAddToCartDoItemSauceLabsBoltTShirt() {
		Na(PaginaInicialPage.class).botaoAddSauceLabsBoltTShirt();

	}

	@Quando("eu clicar no botao carrinho")
	public void euClicarNoBotaoCarrinho() {
		Na(PaginaInicialPage.class).clicarBotaoCarrinho();

	}

	@Entao("os tres itens aparecem no carrinho")
	public void osTresItensAparecemNoCarrinho() {
		assertEquals("Sauce Labs Bike Light", driver.findElement(By.id("item_0_title_link")).getText());
		assertEquals("Sauce Labs Bolt T-Shirt", driver.findElement(By.id("item_1_title_link")).getText());
		assertEquals("Sauce Labs Onesie", driver.findElement(By.id("item_2_title_link")).getText());

	}
	
	@Quando("eu clicar no botao remove")
	public void euClicarNoBotaoRemove() {
		Na(PaginaInicialPage.class).clicarBotaoRemoveSauceLabsOnesie();
	}

	@Entao("o item Sauce Labs Onesie sera removido")
	public void oItemSauceLabsOnesieSeraRemovido() {
		assertEquals("", driver.findElement(By.xpath("//div[@class='removed_cart_item']")).getText());
	}
	
	@Quando("eu clicar no botao checkout")
	public void euClicarNoBotaoCheckout() {
		Na(PaginaInicialPage.class).clicarBotaoCheckout();

	}

	@Quando("eu escrever no campo First Name {string}")
	public void euEscreverNoCampoFirstName(String name) {
		Na(PaginaInicialPage.class).informarCampoFirstName(name);


	}

	@Quando("eu escrever no campo Last Name {string}")
	public void euEscreverNoCampoLastName(String lastname) {
		Na(PaginaInicialPage.class).informarCampoLastName(lastname);
	}

	@Quando("eu escrever no campo Postal Code {string}")
	public void euEscreverNoCampoPostalCode(String postalcode) {
		Na(PaginaInicialPage.class).informarCampoPostalCode(postalcode);
	}

	@Quando("eu clicar no botao continue")
	public void euClicarNoBotaoContinue() {
		Na(PaginaInicialPage.class).clicarBotaoContinue();
	}

	@Quando("eu clicar no botao cancel")
	public void euClicarNoBotaoCancel() {
		Na(PaginaInicialPage.class).clicarBotaoCancel();

	}

	@Entao("retorno para a pagina inicial")
	public void retornoParaAPaginaInicial() {
		assertEquals("PRODUCTS", driver.findElement(By.xpath("//div[@class='header_secondary_container']/span[@class='title']")).getText());
	}
	
	@Quando("eu clicar no botao finish")
	public void euClicarNoBotaoFinish() {
		Na(PaginaInicialPage.class).clicarBotaoFinish();
	}

	@Entao("recebo a mensagem de checkout complete")
	public void receboAMensagemDeCheckoutComplete() {
		assertEquals("CHECKOUT: COMPLETE!", driver.findElement(By.xpath("//div[@class='header_secondary_container']/span[@class='title']")).getText());

	}

	@Entao("^aparece erro first name is required na tela$")
	public void apareceErroFirstNameIsRequiredNaTela() throws Throwable {
		assertEquals("Error: First Name is required", driver.findElement(By.xpath("//div[@class='error-message-container error']")).getText());
	}

	@Entao("^aparece erro last name is required na tela$")
	public void apareceErroLastNameIsRequiredNaTela() throws Throwable {
		assertEquals("Error: Last Name is required", driver.findElement(By.xpath("//div[@class='error-message-container error']")).getText());

	}

	@Entao("^aparece erro postal code is required na tela$")
	public void apareceErroPostalCodeIsRequiredNaTela() throws Throwable {
		assertEquals("Error: Postal Code is required", driver.findElement(By.xpath("//div[@class='error-message-container error']")).getText());

	}




}
