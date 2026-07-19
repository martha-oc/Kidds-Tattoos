document.addEventListener("DOMContentLoaded", () => {

    const overlay = document.getElementById("overlay");
    const images = document.querySelectorAll(".fakeskin-img");
    const closeButtons = document.querySelectorAll(".close-btn");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    let currentIndex = -1;

    

    function showImage(index) {

        images.forEach(img => img.classList.remove("enlarged"));

        currentIndex = index;
        images[currentIndex].classList.add("enlarged");

        overlay.classList.add("active");
    }

    

    function closeGallery() {

        images.forEach(img => img.classList.remove("enlarged"));

        overlay.classList.remove("active");
        currentIndex = -1;
    }

    

    images.forEach((img, index) => {

        img.addEventListener("click", (e) => {
            e.stopPropagation();
            showImage(index);
        });

    });

    

    closeButtons.forEach(btn => {

        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            closeGallery();
        });

    });



    nextBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        showImage((currentIndex + 1) % images.length);

    });

    

    prevBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        showImage((currentIndex - 1 + images.length) % images.length);

    });

    

    overlay.addEventListener("click", closeGallery);

    
    
    document.addEventListener("keydown", (e) => {

        if (!overlay.classList.contains("active")) return;

        switch (e.key) {

            case "ArrowRight":
                showImage((currentIndex + 1) % images.length);
                break;

            case "ArrowLeft":
                showImage((currentIndex - 1 + images.length) % images.length);
                break;

            case "Escape":
                closeGallery();
                break;
        }

    });

});
