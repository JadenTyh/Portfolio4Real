const caturl = 'https://api.thecatapi.com/v1/images/search';
const dogurl = "https://api.thedogapi.com/v1/images/search";
const section = document.querySelector(".container");
const button1= document.querySelector(".btn-l");
const button2 = document.querySelector(".btn-m");
const button3 = document.querySelector(".btn-r");

button1.addEventListener("click", getRandomCats);
button2.addEventListener("click", getRandomCats);
button3.addEventListener("click", getRandomCats);

randomCatPhoto = (json) => {
  let photo = json[0].url;
  section.classList.add("cats");

  let image = document.createElement("img");
  image.src = photo;
  image.classList.add("random_cats");
  image.alt = photo;
  section.appendChild(image);
};

async function getRandomCats() {
  section.innerHTML = "";
  //Randomly display cat or dog for each click
  let no = Math.floor(Math.random() * 2);
  if (no == 0) {
	  url = caturl;
  } else {
	  url = dogurl;
  }
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log("JSON:", json);
    return randomCatPhoto(json);
  } catch (e) {
    console.log("This is an error");
    console.log(e);
  }
}