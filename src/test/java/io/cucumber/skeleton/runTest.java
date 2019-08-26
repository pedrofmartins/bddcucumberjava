package io.cucumber.skeleton; 

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) 
@CucumberOptions(
		
		features = "C:\\Users\\Domingos\\eclipse-workspace\\cucumber-java-skeleton-master\\src\\test\\resources\\io\\cucumber\\skeleton\\compra.feature",
		plugin = {"pretty", "html:target/cucumber"})

public class runTest { }