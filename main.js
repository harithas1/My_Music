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
        icon.src = "circle-pause-regular.svg";
    });
});

icon.addEventListener("click", function(){
    if(mySong.paused){
        mySong.play();
        icon.src = "circle-pause-regular.svg";
    } else {
        mySong.pause();
        icon.src = "circle-play-regular.svg";         
    }   
});