package com.example.camile.spotifyapi.spotify_backend.services;

import com.example.camile.spotifyapi.spotify_backend.entities.Playlist;
import com.example.camile.spotifyapi.spotify_backend.entities.User;
import com.example.camile.spotifyapi.spotify_backend.repositories.PlaylistRepository;
import com.example.camile.spotifyapi.spotify_backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PlaylistService {
    @Autowired
    private PlaylistRepository playlistRepository;

    @Autowired
    private UserRepository userRepository;

    public Playlist createPlaylist(Long userId, String name) {
        User user = userRepository.findById(userId).orElseThrow();
        Playlist playlist = new Playlist();
        playlist.setName(name);
        playlist.setUser(user);
        return playlistRepository.save(playlist);
    }

    public List<Playlist> getUserPlaylists(Long userId) {
        User user = userRepository.findById(userId).orElseThrow();
        return user.getPlaylists();
    }
}
