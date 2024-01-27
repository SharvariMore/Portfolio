// active hamburger menu 
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist")
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// remove navlist
navlist.addEventListener("click",()=>{
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
})



// rotate text js code 
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");


// switch between about buttons 

const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    contents.forEach(content => content.style.display = 'none');
    contents[index].style.display = 'block';
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});



// portfolio fillter 

var mixer = mixitup('.portfolio-gallery',{
    selectors: {
        target: '.portfolio-box'
    },
    animation: {
        duration: 500
    }
});


// Initialize swiperjs 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    breakpoints: {
        576:{
            slidesPerView:2,
            spaceBetween:10,
        },
        1200:{
            slidesPerView:3,
            spaceBetween:20,
        },
    }
  });



//   skill Progress bar 

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll",()=>{
    if(!skillsPlayed)
    skillsCounter();
})


function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >= topPosition + el.offsetHeight)return true;
    return false;
}

function updateCount(num,maxNum){
    let currentNum = +num.innerText;
    
    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(()=>{
            updateCount(num,maxNum)
        },12)
    }
}


let skillsPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skill))return;
    skillsPlayed = true;
    sk_counters.forEach((counter,i)=>{
        let target = +counter.dataset.target;
        let strokeValue = 465 - 465 * (target / 100);

        progress_bars[i].style.setProperty("--target",strokeValue);

        setTimeout(()=>{
            updateCount(counter,target);
        },400)
    });

    progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards");
}


// side progress bar 

let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#e6006d ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// active menu 

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

// scroll reveal

ScrollReveal({ 
    distance:"90px",
    duration:2000,
    delay:200,
    // reset: true ,
});


ScrollReveal().reveal('.hero-info,.main-text,.proposal,.heading', { origin: "top" });
ScrollReveal().reveal('.about-img,.fillter-buttons,.contact-info', { origin: "left" });
ScrollReveal().reveal('.about-content,.skills', { origin: "right" });
ScrollReveal().reveal('.allServices,.portfolio-gallery,.blog-box,footer,.img-hero', { origin: "bottom" });


//skills button
function showSkills(company) {
    var skillsContent = document.getElementById('skillsContent');
    var popup = document.getElementById('popup');

    if (company === 'infosys') {
        skillsContent.innerHTML = "• Utilized HTML, CSS, Bootstrap, JavaScript, and React, to create a user-centric interface and independently developed 20+ web pages, leading to a 40% boost in meeting efficiency and meeting client requirements and deadlines. <br>•	Integrated the application with real-time data through API integration, achieving a 50% reduction in data latency and facilitating timely decision-making for the business.<br> • Effectively mentored and trained 6 entry-level professionals, equipping them with the latest technology skill set in UI development by interactive communication. <br> Skills: HTML, CSS, JS, React, Bootstrap";
    } else if (company === 'capgemini') {
        skillsContent.innerHTML = "• Provided comprehensive support for client services, including Microsoft Teams, Outlook, system updates, and license renewals by proactive customer engagement. <br>• Addressed and resolved over 120 client issues, achieving a 60% increase in productive efficiency by extensive team support. <br>•	Completed over 200 hours of training in various forefront technologies, including UNIX, SQL, AWS, VMware, and Windows. <br> Skills: Microsoft Suite, Windows, MySQL, AWS";
    }

    popup.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

//education button
function showPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "block";
}

function educlosePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
}


function isValidEmail(email) {
    // Regular expression for a basic email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Initialize emailJS with your user ID
emailjs.init("z_-Ultxv2IDj2KrTR");

// Function to send email using emailJS
function sendEmail() {
    var requiredFields = ["firstName", "lastName", "email", "subject", "message"];
    var isAnyFieldEmpty = false;

    requiredFields.forEach(function(field) {
        var fieldValue = document.getElementById(field).value.trim();
        if (fieldValue === "") {
            isAnyFieldEmpty = true;
        }
    });

    if (isAnyFieldEmpty) {
        alert("Please fill in all required fields.");
        return;
    }

    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value.trim();

    if (!isValidEmail(emailValue)) {
        alert("Please enter a valid email address.");
        return;
    }

    var templateParams = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };


    emailjs.send("service_qrab2l9", "template_7f2uk1t", templateParams)
        .then(function(response) {
            alert("Email sent successfully to sharvarimore90@gmail.com!", response);
            // Optionally, reset the form after successful submission
            document.getElementById("myForm").reset();
        }, function(error) {
            alert("Failed to send email. Error:", error);
        });
}
