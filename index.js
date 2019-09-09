// movie search controller
document.getElementById('submit').addEventListener('click', function(e) {
  e.preventDefault();
  movieSearch();
});

let movieSearch = async title => {
  title = document.getElementById('data').value;

  let response = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=e8cff417&t=${title}`
  );
  // console.log(response);
  let data = await response.json();
  if (data.Title === undefined) {
    alert('No results found.  Please try again!');
  } else {
    document.getElementById('title').innerText = data.Title;
    document.getElementById('actors').innerText = data.Actors;
    document.getElementById('plot').innerText = data.Plot;
    document.getElementById('release').innerText = data.Released;
    document.querySelector('img').src = data.Poster;
  }
};
