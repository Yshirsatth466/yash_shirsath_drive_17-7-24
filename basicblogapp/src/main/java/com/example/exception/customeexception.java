package com.example.exception;
import org.springframework.http.HttpStatus;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class customeexception extends RuntimeException {
	public customeexception(String message) {
		super(message);
	}

}

