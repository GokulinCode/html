async function call() {
    try {
        let data = await fetch("https://restcountries.com/v3.1/all");
    let allData = await data.json(); 
    console.log(allData);
    allData.forEach(countries => {
        let country = document.createElement("div");
        country.setAttribute("class","container");
        country.innerHTML = `
        <h2>${countries.name.common}</h2>
        <img src=${countries.flags.svg}
        class = "flag" />
        <div class="info">
        
        <p><span>Population:</span>${countries.population}</p>
        <p><span>Region:</span>${countries.region}</p>
        <p><span>Capital:</span>${countries.capital}</p>
        <p><span>Continents:</span>${countries.continents}</p>
        <button>
        <a href="https://api.openweathermap.org/data/2.5/weather?q=${countries.name.common}&appid=4163d7a1e0d4a7fcc1e1963437ca4a1d">
        Click for weather</button></a>
        </div>`
        document.body.appendChild(country);
    });
    
    
    } catch (er) {
        console.log("Eroor 404")
        
    }
}call();