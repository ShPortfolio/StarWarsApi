<template>
  <div class="card" style="width: 21rem;">
    <div class="top-block">
      <img class="card-img-top" src="" :alt="unit.name">
      <h5 class="card-title">{{ unit.name }}</h5>
    </div>
    <div class="card-body"> 
     
      <p class="card-text">gender: {{ unit.gender}}</p>
      <p class="card-text">eye color: {{ unit.eye_color }}</p>
      <p class="card-text">date of birth/creation: {{ unit.birth_year }}</p>
      <p class="card-text">hair color: {{ unit.hair_color }}</p>
      <p class="card-text">height: {{ unit.height }}</p>
      <p class="card-text">mass: {{ unit.mass }}</p>
      <p class="card-text">home world: 
       <!-- <HomeWorld :address="unit.homeworld" /> -->
      </p>
      <p class="card-text">skin color: {{ unit.skin_color }}</p> 
      <a :href="`${unit.name}/details`" class="btn btn-primary">See more details</a> 
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