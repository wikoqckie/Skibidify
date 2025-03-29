// MAIN IDS
const playStopBtn = document.getElementById("play-stop-btn")
const infoArea = document.getElementById("info-area")

const songName = document.getElementById("song-name")
const bigFoto = document.getElementById("big-photo")
const audio = document.getElementById("audio")

// ARTISTS BUTTONS ID

const fagata = document.querySelector(".fagata")
const palion = document.querySelector(".palion")
const genzie = document.querySelector(".genzie")
const nirvana = document.querySelector(".nirvana")
const mfdoom = document.querySelector(".mfdoom")
const travisscott = document.querySelector(".travisscott")

// INFO ID'S

const infoName = document.getElementById("info-name")
const infoInfo = document.getElementById("info-txt")
const infoText = document.getElementById("text-txt")

// TIMELINE

const time = document.querySelector(".time-line")

// ARTISTS BUTTONS FUNCTIONALITY

function infoFull(){
    playStopBtn.classList.remove("stop-btn")
    playStopBtn.classList.add("play-btn")

    bigFoto.classList.remove("fagata-big")
    bigFoto.classList.remove("palion-big")
    bigFoto.classList.remove("genzie-big")
    bigFoto.classList.remove("nirvana-big")
    bigFoto.classList.remove("mfdoom-big")
    bigFoto.classList.remove("travisscott-big")

    infoArea.classList.add("full-info")
    infoArea.classList.remove("empty-info")
}

function setInfo(audioPath, photo, name, songTitle, info, text){
    audio.src = audioPath
    bigFoto.classList.add(photo)
    songName.innerText = songTitle
    infoName.innerText = name
    infoInfo.innerText = info
    infoText.innerText = text
}

fagata.addEventListener("click", () => {
    infoFull()
    setInfo(
        "songs/fagata.mp3", // AUDIO PATH
        "fagata-big", // PHOTO
        "Fagata", // NAME
        "Fagata X Lil Gnar - Kubki", // SONG NAME
        "wlasc. Agata Fak urodzona: 24.07.2000", // INFO
        "Influencerka, ktora probuje swoich sil w muzyce, tworzac utwory w stylu rap/pop. Jej piosenki maja nowoczesne brzmienie, mocne bity i chwytliwe refreny, czesto nawiazujac do jej zycia oraz swiata influencerow. Jednym z jej najpopularniejszych utworow jest Plug, ktory zdobyl duza popularnosc na YouTube i platformach streamingowych. Jej muzyka laczy elementy autotune’u i internetowego stylu, charakterystycznego dla wielu tworcow z mediow spolecznosciowych." // TEXT
    )
})

palion.addEventListener("click", () => {
    infoFull()
    setInfo(
        "songs/palion.mp3", // AUDIO PATH
        "palion-big", // PHOTO
        "Palion", // NAME
        "♪ PALION - ZIELONE feat. NeoN ♪", // SONG NAME
        "Palion, własc. Pawel Palion urodzony: 17.12.2001", // INFO
        "Palion to popularny twórca internetowy i artysta muzyczny. Jego kanał na YouTube sledzi miliony fanów, a filmy z challenge'ami, vlogami i rozrywka zdobywaja milionowe wyswietlenia. Jako muzyk osiagnał duze sukcesy, zyskujac popularnosc dzieki hitom, takim jak “Zielone”" // TEXT
    )
})

genzie.addEventListener("click", () => {
    infoFull()
    setInfo(
        "songs/genzie.mp3", // AUDIO PATH
        "genzie-big", // PHOTO
        "Genzie", // NAME
        "GENZIE - GENZIARA", // SONG NAME
        "Zespól muzyczny / Twórcy internetowi", // INFO
        "Genzie to grupa influencerow powiazana z Ekipa Holding, ktora oprocz tworzenia tresci lifestyle’owych i wyzwan na YouTube, zajmuje sie takze muzyka. Ich utwory to glownie energiczne, nowoczesne kawalki w stylu pop/rap, czesto z elektronicznym brzmieniem i chwytliwymi refrenami. Piosenki Genzie sa skierowane do mlodszej widowni i nawiazuja do internetowego stylu zycia. Wydali kilka singli, ktore zdobyly popularnosc na YouTube." // TEXT
    )
})

