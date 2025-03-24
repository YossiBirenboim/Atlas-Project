export default class Country {
    constructor(_name, _shortName, _pop, _capital,_neighbors, _languages, _flag, _map){
        this.name = _name;
        this.shortname = _shortName;
        this.pop = _pop;
        this.capital = _capital;
        this.neighbors = _neighbors;
        this.languages = _languages;
        this.flag = _flag;
        this.map = _map;
    }

    render(){
        let div = document.createElement("div")
         
        document.querySelector("#id_main").append(div)
        div.innerHTML =  `<div class="card" style="width: 18rem;">
  <img src="${this.flag}" class="card-img-top" alt="${this.name}">
  <div class="card-body">
    <p class="card-text">pop: ${ this.pop}.</p>
    <p class="card-text">capital: ${this.capital}.</p>
    <p class="card-text"> languages: ${this.languages}.</p>
  </div>
</div>`
    }
}