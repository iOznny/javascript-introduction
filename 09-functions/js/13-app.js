const player = {
    song: '',
    play: (name) => console.log(`Reproduciendo ${ name }...`),
    pause: () => console.log('Pausando...'),
    delete: (id) => console.log(`Borrando canción ${ id }...`),
    crearePlaylist: (playlist_name) => console.log(`Playlist ${ playlist_name } creada.`),
    playPlaylist: (playlist) => console.log(`Reproduciendo la playlist ${ playlist }`),    
    // Add value
    set newSong(song) {
        this.song = song;
        console.log(`Añadiendo ${ song }`);
    },
    // Get value
    get getSong() {
        console.log(this.song);
    }
}

// Set and Get
player.newSong = 'Fantasmas';
player.getSong;

player.play('Camilo Septimo');
player.pause();
player.delete(2);
player.crearePlaylist('Peace');
player.playPlaylist('Peace');