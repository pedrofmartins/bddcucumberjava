package io.cucumber.skeleton;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;


public class PurchaseSteps {

	WebDriver driver;
	
	@Given("^I have a list of products$")
	public void user_app_home_page(){
			
	System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\src\\test\\resources\\io\\cucumber\\skeleton\\chromedriver.exe");
	driver = new ChromeDriver();
	driver.manage().window().maximize();
	driver.get("https://demo.cs-cart.com");
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			
	}
	
	@When("^I click on the chosen product$")
	public void user_clicks_on_Product() {
	    WebElement product = driver.findElement(By.xpath("//*[@id='icons_24000278']/div[1]/div/div[1]/div/a/img"));
	    JavascriptExecutor js = (JavascriptExecutor) driver;
	    js.executeScript("arguments[0].click();", product);
	}
	
	@And("^I click to buy now with one-click$")
	public void user_clicks_on_Buynow() {
	    WebElement buynow = driver.findElement(By.xpath("//*[@id=\'opener_call_request_278\']/span"));
	    JavascriptExecutor js = (JavascriptExecutor) driver;
	    js.executeScript("arguments[0].click();", buynow);
	}
	
	@Then("^user enters \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String name, String value, String email) {
	  driver.findElement(By.xpath("//*[@id='call_data_call_request_278_name']")).sendKeys(name);
	  driver.findElement(By.xpath("//*[@id='call_data_call_request_278_phone']")).sendKeys(value);
	  driver.findElement(By.xpath("//*[@id='call_data_call_request_278_email']")).sendKeys(email); 
	}
	
	
	@And("^I click to submit$")
	public void user_clicks_on_submit() {
	    WebElement submit = driver.findElement(By.xpath("//*[@id='form_call_request_278']/div[8]/button"));
	    JavascriptExecutor js = (JavascriptExecutor) driver;
	    js.executeScript("arguments[0].click();", submit);
	}
	
	@Then("^Close the Browser$")
	public void close_the_Browser(){
	    driver.close();
	}
	
}
