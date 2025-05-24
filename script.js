const gallery = document.querySelector(".gallery");
const imageList = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg"
];

for (let i = 0; i < imageList.length; i++) {
  const img = document.createElement("img");
  img.src = imageList[i];
  gallery.appendChild(img);
}