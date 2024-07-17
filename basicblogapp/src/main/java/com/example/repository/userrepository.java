package com.example.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.User;


public interface userrepository extends JpaRepository <User, Integer>{

	
}
