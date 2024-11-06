package com.example.camile.spotifyapi.spotify_backend.controllers;

import com.example.camile.spotifyapi.spotify_backend.entities.Playlist;
import com.example.camile.spotifyapi.spotify_backend.services.PlaylistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/playlists")
public class PlaylistController {
    @Autowired
    private PlaylistService playlistService;

    @PostMapping("/{userId}")
    public Playlist createPlaylist(@PathVariable Long userId, @RequestBody String name) {
        return playlistService.createPlaylist(userId, name);
    }

    @GetMapping("/{userId}")
    public List<Playlist> getUserPlaylists(@PathVariable Long userId) {
        return playlistService.getUserPlaylists(userId);
    }
}