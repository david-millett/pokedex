# Pokedex

This project was designed as a way to demonstrate wrangling and transforming large datasets ready for frontend use. Also with a focus on efficiency.

Using the PokeAPI as a fun initial project - this RESTful API interface stores thousands of lines of data relating to pokemon

Day 1 

Set up a `pokemonService.js` file to fetch the pokemon data using axios. As per the API's rules, and to follow good practice, the data was saved to local storage to minimise API requests and improve overall efficiency. HOW?

Initially, the dataset was limited to the original 151 pokemon.

This was great to practice getting data from an API and saving it locally - for my plans, however, it seems a bit too hungry in terms of making many API requests at once to be able to filter data, etc.

Therefore, a more efficient and scalable solution seems to be a hybrid approach: storing a local file that contains a list of pokemon and basic info, and then using the PokeAPI for more detailed info if people want to find it.

Day 2

Decided to use the API after all after doing some research.

Set to work on making the landing page and the components that make it up. Created a table and some page controllers. A challenge was ensuring the data was accessed at the right moment, so had to utilise `useEffect` a lot.

Especially in the `Table` component - set it with `useEffect` so that it would update every time the `page`, `pageLength`, or `pokemon` list changed. This project was a bit of fun, testing my limits and experimenting to see what was possible and how it could be done.

Created a new `pokemonService` function that paginates the pokemon data and then makes calls to the API to fetch more in depth info. This was done to improve efficiency so that only a smaller page amount's worth of pokemon had further calls to the database. This is because the call to fetch the list only contains the pokemon's name and a url to its individual information. So, had to go through and make a call for each one to access more information. This required async formulae with a `.map()`.