const playStopBtn = document.getElementById("play-stop-btn")
const infoArea = document.getElementById("info-area")

const songName = document.getElementById("song-name")
const bigFoto = document.getElementById("big-photo")

// ARTISTS BUTTONS ID

const fagata = document.querySelector(".fagata")
const palion = document.querySelector(".palion")
const genzie = document.querySelector(".genzie")
const nirvana = document.querySelector(".nirvana")
const mfdoom = document.querySelector(".mfdoom")
const travisscott = document.querySelector(".travisscott")

// ARTISTS BUTTONS FUNCTIONALITY

function infoFull(){
    bigFoto.classList.remove("fagata-big")
    bigFoto.classList.remove("palion-big")
    bigFoto.classList.remove("genzie-big")
    bigFoto.classList.remove("nirvana-big")
    bigFoto.classList.remove("mfdoom-big")
    bigFoto.classList.remove("travisscott-big")

    infoArea.classList.add("full-info")
    infoArea.classList.remove("empty-info")
}

fagata.addEventListener("click", () => {
    infoFull()
    songName.innerText = "Fagata X Lil Gnar - Kubki"
    bigFoto.classList.add("fagata-big")
})

palion.addEventListener("click", () => {
    infoFull()
    songName.innerText = "♪ PALION - ZIELONE feat. NeoN ♪"
    bigFoto.classList.add("palion-big")
})

genzie.addEventListener("click", () => {
    infoFull()
    songName.innerText = "GENZIE - GENZIARA"
    bigFoto.classList.add("genzie-big")
})

nirvana.addEventListener("click", () => {
    infoFull()
    songName.innerText = "Nirvana - Come As You Are"
    bigFoto.classList.add("nirvana-big")
})

mfdoom.addEventListener("click", () => {
    infoFull()
    songName.innerText = "MF DOOM - One Beer"
    bigFoto.classList.add("mfdoom-big")
})

travisscott.addEventListener("click", () => {
    infoFull()
    songName.innerText = "Travis Scott - FE!N (ft. Playboi Carti)"
    bigFoto.classList.add("travisscott-big")
})

// PLAY & STOP BTN

playStopBtn.addEventListener("click", () => {
    if(playStopBtn.classList.contains("play-btn")){
        playStopBtn.classList.add("stop-btn")
        playStopBtn.classList.remove("play-btn")
    }else{
        playStopBtn.classList.remove("stop-btn")
        playStopBtn.classList.add("play-btn")
    }
})