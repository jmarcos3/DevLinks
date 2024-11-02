function toggleMode(){
  const html = document.documentElement // acessa a tag html e guarda na html

  // if(html.classList.contains('light')){
  //   html.classList.remove('light');
  // } else {
  //   html.classList.add('light');}

  // Mesmo jeito de escrever em cima, ele inverte as funções
  html.classList.toggle('light');

  // pegar a tag img
  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
    img.setAttribute('src', './assets/avatar-light-mode.png')
    img.setAttribute('alt', "Foto no light mode :D")
  } else {
    img.setAttribute('src', './assets/avatar-dark-mode1.png')
    img.setAttribute('alt', "Foto no dark mode :p")}

  
  // if ligh -> add avatar-light-mode

  // substituir a imagem
}