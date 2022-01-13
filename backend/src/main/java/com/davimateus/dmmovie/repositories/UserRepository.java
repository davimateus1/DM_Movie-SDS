package com.davimateus.dmmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.davimateus.dmmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
	
}
