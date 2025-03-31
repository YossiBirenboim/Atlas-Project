export const arrCountreis = []
export const arrOfNames = []
export let countreisToShow = []
export let viewOneCard = false;
export let viewAFewCards = true;
export let viewAllCards = false;

export const putACard = () => {
  document.querySelector("#id_main").innerHTML = ``

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

  countreisToShow.forEach(element => element.render())
  countreisToShow = []
}

export const logoLisiner = () => {
  let logo = document.querySelector("#id_logo");
  logo.addEventListener("click", () => {
    viewAFewCards = true;
    putACard()
  })
}

export const findACountry = (_name) => {
  document.querySelector("#id_main").innerHTML = ``
  for (let i = 0; i < arrCountreis.length; i++) {
    if (arrCountreis[i].name === _name) {
      arrCountreis[i].render()
    }
  }
}

export const linksListener = () => {
  document.querySelector("#link_all").addEventListener("click", () => {
    viewAFewCards = viewOneCard = false;
    viewAllCards = true;
    putACard()
  })
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

export const formListiner = () => {
  let form = document.querySelector("#id_form");
  form.addEventListener("input", (e) => {
    e.preventDefault()
    let firstOfTheName = document.querySelector("#id_text").value
    countryOriginByFirstLetters(firstOfTheName)
  })
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let nameOfCountry = document.querySelector("#id_text").value;
    findACountry(nameOfCountry)
  })
}

export const selectManager = () => {
  let selectBox = document.querySelector("#id_select");
  selectBox.innerHTML = '<option>Search a country</option>';
  arrOfNames.forEach(name => {
    let option = document.createElement("option");
    option.textContent = name;
    selectBox.appendChild(option);
  });
  selectBox.addEventListener("change", (e) => {
    findACountry(e.target.value)
  });
}

const countryOriginByFirstLetters = (_firstOfTheName) => {
  let cardAppeared = false;
  for (let i = 0; i < _firstOfTheName.length; i++) {
    if (_firstOfTheName[i] < `A` || _firstOfTheName[i] > `z`){
      alert("Invalid typing ! \n Please write in English")
    }
  }
    
  _firstOfTheName = _firstOfTheName.toLowerCase()
  let tempStr;
  for (let i = 0; i < arrOfNames.length; i++) {
    tempStr = arrOfNames[i].toLowerCase()
    if (tempStr.startsWith(_firstOfTheName)) {
      document.querySelector("#id_main").innerHTML = ``
      break;
    }
  }
  for (let i = 0; i < arrCountreis.length; i++) {
    tempStr = arrCountreis[i].name.toLowerCase()
    if (tempStr.startsWith(_firstOfTheName)) {
      arrCountreis[i].render()   
    }
  }
}








