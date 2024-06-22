package com.uniovi.simpleweb.service;

import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    public boolean authenticate(String username, String password) {
        return  ("chevy".equals(username) && "18436572".equals(password)) ||
                ("ben".equals(username) && "kenobi".equals(password)) ||
                ("organa".equals(username) && "hansolo".equals(password)) ||
                ("sholes".equals(username) && "qwerty".equals(password)) ||
                ("matt".equals(username) && "maggie".equals(password)) ||
                ("baggins".equals(username) && "gandalf".equals(password));
    }

}
