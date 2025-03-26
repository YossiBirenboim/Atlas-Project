import Country from "./Country.js";
import { listiner } from "./function.js";

const arrCountreis = []

const init = () => {
    createUrl()
    // addNav()
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
            addCountry(country)
            arrCountreis.push(country)
        }
    });
}

const addCountry = (_country) => {
    _country.render()
}


const addNav = () => {
    document.querySelector("header").innerHTML = `
    <ul class="nav nav-pills container p-3">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    </li>
  </ul>
      `
}





init()