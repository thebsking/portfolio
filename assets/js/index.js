

//mobile menu event listener
$(document).ready(function () {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function (event) {
    event.preventDefault();
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });

});

//add section headers
const sections = document.querySelectorAll('section')
for (let i = 0; i < sections.length; i++) {
  let header = document.createElement('h2')
  header.classList.add('section-header');
  header.textContent = (sections[i].id).toUpperCase();
  sections[i].insertBefore(header, sections[i].firstChild)
}

//style contact icons
const iconSpans = $('.icon')
for (let i = 0; i < iconSpans.length; i++) {
  $(iconSpans[i]).addClass('is-large')
}
const iconImage = $('i');
for (let j = 0; j < iconImage.length; j++) {
  $(iconImage[j]).addClass('fa-3x')
}

//resize cards AFTER the 1st one
let cards = $('.card');
for (let x = 1; x < cards.length; x++) {
  $(cards[x]).css('width', '40%')
}

//cards click events
for (let z = 0; z < cards.length; z++) {
  $(cards[z]).on('click', (event) => {
    event.preventDefault();
    window.open(`https://thebsking.github.io/${$(cards[z]).attr('id')}`)
  })
}

//smooth scrolling function for #links
// $('a[href*="#"]').on('click', (event) => {
//   event.preventDefault();
//   $('html, body').animate({
//     scrollTop: $($(this).attr('href')).offset().top,
//   }, 500, 'linear')
// })


//media query changes