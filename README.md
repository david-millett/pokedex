# Pokedex

This project was designed as a way to demonstrate wrangling and transforming large datasets ready for frontend use. Also with a focus on efficiency.

Using the PokeAPI as a fun initial project - this RESTful API interface stores thousands of lines of data relating to pokemon

Day 1 

Set up a `pokemonService.js` file to fetch the pokemon data using axios. As per the API's rules, and to follow good practice, the data was saved to local storage to minimise API requests and improve overall efficiency. HOW?

Initially, the dataset was limited to the original 151 pokemon.

This was great to practice getting data from an API and saving it locally - for my plans, however, it seems a bit too hungry in terms of making many API requests at once to be able to filter data, etc.

Therefore, a more efficient and scalable solution seems to be a hybrid approach: storing a local file that contains a list of pokemon and basic info, and then using the PokeAPI for more detailed info if people want to find it.