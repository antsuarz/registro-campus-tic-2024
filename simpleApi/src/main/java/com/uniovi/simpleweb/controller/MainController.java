package com.uniovi.simpleweb.controller;

import com.uniovi.simpleweb.model.LoginRequest;
import com.uniovi.simpleweb.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class MainController{
    @Autowired
    private  AuthenticationService authenticationService;

    private boolean isAuthenticated;
    @PostMapping(value = "/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request){
        isAuthenticated = authenticationService.authenticate(request.getUsername(), request.getPassword());

        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
        }
    }

    @GetMapping(value = "/authenticated")
    public ResponseEntity<String> isAuthenticated(){
        if (isAuthenticated) {
            return ResponseEntity.ok("Authenticated");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Not Authenticated");
        }
    }

    @PostMapping(value = "/logOut")
    public ResponseEntity<String> logOut(){
        isAuthenticated = false;
        return ResponseEntity.ok("Logged Out");
    }

}
