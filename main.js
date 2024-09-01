const mySong = document.getElementById("mySong");
const icon = document.getElementById("icon");
const songs = document.querySelectorAll(".song");
const source = mySong.querySelector("source");

songs.forEach(song => {
    song.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        source.src = this.getAttribute("data-src");
        mySong.load(); // Load the new source
        mySong.play();
        icon.className = "fa-solid fa-circle-pause";
    });
});

icon.addEventListener("click", function(){
    if(mySong.paused){
        mySong.play();
        icon.className = "fa-solid fa-circle-pause";
    } else {
        mySong.pause();
        icon.className = "fa-regular fa-circle-play";         
    }   
});