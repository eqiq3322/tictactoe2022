let track_image = document.querySelector('#track_image')
let present = document.querySelector('#present')
let total = document.querySelector('#total')
let title = document.querySelector('#title')
let artist = document.querySelector('#artist')
let pre = document.querySelector('#pre')
let play = document.querySelector('#play')
let next = document.querySelector('#next')
let auto = document.querySelector('#auto')
let duration_slider = document.querySelector('#duration_slider')
let volume_show = document.querySelector('#volume_show')
let volume_icon = document.querySelector('#volume_icon')
let volume = document.querySelector('#volume')

//set default to 1st song counting from 0
let indexNumber = 0
//default: stop playing
let playingSong = false
//audio HTML tag
let track = document.createElement('audio')
//array to play all songs
let allSong = [
    {
        name: '夜曲',
        src: 'music/nocturne.mp3',
        img:'img/nocturne.jpeg',
        artist:'周杰倫',
    },
    {
        name: '挪威的森林',
        src: 'music/norwegian_forest.mp3',
        img:'img/norwegian_forest.jpeg',
        artist:'伍佰',
    }
]
// method to transform from array to data 
function loadTrack(indexNumber){
    track.src = allSong[indexNumber].src
    title.innerHTML = allSong[indexNumber].name
    track_image.src = allSong[indexNumber].img
    artist.innerHTML = allSong[indexNumber].artist
    total.innerHTML = allSong.length
    present.innerHTML = indexNumber + 1
}

loadTrack(indexNumber)

function playSong() {
    track.play()
    playingSong = true
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true">'

}

function pauseSong() {
    track.pause()
    playingSong = true
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true">'    
}

function justPlay(){
    if(playingSong == false){
        playSong()
    }
    else{
        pauseSong()
    }
}