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
        skillsContent.innerHTML = "• Developed interfaces for 20+ web pages using HTML, CSS, JavaScript, React, and TypeScript leading to an 80% improvement in meeting client requirements and enhanced overall user experience. <br>•	Integrated full-stack development, incorporating REST API integration and GIT version control system for seamless real-time updates, resulting in a 70% decrease in data latency for continuous integration and product management.<br> • Implemented responsive design principles across the web pages, ensuring a seamless user experience across devices and screen sizes, contributing to a 55% increase in mobile user engagement and overall accessibility.<br>•	Guided and coached a team of 6 entry-level UI professionals through hands-on training and interactive workshops, equipping the team with advanced UI development skills and boosting 50% team productivity. <br> <br> Skills: HTML, CSS, JS, React, Bootstrap";
    } else if (company === 'capgemini') {
        skillsContent.innerHTML = "• Offered profound assistance for client services, addressing 100% of Microsoft inquiries, and overseeing cloud management in AWS for 50+ clients through preemptive customer engagement and communication.<br>•	Rectified 120+ client issues through careful analysis, achieving a 60% increase in operational effectiveness and a 30% boost in customer retention rates with performance optimization and integration testing. <br>•	Strengthened system security through the design and management of IAM policies, leading to a 40% decrease in unauthorized access and reinforcing access control measures adhering to software engineering principles.<br>•	Completed 200+ hours of in-depth training on cutting-edge technologies, mastering AWS services, DevOps principles, Unix systems, Docker, MySQL, Oracle, and Postgres databases enhancing technical proficiency and ensuring readiness for complex projects ahead enhancing system integration. <br> <br>Skills: Microsoft Suite, Windows, MySQL, AWS";
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
