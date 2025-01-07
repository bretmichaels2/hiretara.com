//edit marquee text in these quotes. may need to adjust --scrollspeed in css file for marquee speed

const aboutText = "born and bred in south florida, tara shafa is a cinematographer based in brooklyn, ny.&nbsp"


//marquee text insert

let marqueeText1 = document.querySelector("#marquee1")
let marqueeText2 = document.querySelector("#marquee2")

marqueeText1.innerHTML = aboutText
marqueeText2.innerHTML = aboutText

//about page text inset

//let aboutPageText = document.querySelector("#about-text")

//aboutPageText.innerHTML = aboutText


//toggle dropdown menu

const mobileNav = document.getElementById("mobile-nav")
const mobileBg = document.getElementById("mobile-nav-bg")

    function toggleDropdown() {
        mobileNav.classList.toggle("show");
        mobileBg.classList.toggle("show");
    }
