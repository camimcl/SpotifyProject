package com.example.camile.spotifyapi.spotify_backend.repositories;

import com.example.camile.spotifyapi.spotify_backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
