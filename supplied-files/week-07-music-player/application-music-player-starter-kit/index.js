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


// Step 3 : Create the audio element for the player

// loadTrack( track_index ) to load a track and set it up
function loadTrack(track_index) {
    
}

// Set up a random background color
function random_bg_color() {
    
}
    
// Reset all values to their default
function resetValues() {
}

// To switch to playing when paused, and vice versa
function playpauseTrack() {
}
    
function playTrack() {
}
    
function pauseTrack() {   
}

function nextTrack() {
    
}
    
function prevTrack() {
}

function seekTo() {
}
    
function setVolume() {
}

// update the progress slider and durations as the music plays
function seekUpdate() {
}

// set the ball rolling when the page loads!
// ...