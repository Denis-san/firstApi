package com.san.firstApi.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.san.firstApi.model.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long>{

}
