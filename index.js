// movie search controller
document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  movieSearch();
});

function showobj() {
  document.getElementById("title").innerText = obj.Title;
  document.getElementById("actors").innerText = obj.Actors;
  document.getElementById("plot").innerText = obj.Plot;
  document.getElementById("release").innerText = obj.Released;
  document.querySelector("img").src = obj.Poster;
}

let obj = {};

function movieSearch(title) {
  title = document.getElementById("data").value;
  console.log(title);
  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e8cff417&t=${title}`)
    .then(res => res.json())
    .then(data => (obj = data))
    .then(obj => console.log(obj))
    .then(function() {
      showobj();
    });
}
