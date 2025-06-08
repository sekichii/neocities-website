let creation_date = new Date(2025, 5, 8, 20, 58);

function creationDate() {
    let now = new Date();
    let time = now.getTime() - creation_date.getTime();
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / 1000);
    document.getElementById("js-creation-date").innerHTML = "this website is " + days + " days " + hours + " hours " + minutes + " minutes and " + seconds + " seconds old";
    setTimeout(creationDate, 1000);
}