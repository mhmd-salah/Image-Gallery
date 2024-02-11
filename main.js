let scrollContainer = document.querySelector( ".gallery" );
let backbtn = document.getElementById( "backBtn" );
let nextBtn = document.getElementById( "nextBtn" );

scrollContainer.addEventListener( "wheel", ( event ) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
  scrollContainer.style.scrollBehavior = "auto"
} );

nextBtn.addEventListener( "click", () => {
  scrollContainer.style.scrollBehavior = "smooth"
  scrollContainer.scrollLeft += 900;
})
scrollContainer.style.scrollBehavior = "smooth"
backbtn.addEventListener( "click", () => {
  scrollContainer.scrollLeft -= 900;
})