const portadaVideo = document.getElementById("portadaVideo")
const portadaVideo2=document.getElementById("portadaVideo2")
const video = document.getElementById("miVideo")

function reproducirVideo() {
  portadaVideo2.style.display = "none"
  video.style.display = "inline-block"
  video.play()
}

function mostrarPortada() {
  video.style.display = "none"
  portadaVideo2.style.display = "block"
  video.currentTime = 0
}

portadaVideo.addEventListener("click", reproducirVideo)
video.addEventListener("ended", mostrarPortada)
