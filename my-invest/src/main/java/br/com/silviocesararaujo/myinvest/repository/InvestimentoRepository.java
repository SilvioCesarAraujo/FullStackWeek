package br.com.silviocesararaujo.myinvest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.silviocesararaujo.myinvest.domain.Investimento;

public interface InvestimentoRepository extends JpaRepository<Investimento, Long>{
	

}
