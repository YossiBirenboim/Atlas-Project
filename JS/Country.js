export default class Country {
  constructor(_name, _shortName, _pop, _capital, _neighbors, _languages, _flag, _map) {
    this.name = _name;
    this.shortName = _shortName;
    this.pop  = _pop;
    this.capital = _capital;
    this.neighbors = _neighbors;
    this.languages = _languages;
    this.flag = _flag;
    this.map = _map;
     
  }

  renderPop(){
    let divs = document.querySelectorAll(".div_b");
    let parent = document.querySelector("#id_main");
    
    divs.forEach(div => {
         
            parent.innerHTML = `
            <div class="container">
               <ul>
                <li>${this.name}</li>
                <li>${this.shortName}</li>
                <li>${this.pop}</li>
                <li>${this.capital}</li>
                <li>${this.neighbors}</li>
                <li>${this.languages}</li>
                <li><div><a href="${this.flag}">Show the flag</a></div></li>
                <li><div><a href="${this.map}">To the map</a></div></li>
               </ul>
            </div>
            `;
        
    });
  }
  render() {
    
    let myDiv = document.createElement("div")
    myDiv.className = "div_b"
    myDiv.style.backgroundColor = "silver"
    myDiv.style.padding = 0;
    
    document.querySelector("#id_main").append(myDiv)
    myDiv.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body" href = "../info.html">
    <img src="${this.flag}" class="card-img-top" alt="${this.name}">
    <p class="card-text">name: ${this.name}.</p>
    <p class="card-text">pop: ${this.pop}.</p>
    <p class="card-text">capital: ${this.capital}.</p>
    <p class="card-text"> languages: ${this.languages}.</p>
    </div>
    </div>`
    myDiv.addEventListener("click",()=>{
      this.renderPop()
    })
     
  }
  
  
}