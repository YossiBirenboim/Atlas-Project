import Country from "./Country.js";
import {putACard} from "./function.js"
import { logoLisiner } from "./function.js";
import { linksListener } from "./function.js";
import { formListiner } from "./function.js";
import { selectManager } from "./function.js";


import {arrCountreis} from "./function.js"
import {arrOfNames} from "./function.js"
import {countreisToShow} from "./function.js"
import {viewOneCard} from "./function.js"
import {viewAFewCards} from "./function.js"
 



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

  arrOfNames.sort()
  logoLisiner()
  linksListener()
  formListiner()
  selectManager()
  if (!viewOneCard) {
    putACard()
  }
}

init()