package com.uniovi.simpleweb.service;

import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    public boolean authenticate(String username, String password) {
        return "admin".equals(username) && "18436572".equals(password);
    }

}
