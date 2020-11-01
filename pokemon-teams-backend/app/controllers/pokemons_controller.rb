class PokemonsController < ApplicationController

  def create
    nickname = Faker::Name.first_name
    species = Faker::Games::Pokemon.name
    pokemon = Pokemon.new(nickname: nickname, species: species, trainer_id: params[:trainer_id])
    if pokemon.save
      render json: pokemon
    else
      render json: "Pokemon NOT created"
    end
  end


  def destroy
    pokemon = Pokemon.find(params[:id])
    pokemon.destroy
    
    render json: pokemon
  end

end
