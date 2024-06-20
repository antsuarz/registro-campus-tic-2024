package com.uniovi.simpleweb.service;

import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    public boolean authenticate(String username, String password) {
        return "admin".equals(username) && "password".equals(password);
    }
}
