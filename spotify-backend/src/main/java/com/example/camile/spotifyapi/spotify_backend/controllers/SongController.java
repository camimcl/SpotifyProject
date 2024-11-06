package com.example.camile.spotifyapi.spotify_backend.controllers;

import com.example.camile.spotifyapi.spotify_backend.entities.Song;
import com.example.camile.spotifyapi.spotify_backend.services.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/songs")
public class SongController {
    @Autowired
    private SongService songService;

    @PostMapping
    public Song addSong(@RequestBody Song song) {
        return songService.addSong(song);
    }
}
