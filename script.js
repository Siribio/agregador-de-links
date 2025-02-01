function toggleMode() {
  const html = document.documentElement
  
  // if (html.classList.contains('light')) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  html.classList.toggle("light") 

//pegar a tag img
const img = document.querySelector("#profile img")

if(html.classList.contains("light")){
  
  
  img.setAttribute("src", "./assets/higuruma-badass.png")
} else{
  img.setAttribute("src","./assets/higuruma.png")

}

//substituir a imagem
//se tiver light mode adicionar imagem light

}
