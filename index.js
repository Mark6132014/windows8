console.log("%cSTOP!\nIf something is wrong, you can debug it using the Inspect element.\nWebsite: %o", "color: red; background: white", "https://itzgametime-vip.w3spaces.com");
setInterval(() => {
    document.querySelector('.taskbar .time').innerHTML = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() + '<br>' + new Date().getMonth() + '/' + new Date().getDay() + '/' + new Date().getFullYear();
}, 1000);
var taskbar = {
    startSearch: function() {
        document.querySelector(".start").style.display = "block";
    },
    browser: function() {
        document.querySelector(".ms-edge-application").style.display = "block";
    },
    explorer: function() {
        document.querySelector(".file-explorer").style.display = "block";
    }
}
var startbuttons = document.querySelector(".taskbar .startNow")
startbuttons.addEventListener("click", () => {
    taskbar.startSearch();
});
var browser = document.querySelector(".ms-edge-application");
setTimeout(() => {
    document.querySelector(".startup #start").style.display = "block";
}, 3000);
browser.querySelector("#go").addEventListener("click", () => {
    let address = browser.querySelector("#web-address");
    let website = browser.querySelector("#website");
    website.src = address.value;
});
var music = new Audio("Sounds/music.mp3");
document.querySelector(".start .cardMusic #play").addEventListener("click", () => {
    music.play();
});
document.querySelector(".start .cardMusic #pause").addEventListener("click", () => {
    music.pause();
});
