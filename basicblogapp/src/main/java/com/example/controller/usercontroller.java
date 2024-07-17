package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.User;
import com.example.repository.userrepository;

@RestController
@RequestMapping("/api/user/data")
public class usercontroller {
	@Autowired
	private userrepository userrepository;

	// Build display users and post API
	@GetMapping
	public List<User> getAlluser() {
		List<User> user = userrepository.findAll();

		return user;
	}

	// Build create post API
	@PostMapping
	public User createpost(@RequestBody User user) {
		return userrepository.save(user);
	}

	// get user by id
	@GetMapping("/{id}")
	public ResponseEntity<User> getusersById(@PathVariable long id) {
		User user = userrepository.findById((int) id).orElseThrow();
		return ResponseEntity.ok(user);
	}

	@DeleteMapping("/delete")
	public void deleteAlluser() {
		userrepository.deleteAll();
		System.out.println("delete all user");
	}
}
