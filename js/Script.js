// Toggle Menu
let Toggle = document.querySelector('.Toggle');
let menuLinks = document.querySelector('nav .Links ')

// Add Class open with Menu
Toggle.onclick = function() {
    menuLinks.classList.toggle('open');
    this.classList.toggle('menu');
}

// Remove Class open Form key
document.onkeyup = function(e) {
    if (e.key == 'Escape') {
        menuLinks.classList.remove('open');
        Toggle.classList.remove('menu');
    }
}





// Create popup Model Form Image
let Gallery = document.querySelectorAll('.Gallery  .Gallery-img img');

// Looping Form image
Gallery.forEach(img => {
    img.addEventListener('click', (e) => {
        //Create div Popup
        let Popup = document.createElement('div');
        Popup.className = 'Popup';

        // Create Src img
        let image = document.createElement('div');
        image.className = 'image-pop';
        let imgs = document.createElement('img');
        image.appendChild(imgs);

        imgs.src = img.src;
        imgs.alt = img.alt;

        Popup.appendChild(image);

        // Key Close Popup
        let closePop = document.createElement('span');
        closePop.className = 'Close-Pop';
        closePop.appendChild(document.createTextNode('X'));
        image.appendChild(closePop);
        document.body.appendChild(Popup);


        //Close this Popup
        closePop.onclick = function() {
            Popup.remove();
        }
    });

});

// Check Lis Form dataset
let Lis = document.querySelectorAll('nav li a');
let link = document.querySelectorAll('.icon-down i');


function scrollIntoView(element) {
    element.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
scrollIntoView(Lis);
scrollIntoView(link);


// Click Up to first page
let up = document.querySelector('.up');

// Create a Progress
let Skills = document.querySelector('.Skills');

//Count Stats
let Stats = document.querySelector('.Stats ');
let StatsBox = document.querySelectorAll('.Stats .Stats-box h3');
let start = false;


window.onscroll = function() {


    // Form Scoll show Click
    this.scrollY >= 600 ? up.classList.add('show') : up.classList.remove('show');


    // Height Top Skills
    let SkillOffsetTop = Skills.offsetTop

    // Offset Height
    let SkillOffsetHeight = Skills.offsetHeight;

    // Window Height
    let WindowHeight = this.innerHeight
        // Window Scroll Height
    let windowPageTop = this.pageYOffset;

    if (windowPageTop > (SkillOffsetTop + SkillOffsetHeight - WindowHeight)) {
        let spans = document.querySelectorAll('.Skills .progress span');
        spans.forEach(span => {
            span.style.width = span.dataset.progress + '%';
        });

    } else if (windowPageTop < (SkillOffsetTop + SkillOffsetHeight - WindowHeight)) {
        let spans = document.querySelectorAll('.Skills .progress span');
        spans.forEach(span => {

            span.style.width = null;
        });
    }


    // Count Stats
    if (this.scrollY >= Stats.offsetTop) {
        if (!start) {
            StatsBox.forEach((element) => IntervalNumber(element));
        }
        start = true;
    }

}

//  Start Count Stats
function IntervalNumber(el) {
    let count = el.dataset.stats;

    let Countup = setInterval(() => {
        el.textContent++;

        if (el.textContent == count) {
            clearInterval(Countup);
        }
    }, 100 / count);

}

//this click go up page
up.onclick = function() {
    window.scrollTo({
        top: '0px',
        behavior: 'smooth'
    });
}


// Count Date time
let countDown = new Date("Dec 31, 2021 23:59:59").getTime();
let CountTime = setInterval(() => {

    //Get Date now
    let dateNow = new Date().getTime();

    // Find The Date Difference Between Now And Countdown Date
    let dateDiff = countDown - dateNow;

    // Get Time Units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);


    document.querySelector('.time .days').innerHTML = days < 10 ? ` 0${days}` : days;
    document.querySelector('.time .Hours').innerHTML = hours < 10 ? ` 0${hours}` : hours;;
    document.querySelector('.time .Minutes').innerHTML = minutes < 10 ? ` 0${minutes}` : minutes;;
    document.querySelector('.time .Seconds').innerHTML = seconds < 10 ? ` 0${seconds}` : seconds;;

    if (dateDiff == "0") {
        clearInterval(CountTime);
    }

}, 1000);