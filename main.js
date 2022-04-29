const hero = document.getElementById("hero");
const name = document.getElementById("name");
const title = document.getElementById("title");
const audio = document.getElementById("a7a")

function ahh(){
   audio.play()
}

hero.addEventListener("click", (item) => {
  if (item.target.className == "btn btn-primary") {
    title.innerText = "You";
  } else if (item.target.className == "btn btn-secondary") {
    title.innerText = "Are";
  } else if (item.target.className == "btn btn-success") {
    title.innerText = "Hella";
  } else if (item.target.className == "btn btn-danger") {
    title.innerText = "Super";
  } else if (item.target.className == "btn btn-warning") {
    title.innerText = "GAYYYYYYY";
  } else {
    title.innerText = "this is not a button"
  }
});
