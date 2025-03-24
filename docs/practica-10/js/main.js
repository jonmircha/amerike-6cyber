async function obtenerDatosGitHub() {
  // endpoint - ruta del recurso que solicitamos
  let apiURL = "https://api.github.com/users/jonmircha";

  let response = await fetch(apiURL);
  let data = await response.json();
  console.log(response, data);

  const $sectionGitHub = document.querySelector("#github");
  let content = `
    <article>
      <h3>${data.name}</h3>
      <h4>${data.login}</h4>
      <h5>${data.location}</h5>
      <p>${data.bio}</p>
      <img src="${data.avatar_url}" />
    </article>
  `;

  $sectionGitHub.innerHTML = content;
}

async function obtenerDatosPeliculas() {
  let apiURL = "./js/data.json";

  let response = await fetch(apiURL);
  let data = await response.json();
  console.log(response, data);

  const $sectionMovies = document.querySelector("#movies");
  let content = "";

  data.peliculas.forEach(function (el) {
    content += `
      <article>
        <h3>${el.nombre}</h3>
        <h4>${el.estreno}</h4>
        <img src="${el.poster}" />
      </article>
    `;
  });

  $sectionMovies.innerHTML = content;
}

document.addEventListener("DOMContentLoaded", function () {
  obtenerDatosGitHub();
  obtenerDatosPeliculas();
});
