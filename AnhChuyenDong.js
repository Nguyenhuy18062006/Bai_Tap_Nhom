let images = [
  "https://epu.edu.vn/Uploads/slide/01132026141707561_z7426168941791_ba91fe95f6b4042bc4fd49d898f3ab1a.jpg",
  "https://epu.edu.vn/Uploads/slide/02062023100705319_EPU.png",
  "https://epu.edu.vn/Uploads/slide/09152024150340536_epu.jpg",
];

let index = 0;

// hiển thị ảnh
function showImage() {
  document.getElementById("slider").src = images[index];
}

// tự động đổi ảnh
function autoSlide() {
  index++;
  if (index >= images.length) index = 0;

  showImage();
  setTimeout(autoSlide, 3000);
}

setTimeout(autoSlide, 3000);

// nút NEXT
function nextImage() {
  index++;
  if (index >= images.length) index = 0;
  showImage();
}

// nút BACK
function backImage() {
  index--;
  if (index < 0) index = images.length - 1;
  showImage();
}
