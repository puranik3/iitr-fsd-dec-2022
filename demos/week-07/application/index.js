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
let update_timer;

// Step 3 : Create the audio element for the player
const curr_track = document.createElement( 'audio' );

// loadTrack( track_index ) to load a track and set it up
function loadTrack() {
    clearInterval( update_timer );

    const track = track_list[track_index];
    curr_track.src = track.path;
    curr_track.load();

    track_art.style.backgroundImage = 'url( ' + track.image + ' )';
    track_name.innerText = track.name;
    track_artist.innerText = track.artist;
    now_playing.innerText = 'PLAYING ' + ( track_index + 1 ) + ' of ' + track_list.length;

    update_timer = setInterval( seekUpdate, 1000 );
    
    random_bg_color();
}

// Set up a random background color
function random_bg_color() {
    // generate a random number between 64 and 255
    const red = Math.floor( Math.random() * ( 256 - 64 ) ) + 64;
    const green = Math.floor( Math.random() * ( 256 - 64 ) ) + 64;
    const blue = Math.floor( Math.random() * ( 256 - 64 ) ) + 64;

    document.body.style.backgroundColor = `rgb( ${red}, ${green}, ${blue} )`;
}

// Reset all values to their default
function resetValues() {
}

// To switch to playing when paused, and vice versa
function playPauseTrack() {
  if( is_playing === false ) {
    playTrack();
  } else {
    pauseTrack();
  }
}
    
function playTrack() {
  curr_track.play();
  is_playing = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
    
function pauseTrack() {
  curr_track.pause();
  is_playing = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  track_index = ( track_index + 1 ) % track_list.length;
  loadTrack();
  playTrack();
}
    
function prevTrack() {
  track_index = ( track_index - 1 ) % track_list.length;
  loadTrack();
  playTrack();
}

function seekTo() {
  const seek_to = ( seek_slider.value / 100 ) * curr_track.duration;
  curr_track.currentTime = seek_to;
}
    
function setVolume() {
  // EXERCISE - Use curr_track.volume should be updated
}

// update the progress slider and durations as the music plays
function seekUpdate() {
  const seek_position = ( curr_track.currentTime / curr_track.duration ) * 100;
  seek_slider.value = seek_position;

  let current_minutes = ( Math.floor( curr_track.currentTime / 60 ) ).toString().padStart( 2, '0' );
  let current_seconds = ( Math.floor( curr_track.currentTime - current_minutes * 60 ) ).toString().padStart( 2, '0' );

  // EXERCISE: Set up the total_duration similarly

  curr_time.innerText = current_minutes + ':' + current_seconds;
}

// set the ball rolling when the page loads!
playpause_btn.addEventListener( 'click', playPauseTrack );
next_btn.addEventListener( 'click', nextTrack );
prev_btn.addEventListener( 'click', prevTrack );
  
seek_slider.addEventListener( 'input', seekTo );
volume_slider.addEventListener( 'input', setVolume );

curr_track.addEventListener( 'ended', nextTrack );

loadTrack();