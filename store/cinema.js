export const  state = () => ({
  caracters: [],
  movies: []
})

export const actions = {
  async getCharacters(context, searchedChar) {
    fetch(`https://swapi.dev/api/people/?search=${searchedChar}`)
      .then(response => {
      response.json().then(list => {
      		context.commit('setCharacters', list);
      })
    })    
  },
  async getMovies (context, searchedMov) {
  	fetch(`https://swapi.dev/api/films/?search=${searchedMov}`)
  	.then(response => {
      response.json().then(list => {
      		context.commit('setFilms', list);
      })
    })    
  }
}
export const getters = {
  getCharactersFromStore(state) {
    return state.caracters;
  },
  getMoviesFromStore(state) {
    return state.movies;
  }
}

export const mutations = {
  setCharacters (state, text) {
    state.caracters = text;
  },
  setFilms (state, text) {
    state.movies = text;
  }
}