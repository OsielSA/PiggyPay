package com.PiggyApi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class PiggyApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(PiggyApiApplication.class, args);
	}

	public List<String> lista(){
		return List.of(
				"nombre"
		);
	}
}
