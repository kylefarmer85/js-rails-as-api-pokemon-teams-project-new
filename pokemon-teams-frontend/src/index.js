const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const main = document.querySelector('main')

function run() {
  fetchTrainers()
}



function fetchTrainers() {
  fetch('http://localhost:3000/trainers')
  .then(resp => resp.json())
  .then(trainers => {
    trainers.forEach(renderTrainer)
  });
}

function renderTrainer(trainer) {
  main.innerHTML += 
  `<div class="card" data-id=${trainer.id}><p>${trainer.name}</p>
  <button data-trainer-id="${trainer.id}">Add Pokemon</button>
  <ul></ul>
  </div>`
} 













run()