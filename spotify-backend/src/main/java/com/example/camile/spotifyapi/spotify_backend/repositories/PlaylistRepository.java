package com.example.camile.spotifyapi.spotify_backend.repositories;

import com.example.camile.spotifyapi.spotify_backend.entities.Playlist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaylistRepository extends JpaRepository<Playlist, Long> {
}
