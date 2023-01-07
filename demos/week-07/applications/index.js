// List of tracks that have to be played
let track_list = [
  {
    name: "Demo1",
    artist: "Broke For Free",
    image: "https://picsum.photos/640/360",
    path: "songs/sample1.mp3"
  },
  {
    name: "Every Morning",
    artist: "Anton Vlasov",
    image: "https://picsum.photos/320/180",
    path: "songs/every-morning-18304.mp3"
  },
  {
    name: "Relax and Sleep",
    artist: "Anton Vlasov",
    image: "https://picsum.photos/480/270",
    path: "songs/relax-and-sleep-18565.mp3",
  },
  {
    name: "Uplifting Day",
    artist: "Lesfm",
    image: "https://picsum.photos/240/180",
    path: "songs/uplifting-day-15583.mp3",
  }
];

// Step 1: Select all the elements in the HTML page and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
  
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
  
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
  
// Step 2: Specify globally used values
let track_index = 0;
let is_playing = false;

// Step 3 : Create the audio element for the player
const audio_player = document.createElement( 'audio' );

function convertDuration( totalSeconds ) {
    const minutes = '' + Math.floor( totalSeconds / 60 );
    const seconds = '' + Math.floor( totalSeconds - ( minutes * 60 ) );

    return minutes.padStart( 2, '0' ) + ':' + seconds.padStart( 2, '0' );
}

// loadTrack( track_index ) to load a track and set it up
function loadTrack() {
    const track = track_list[track_index];

    audio_player.src = track.path;
    audio_player.load();

    // show basic details of the song
    now_playing.textContent = 'PLAYING ' + ( track_index + 1 ) + ' OF ' + track_list.length;
    // track_art.innerHTML = '<img src="' + track.image + '" />';
    track_art.style.backgroundImage = 'url( "' + track.image + '" )';
    track_name.innerText = track.name;
    track_artist.innerText = track.artist;

    random_bg_color();

    // set up for calling seekUpdate() every second
    setInterval( seekUpdate, 1000 );
}

// Set up a random background color
function random_bg_color() {
    let red = Math.floor( Math.random() * ( 256 - 64 ) ) + 64;
    let green = Math.floor( Math.random() * ( 256 - 64 ) ) + 64;
    let blue = Math.floor( Math.random() * ( 256 - 64 ) ) + 64;

    let color = `rgb( ${red}, ${green}, ${blue} )`;
    document.body.style.backgroundColor = color;
}

// Reset all values to their default
function resetValues() {
    curr_time.innerText = '00:00';
    total_duration.innerText = '00:00';
    seek_slider.value = 0;
}

// To switch to playing when paused, and vice versa
function playPauseTrack() {
    if( is_playing ) {
        pauseTrack();
    } else {
        playTrack();
    }
}
    
function playTrack() {
    audio_player.play();
    is_playing = true;
    playpause_btn.innerHTML = '<i class="fas fa-pause-circle fa-5x"></i>';
    
    // set up total duration of the track
    setTimeout(function() {
        total_duration.innerText = convertDuration( audio_player.duration );
    }, 100);
}
    
function pauseTrack() {
    audio_player.pause();
    is_playing = false;
    playpause_btn.innerHTML = '<i class="fas fa-play-circle fa-5x"></i>';
}

function nextTrack() {
    ++track_index;

    if( track_index >= track_list.length ) {
        track_index = 0;
    }

    loadTrack();
    playTrack();
}
    
function prevTrack() {
    --track_index;

    if( track_index < 0 ) {
        track_index = track_list.length - 1;
    }

    loadTrack();
    playTrack();
}

function seekTo() {
    audio_player.currentTime = audio_player.duration * ( seek_slider.value / 100 );
}
    
function setVolume() {
    audio_player.volume = volume_slider.value / 100;
}

// update the progress slider and durations as the music plays
function seekUpdate() {
    // set up current duration of the track
    curr_time.innerText = convertDuration( audio_player.currentTime );
    seek_slider.value = Math.floor( ( audio_player.currentTime / audio_player.duration ) * 100 );
}

// setup event handlers
playpause_btn.addEventListener( 'click', playPauseTrack );
next_btn.addEventListener( 'click', nextTrack );
prev_btn.addEventListener( 'click', prevTrack );
volume_slider.addEventListener( 'input', setVolume );
seek_slider.addEventListener( 'input', seekTo );
audio_player.addEventListener( 'ended', nextTrack );

// set the ball rolling when the page loads!
loadTrack();