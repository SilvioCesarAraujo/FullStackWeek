package br.com.silviocesararaujo.myinvest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.silviocesararaujo.myinvest.domain.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{
	
	

}
