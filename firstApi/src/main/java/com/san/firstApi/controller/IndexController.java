package com.san.firstApi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.san.firstApi.model.Product;
import com.san.firstApi.repository.ProductRepository;

@RestController
@RequestMapping(value = "/product")
public class IndexController {
	
	@Autowired
	private ProductRepository productRepository;

	//GET
	@GetMapping(value = "/", produces = "application/json")
	public ResponseEntity<List<Product>> listarTodos(){
		List<Product> list = (List<Product>) productRepository.findAll();
	
		return new ResponseEntity<List<Product>>(list, HttpStatus.OK);
	}
	
	//POST
	@PostMapping(value = "/", produces = "application/json")
	public ResponseEntity<Product> cadastrar(@RequestBody Product product){
		Product saveProduct = productRepository.save(product);
		return new ResponseEntity<Product>(saveProduct, HttpStatus.OK);
	}
}
