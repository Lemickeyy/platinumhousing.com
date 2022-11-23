    const btns = document.querySelectorAll(".nav-btn"); //setting constant values for all 3 (btns, slides, and contents) const is used to set variables 
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");

    var sliderNav = function(manual){ //variable for slidernav is set to a function which is controlled manually
      btns.forEach((btn) => {
        btn.classList.remove("active");//allows the previous button to turn white when a different clip has been clicked meaning new clip has begun
      });

      slides.forEach((slide) => {
        slide.classList.remove("active");//changes slides and removes previous slide
      });

      contents.forEach((content) => {
        content.classList.remove("active");//changes content
      });

      btns[manual].classList.add("active");//btns, slides, and contents are set to active so that when new btn is clicked, a different slide and content is made active
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => { //allows the clips to change when nav-btn are clicked
        sliderNav(i);
      });
    });
    //ending of javascript for the video slider