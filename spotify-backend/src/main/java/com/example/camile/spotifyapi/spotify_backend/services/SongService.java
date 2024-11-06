package com.example.camile.spotifyapi.spotify_backend.services;

import com.example.camile.spotifyapi.spotify_backend.entities.Song;
import com.example.camile.spotifyapi.spotify_backend.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SongService {
    @Autowired
    private SongRepository songRepository;

    public Song addSong(Song song) {
        return songRepository.save(song);
    }
}
