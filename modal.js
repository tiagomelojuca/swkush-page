// Source: https://www.w3schools.com/howto/howto_css_modal_images.asp

var modal = document.getElementById("modal-wrapper");

var imgsModal = document.querySelectorAll(".img-open-modal");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

for (let imgModal of imgsModal)
{ 
  imgModal.children[0].onclick = function() {
    modal.style.display = "block";
    modalImg.src = imgModal.children[1].src;
    captionText.innerHTML = imgModal.children[1].alt;
  }
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
