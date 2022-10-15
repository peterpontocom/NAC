const play = window.document.querySelector('.play')
const video = window.document.querySelector('.video')
const pause = window.document.querySelector('.pause')
const playVideo = () => {
    video.play()
    play.style.display = 'none'
    pause.style.display = 'block'
}
const pauseVideo = () => {
    video.pause()
    play.style.display = 'block'
    pause.style.display = 'none'
}
play.onclick = playVideo
pause.onclick = pauseVideo