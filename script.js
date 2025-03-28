const playStopBtn = document.getElementById("play-stop-btn")

playStopBtn.addEventListener("click", () => {
    if(playStopBtn.classList.contains("play-btn")){
        playStopBtn.classList.add("stop-btn")
        playStopBtn.classList.remove("play-btn")
    }else{
        playStopBtn.classList.remove("stop-btn")
        playStopBtn.classList.add("play-btn")
    }
})