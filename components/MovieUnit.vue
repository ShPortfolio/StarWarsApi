<template>
  <div class="card" style="width: 21rem;">
    <div class="top-block">
      <img class="card-img-top" src="" :alt="unit.title">
      <h5 class="card-title">{{ unit.title }}</h5>
    </div>
    <div class="card-body"> 
      <p class="card-text">episode director: {{ unit.director }}</p>
      <p class="card-text">episode number: {{ unit.episode_id }}</p>
      <p class="card-text">opening crawl: {{ unit.opening_crawl }}</p>
      <p class="card-text">release date: {{ unit.release_date }}</p>      
      <a href="#" class="btn btn-primary">See more details</a> 
    </div>
  </div>
</template>
<script>
  export default {
    name: 'CharacterUnit',
    props: ['unit'],
    data () {
      return {
       
      }
    },
    computed: {
      
    }
  }
</script>
<style scoped>
  .top-block {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
  }
  .card-img-top {
    width: 40%;
    height: auto;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .btn {
    justify-self: center;
  }
</style>