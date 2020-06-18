const img_src = [
  "img/photo01.jpg",
  "img/photo02.jpg",
  "img/photo03.jpg",
  "img/photo04.jpg",
  "img/photo05.jpg",
];
let num = -1;

function slideshow_timer() {
  num = Math.floor(Math.random() * img_src.length);

  document.getElementById("img").src = img_src[num];
}

setInterval(slideshow_timer, 3000);
