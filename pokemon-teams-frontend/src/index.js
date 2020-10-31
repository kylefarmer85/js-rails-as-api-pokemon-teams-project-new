const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const main = document.querySelector('main')

// function addErrorMessage(error) {
//   let errorHeading = document.createElement('h3');
//   errorHeading.textContent = error.message;
//   errorHeading.className = "error-heading";
//   document.body.prepend(errorHeading);
// }

function run() {
  fetchTrainers()
  addReleaseBtnListener()
}

function fetchTrainers() {
  fetch(TRAINERS_URL)
  .then(resp => resp.json())
  .then(trainers => trainers.forEach(renderTrainer)
  )
}

function renderTrainer(trainer) {
  main.innerHTML += 
  `<div class="card" data-id=${trainer.id}><p>${trainer.name}</p>
    <button data-trainer-id="${trainer.id}">Add Pokemon</button>
    <ul id=${trainer.id}>
    </ul>
  </div>`
  trainer.pokemons.forEach(renderPokemon)
}

function renderPokemon(pokemon) {
  const ul = document.getElementById(pokemon.trainer_id)
  const li = document.createElement('li')
  li.innerHTML += `<li>${pokemon.nickname} (${pokemon.species})<button class="release" data-pokemon-id=${pokemon.id}>Release</button></li>`
  ul.append(li)
}

function addReleaseBtnListener() {
  main.addEventListener('click', function(e) {
    if (e.target.className === 'release') {
      deletePokemon(e)
    }
  })

  function deletePokemon(e) {
    const pokeId = e.target.dataset.pokemonId

    fetch(`http://localhost:3000/pokemons/${pokeId}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(deletedPoke => {
      e.target.parentNode.remove()
      console.log(`${deletedPoke.nickname} successfully released!`)
    })
    // .catch(error => addErrorMessage(error))
  }
}












run()