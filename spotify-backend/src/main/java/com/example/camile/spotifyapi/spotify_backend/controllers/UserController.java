package com.example.camile.spotifyapi.spotify_backend.controllers;

import com.example.camile.spotifyapi.spotify_backend.entities.User;
import com.example.camile.spotifyapi.spotify_backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/login")
    public Optional<User> login(@RequestBody User loginRequest) {
        return userService.login(loginRequest.getUsername(), loginRequest.getPassword());
    }
}
