let pages = 1;

const main = document.querySelector("main");
const changePage = document.querySelectorAll(".change-page");

async function callAPIs() {
  try {
    const URL = `https://rickandmortyapi.com/api/character/?page=${pages}`;
    const resp = await fetch(URL);
    const data = await resp.json();
    renderObject(data.results);
  } catch (error) {
    console.log("Erro ao buscar dados:", error);
  }
}

const renderObject = (characters) => {
  characters.forEach((characters) => {
    const htmlRender = `
<div class="box-character">
  <img src="${characters.image}" alt="" />
  <div class="box-information">
    <div class="info">
      <h2>Name: ${characters.name}</h2>
      <p>${characters.status} - ${characters.species}</p>
    </div>

    <div class="info">
      <h3>Última localização conhecida:</h3>
      <p>${characters.origin.name}</p>
    </div>

    <div class="info">
      <h3>Visto pela primeira vez em:</h3>
      <p>${characters.location.name}</p>
    </div>
  </div>
</div>

    `;
    
    main.innerHTML += htmlRender;
  });
  
};


const changePages = () => {
  changePage.forEach(page => {
    page.addEventListener("click", () => {
      main.innerHTML = ""
      if(page.textContent === "next") {
        if (pages < 42) {
          ++pages
        }
      }

      if(page.textContent === "preview") {
        if(pages > 1) {
          --pages
        }
      }
      callAPIs()
    })
  })
  
}

callAPIs();
changePages()

