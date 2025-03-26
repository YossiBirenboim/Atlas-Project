export default class Country {
  constructor(_name, _shortName, _pop, _capital, _neighbors, _languages, _flag, _map, _lat, _lon) {
    this.name = _name;
    this.shortName = _shortName;
    this.pop = _pop;
    this.capital = _capital;
    this.neighbors = _neighbors;
    this.languages = _languages;
    this.flag = _flag;
    this.map = _map;
    this.lat = _lat;
    this.lon = _lon;
  }

  renderPop() {
    let parent = document.querySelector("#id_main");
    let listOfN = this.findNeighbors();
    let listOfL = this.showTheLanguages();
    parent.innerHTML = `
            <div class="container renderPopClass">
            <div>
            <ul>
                <li>name : ${this.name}</li>
                <li>short name : ${this.shortName}</li>
                <li>population : ${this.pop}</li>
                <li>capital : ${this.capital}</li>
                <li>neighbors : ${this.neighbors}</li>
                <li>languges : ${listOfL.forEach(elemnt => elemnt)}</li>
                <li class = "listOfNeighbors"> ${listOfN.forEach(elemnt => elemnt)}</li>
                </ul>
                </div>
                <div><img src  = "${this.flag}"</div>
                <div class = "iframeClass"><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
            src="https://maps.google.com/maps?q=${this.lat},${this.lon}&hl=es&z=5&amp;output=embed">
            </iframe></div>
            </div>
            `;
  }

  render() {
    let myDiv = document.createElement("div")
    myDiv.className = "div_b"
    document.querySelector("#id_main").append(myDiv)
    myDiv.innerHTML = `<div class="card cardClass" style="width: 25rem;">
    <div class="card-body" href = "../info.html">
    <img src="${this.flag}" class="card-img-top" alt="${this.name}">
    <p class="card-text">name: ${this.name}.</p> 
    </div>
    </div>`
    myDiv.addEventListener("click", () => {
      this.renderPop()
    })

  }

  findNeighbors() {
    let listOfN = []
    if (this.neighbors === undefined) {
      listOfN.push(`none`)
      return listOfN
    }
    for (let key in this.neighbors) {
      listOfN.push(this.neighbors[key])
    }
    return listOfN;
  }
  showTheLanguages() {
    let listOfL = []
    if (this.neighbors === undefined) {
      listOfL.push(`none`)
      return listOfL
    }
    for (let key in this.neighbors) {
      listOfL.push(this.neighbors[key])
    }
    return listOfL;
  }
}