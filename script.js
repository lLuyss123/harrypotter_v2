const portadaVideo = document.getElementById("portadaVideo")
const portadaVideo2 = document.getElementById("portadaVideo2")
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

const git = document.getElementById("github")
const linkedin = document.getElementById("linkedin")

function linkgithub() {
  window.open("https://github.com/lLuyss123", "_blank");
}

function linklinkedin() {
  window.open("https://www.linkedin.com/in/luis-mejia-1a46511a9/", "_blank");
}

git.addEventListener("click", linkgithub)
linkedin.addEventListener("click", linklinkedin)


/***********************nav responsivo ******************************/

function mostrarMenu() {
  const boton = document.getElementById("boton_menu");
  const navegacion = document.getElementsByClassName("navegacion");
  navegacion[0].classList.toggle("active")
  boton.classList.toggle("active")

}