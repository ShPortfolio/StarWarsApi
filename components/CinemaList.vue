<template>
  <div clas="jumbotron">
    <div class="input-group mb-3">
      <input type="text" class="form-control" name="movie" :v-model="searchingMovie" @input="e => searchingMovie = e.target.value" >
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">Movies</button>
      </div>
    </div>
     <Pagination v-if="pagedMovies"
      :pagesNumber="moviesPagesNumber"
       @changeFromIndex="changeFromIndex"
    />    
    <ul class="list-group">
      <li v-for="(unitMovie, MovieIndex) in pagedMovies" :key="MovieIndex" class="list-group-item disabled">
        <MovieUnit :unit="unitMovie" />
      </li>
    </ul>
   
  </div>
</template>
<script>
  import CharacterUnit from '~/components/CharacterUnit.vue'
  import MovieUnit from '~/components/MovieUnit.vue'
  import Pagination from '~/components/Pagination.vue'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      CharacterUnit,
      MovieUnit,
      Pagination
    },
    data () {
      return {
        searchingChar: '',
        searchingMovie: '',
        currentCharacterPage: 2,
        perPage: 2,
        fromIndex: 0
      }
    },
    computed: {
      ...mapGetters({
        characters: 'cinema/getCharactersFromStore',
        movies: 'cinema/getMoviesFromStore'
      }),
      pagedCharacters () {
        if(this.characters.results) {
          return this.characters.results.slice(this.fromIndex, this.fromIndex+this.perPage);
        } else {
          return this.characters.results;
        }       
      },
      pagedMovies () {
        if(this.movies.results) {
          return this.movies.results.slice(this.fromIndex, this.fromIndex+this.perPage);
        } else {
          return this.movies.results;
        }  
      },
      moviesPagesNumber () {
        if (this.movies.results) {
          return Math.ceil(this.movies.results.length / this.perPage)
        } else {
          return this.movies.length
        }        
      },
      charactersPagesNumber () {
        if (this.characters.results) {
          return Math.ceil(this.characters.results.length / this.perPage)
        } else {
          return this.characters.length
        }        
      }
    },
    methods: {
      changeFromIndex (value) {
        this.fromIndex = value*this.perPage-this.perPage
      }
    },
    watch: {
      searchingChar (value) {
        this.$store.dispatch('cinema/getCharacters', value)
      },
      searchingMovie (value) {
        this.$store.dispatch('cinema/getMovies', value)
      }
    }
  }
  
</script>
<style scoped>
  .list-group {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    min-width: 800px;
    min-height: 700px;
  }
  .list-group-item {
    border: 1px solid grey;
    margin: 10px;
    min-height: 655px;
  }
  .jumbotron {
    min-width: 80%;
  }
</style>