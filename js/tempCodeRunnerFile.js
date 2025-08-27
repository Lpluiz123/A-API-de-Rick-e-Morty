// <div class="box-character">
//   <img src="./img/104.jpg" alt="" />
//   <div class="box-information">
//     <div class="info">
//       <h2>Doom-Nomitron</h2>
//       <p>Morto-Alienígena</p>
//     </div>

//     <div class="info">
//       <h3>Última localização conhecida:</h3>
//       <p>Dorian 5</p>
//     </div>

//     <div class="info">
//       <h3>Visto pela primeira vez em:</h3>
//       <p>Vindicators 3: O Retorno de Worldennder</p>
//     </div>
//   </div>
// </div>


const URL = "https://rickandmortyapi.com/api"


async function chamarApi() {
  const resp = await fetch(URL)
  console.log(resp)
};


    // .then((response) => response.json())
    // .then((data) => {
    //   console.log(data.results[1]);
    //   h2.innerHTML = data.results[1].name;
    // })

    // .catch((error) => {
    //   console.log("Erro ao obter os dados:", error);
    // });
chamarApi()