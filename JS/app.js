import Country from "./Country.js";


const arrCountreis = []
const arrOfNames = []
let countreisToShow = []
let viewOneCard = false;
let viewAFewCards = true;
let viewAllCards = false;

const init = () => {
  createUrl()
}


const createUrl = () => {
  // let url = "https://restcountries.com/v3.1/all?fields=name,population,capital,borders,languages,flags,unMember,maps,cca3"
  let urlAll = "https://restcountries.com/v3.1/all"
  createCountry(urlAll)
}

const createCountry = async (_url) => {
  let country;
  let resp = await fetch(_url)
  let data = await resp.json()
  data.forEach(element => {
    if (element.unMember) {
      country = new Country(element.name.common, element.cca3, element.population, element.capital,
        element.borders, element.languages, element.flags.png, element.maps.googleMaps, element.latlng[0], element.latlng[1])
      arrCountreis.push(country)
      arrOfNames.push(country.name)
    }
  });
  selectManager()
  formListiner()
  linksListener()
  if (!viewOneCard) {
    putACard()
  }
}

const selectManager = () => {
  arrOfNames.sort();
  let selectBox = document.querySelector("#id_select");

  // ננקה את התוכן הקודם כדי למנוע הצטברות של אפשרויות
  selectBox.innerHTML = '<option>Search a country</option>';

  // נוסיף את האפשרויות למבחר
  arrOfNames.forEach(name => {
      let option = document.createElement("option");
      option.textContent = name;
      selectBox.appendChild(option);
  });

  // הוספת event listener פעם אחת בלבד
  selectBox.addEventListener("change", (e) => {
    findACountry(e.target.value)
      // console.log(e.target.value);
  },
  //  { once: true }
  ); // מוסיף מאזין פעם אחת בלבד
}


const formListiner = () => {
  let form = document.querySelector("#id_form");
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let nameOfCountry = document.querySelector("#id_text").value;
    findACountry(nameOfCountry)
  })
}

const linksListener = () => {
  document.querySelector("#link_i").addEventListener("click", () => {
    findACountry("Israel")
    viewOneCard = true;
    viewAFewCards = viewAllCards = false;
  })
  document.querySelector("#link_u").addEventListener("click", () => {
    findACountry("United States")
    viewOneCard = true;
    viewAFewCards = viewAllCards = false;
  })
  document.querySelector("#link_s").addEventListener("click", () => {
    findACountry("Switzerland")
    viewOneCard = true;
    viewAFewCards = viewAllCards = false;
  })
  document.querySelector("#link_c").addEventListener("click", () => {
    findACountry("Canada")
    viewOneCard = true;
    viewAFewCards = viewAllCards = false;
  })
  document.querySelector("#link_b").addEventListener("click", () => {
    findACountry("Brazil")
    viewOneCard = true;
    viewAFewCards = viewAllCards = false;
  })

}

const findACountry = (_name) => {
  document.querySelector("#id_main").innerHTML = ``
  for (let i = 0; i < arrCountreis.length; i++) {
    if (arrCountreis[i].name === _name) {
      arrCountreis[i].render()
    }
  }
}

const putACard = () => {

  if (viewAFewCards) {
    for (let i = 0; i < arrCountreis.length; i++) {
      if (arrCountreis[i].name === "Israel" ||
        arrCountreis[i].name === "United States" ||
        arrCountreis[i].name === "Switzerland" ||
        arrCountreis[i].name === "Brazil" ||
        arrCountreis[i].name === "Canada"
      ) {
        countreisToShow.push(arrCountreis[i])
      }
    }
  }
  else if (viewAllCards) {
    arrCountreis.forEach(element => countreisToShow.push(element))
  }

  renderCard(countreisToShow)
  countreisToShow = []
}

const renderCard = (_listOfCountreis) => {
  _listOfCountreis.forEach(element => element.render())
}








init()