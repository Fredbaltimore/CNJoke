function randomJokes() {
  const xmlhttp = new XMLHttpRequest();
  const url = "https://api.chucknorris.io/jokes/random";
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const json = JSON.parse(this.responseText);
      parseResponse(json);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
function parseResponse(json) {
  document.getElementById("jokes").innerHTML = json["value"];
}
document.getElementById("getjoke-btn").addEventListener("click", function () {
  randomJokes();
});

document.getElementById("p1").innerHTML =
  "Generate your Chuck Norris Jokes Below";

function imageSlides() {
  let imageArray = ["cn2.jpg", "cn3.jpg", "cn4.jpg", "cn5.jpg"];

  imageArray.forEach((item, index) => {
    setTimeout(() => {
      document.getElementById("slide").src = item;
      console.log(item, index);
    }, 2000 * (index + 1));
  });
}
