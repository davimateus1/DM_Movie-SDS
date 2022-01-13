package com.davimateus.dmmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.davimateus.dmmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

	
	
}
