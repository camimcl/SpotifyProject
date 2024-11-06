package com.example.camile.spotifyapi.spotify_backend.repositories;

import com.example.camile.spotifyapi.spotify_backend.entities.Song;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SongRepository extends JpaRepository<Song, Long> {
}
