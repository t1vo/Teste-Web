package pageObjects;

import org.hamcrest.core.IsEqual;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import static utils.Utils.*;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.Collections;

public class PaginaInicialPage {

	@FindBy(xpath = "//select[@class='product_sort_container']")
	private WebElement menuFiltrar;

	@FindBy(xpath = "//option[@value='lohi']")
	private WebElement abaLowToHigh;

	@FindBy(id = "add-to-cart-sauce-labs-onesie")
	private WebElement addSauceLabsOnesie;

	@FindBy(id = "add-to-cart-sauce-labs-bike-light")
	private WebElement addSauceLabsBikeLight;

	@FindBy(id = "add-to-cart-sauce-labs-bolt-t-shirt")
	private WebElement addSauceLabsBoltTShirt;

	@FindBy(id = "shopping_cart_container")
	private WebElement botaoCarrinho;

	@FindBy(id = "remove-sauce-labs-onesie")
	private WebElement botaoRemoveSauceLabsOnesie;

	@FindBy(id = "checkout")
	private WebElement botaoCheckout;

	@FindBy(id = "first-name")
	private WebElement campoFirstName;

	@FindBy(id = "last-name")
	private WebElement campoLastName;

	@FindBy(id = "postal-code")
	private WebElement campoPostalCode;

	@FindBy(id = "continue")
	private WebElement botaoContinue;

	@FindBy(id = "cancel")
	private WebElement botaoCancel;

	@FindBy(id = "finish")
	private WebElement botaoFinish;
	

	public void clicarBotaoFinish() {
		botaoFinish.click();
	}

	public void clicarBotaoCancel() {
		botaoCancel.click();
	}

	public void clicarBotaoContinue() {
		botaoContinue.click();
	}

	public void informarCampoFirstName(String name) {
		campoFirstName.sendKeys(name);
	}

	public void informarCampoLastName(String lastname) {
		campoLastName.sendKeys(lastname);
	}

	public void informarCampoPostalCode(String postalcode) {
		campoPostalCode.sendKeys(postalcode);
	}

	public void clicarBotaoCheckout() {
		botaoCheckout.click();
	}

	public void acionarMenuFiltrar() {
		menuFiltrar.click();
	}

	public boolean acionarAbaLowToHigh() {
		abaLowToHigh.click();
		ArrayList<WebElement> precoItens = new ArrayList<WebElement>(
				driver.findElements(By.className("inventory_item_price")));
		String[] itemTexto = new String[precoItens.size()];
		Float[] validaLowToHigh = new Float[precoItens.size()];
		Float[] sortValida = new Float[precoItens.size()];
		boolean isValidado = false;

		for (int i = 0; i < precoItens.size(); i++) {
			itemTexto[i] = precoItens.get(i).getText();
			itemTexto[i] = itemTexto[i].replace("$", "");
			sortValida[i] = Float.parseFloat(itemTexto[i]);
			validaLowToHigh[i] = Float.parseFloat(itemTexto[i]);
		}
		Arrays.sort(sortValida);
		if (Arrays.equals(sortValida, validaLowToHigh)) {
			isValidado = true;
		}
		return isValidado;

	}

	public void botaoAddSauceLabsOnesie() {
		addSauceLabsOnesie.click();
	}

	public void botaoAddSauceLabsBikeLight() {
		addSauceLabsBikeLight.click();
	}

	public void botaoAddSauceLabsBoltTShirt() {
		addSauceLabsBoltTShirt.click();
	}

	public void clicarBotaoCarrinho() {
		botaoCarrinho.click();
	}

	public void clicarBotaoRemoveSauceLabsOnesie() {
		botaoRemoveSauceLabsOnesie.click();
	}

}