nirvana.addEventListener("click", () => {
    infoFull()
    setInfo(
        "songs/nirvana.mp3", // AUDIO PATH
        "nirvana-big", // PHOTO
        "Nirvana", // NAME
        "Nirvana - Come As You Are", // SONG NAME
        "Zespól muzyczny", // INFO
        "Nirvana to amerykanski zespol grunge'owy, ktory zdobyl ogromna popularnosc w latach 90-tych. Zostal zalozony w 1987 roku przez Kurta Cobaina i Krista Novoselica w Aberdeen, Washington. Nirvana stala sie symbolem pokolenia grunge, laczac surowe brzmienie rocka z emocjonalnymi tekstami. Ich najbardziej znanym albumem jest Nevermind (1991), ktory zawiera hit Smells Like Teen Spirit. Zespol zdobyl miano ikony kultury muzycznej." // TEXT
    )
})

mfdoom.addEventListener("click", () => {
    infoFull()
    setInfo(
        "songs/mfdoom.mp3", // AUDIO PATH
        "mfdoom-big", // PHOTO
        "MF DOOM", // NAME
        "MF DOOM - One Beer", // SONG NAME
        "wlasc. Daniel Dumile urodzony: 9.01.1971", // INFO
        "MF Doom, wlasciwie Daniel Dumile, byl brytyjskim raperem i producentem muzycznym, znanym z maski, ktora nosil podczas wystepow i wizerunku superzlego bohatera. Jego muzyka laczyla elementy hip-hopu, jazzu i eksperymentalnych brzmien. Doom byl czlonkiem takich projektow jak KMD oraz jego solowa tworcza postac MF Doom, znana z albumow takich jak Operation: Doomsday (1999) czy Madvillainy (2004) – kolaboracji z Madlibem." // TEXT
    )
})

travisscott.addEventListener("click", () => {
    infoFull()
    setInfo(
        "songs/travisscott.mp3", // AUDIO PATH
        "travisscott-big", // PHOTO
        "Travis Scott", // NAME
        "Travis Scott - FE!N (ft. Playboi Carti)", // SONG NAME
        "wlasc. Jacques Webster II urodzony: 30.04.1992", // INFO
        "Travis Scott, wlasciwie Jacques Webster II, to amerykanski raper, producent muzyczny i projektant mody. Jego muzyka laczy elementy hip-hopu, trapu i muzyki elektronicznej, a jego albumy, takie jak Astroworld (2018), zdobyly ogromna popularnosc. Scott znany jest z unikalnego stylu, energetycznych wystepów na zywo oraz wspólpracy z wieloma artystami, m.in. z Kylie Jenner, z która ma dziecko." // TEXT
    )
})

// PLAY & STOP BTN

playStopBtn.addEventListener("click", () => {

    if(playStopBtn.classList.contains("play-btn")){
        audio.volume = 0.7
        audio.play()
    }else{
        audio.pause()
    }

    if(playStopBtn.classList.contains("play-btn")){
        playStopBtn.classList.add("stop-btn")
        playStopBtn.classList.remove("play-btn")
    }else{
        playStopBtn.classList.remove("stop-btn")
        playStopBtn.classList.add("play-btn")
    }
})

// TIMELINE UPDATE

audio.addEventListener("timeupdate", () => {
    percTime = audio.currentTime / audio.duration * 100

    if(percTime > 14 && percTime < 15){
        time.classList.add("a")
    }else if(percTime > 28 && percTime < 29){
        time.classList.add("b")
    }else if(percTime > 42 && percTime < 43){
        time.classList.add("c")
    }else if(percTime > 57 && percTime < 58){
        time.classList.add("d")
    }else if(percTime > 71 && percTime < 72){
        time.classList.add("e")
    }else if(percTime > 97 && percTime < 98){
        time.classList.add("f")
    }
})