package com.davimateus.dmmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.davimateus.dmmovie.entities.Score;
import com.davimateus.dmmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {	
	
}
