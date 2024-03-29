document.addEventListener("DOMContentLoaded", () => {
    let scrollContainer = document.querySelector(".gallery");
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });

    nextBtn.addEventListener("click", ()=> {
        scrollContainer.style.scrollBehavior = "smooth"; 
        scrollContainer.scrollLeft += 900; 
    });

    backBtn.addEventListener("click", ()=> {
        scrollContainer.style.scrollBehavior = "smooth"; 
        scrollContainer.scrollLeft -= 900; 
    });
});


 var modal = document.getElementById("modal");

 var images = document.querySelectorAll(".menu-image");
 var modalImg = document.getElementById("modal-img");
 images.forEach(function(image) {
     image.addEventListener("click", function() {
         modal.style.display = "block";
         modalImg.src = this.src;
     });
 });

 var span = document.getElementsByClassName("close")[0];
 span.onclick = function() {
     modal.style.display = "none";
 };

 function openModal(imageSrc) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}