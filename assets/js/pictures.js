

document.addEventListener("DOMContentLoaded", () => {

        
});

var modal = document.getElementById('image-zoom-container');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modal-content");
var captionText = document.getElementById("caption");

function OpenModal(val)
{
    modal.style.display = "block";
    modalImg.src = val.src;
    captionText.innerHTML = val.alt;
}

function CloseModal()
{
  modalImg.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       modalImg.className = "modal-content";
     }, 400);
}
