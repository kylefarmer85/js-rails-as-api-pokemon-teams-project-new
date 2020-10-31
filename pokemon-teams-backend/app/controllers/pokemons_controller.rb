class PokemonsController < ApplicationController

  def create
    nickname = Faker::Name.first_name
    species = Faker::Games::Pokemon.name
    trainer_id = Trainer.find(params[:id])
    pokemon = Pokemon.new(nickname: nickname, species: species, trainer_id: trainer_id)

    render json: pokemon
  end


  def destroy
    pokemon = Pokemon.find(params[:id])
    pokemon.destroy
    render json: pokemon
  end
end
