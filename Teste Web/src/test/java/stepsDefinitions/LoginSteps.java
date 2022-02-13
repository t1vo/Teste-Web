package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.LoginPage;
import static utils.Utils.*;

import org.openqa.selenium.By;
public class LoginSteps {
	LoginPage lp = new LoginPage();
	
	@Quando("eu informar o usuario {string}")
	public void euInformarOUsuario(String usuario) {
		Na(LoginPage.class).informarCampoUsuario(usuario);

	}

	@Quando("informar a senha {string}")
	public void informarASenha(String senha) {
		Na(LoginPage.class).informarCampoSenha(senha);
	}

	@Quando("clicar no botao login")
	public void clicarNoBotaoLogin() {
		Na(LoginPage.class).acionarBotaoLogin();

	}

	@Entao("o sistema exibe a mensagem de usuario invalido")
	public void oSistemaExibeAMensagemDeUsuarioInvalido() {
		assertEquals("Epic sadface: Username and password do not match any user in this service", driver.findElement(By.xpath("//div[@class='error-message-container error']")).getText());

	}

	@Entao("o usuario acessa o site")
	public void oUsuarioAcessaOSite() {
		assertEquals("PRODUCTS", driver.findElement(By.xpath("//div[@class='header_secondary_container']/span[@class='title']")).getText());

	}


}
