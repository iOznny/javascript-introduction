const player = {
    play: function(name) {
        console.log(`Reproduciendo ${ name }...`);
    },
    pause: function() {
        console.log('Pausando...');
    },
    delete: function(id) {
        console.log(`Borrando canción ${ id }...`);
    },
    crearePlaylist: function(playlist_name) {
        console.log(`Playlist ${ playlist_name } creada.`);
    },
    playPlaylist: function(playlist) {
        console.log(`Reproduciendo la playlist ${ playlist }`);
    }
}

player.play('Camilo Septimo');
player.pause();

// Add property outside object
// player.delete = function() {
//     console.log(`Borrando canción ${ id }...`);
// }
player.delete(2);
player.crearePlaylist('Peace');
player.playPlaylist('Peace');