package com.example.camile.spotifyapi.spotify_backend.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Setter
@Getter
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String username;
    private String password;
    private String email;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Playlist> playlists;


}