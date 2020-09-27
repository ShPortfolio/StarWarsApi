<template>
	<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item" :class="{disabled: previousPage < 1}">
      <a href="#" class="page-link" @click="movePreviousPage()" tabindex="-1">Previous</a>
    </li>
    <li @click="changeCurrent(index)" v-for="(unit, index) in pagesNumber" :key="index" class="page-item" :class="{active: index+1 === current}">
    	<a class="page-link" href="#">{{unit}}</a>
    </li>
    <li class="page-item" :class="{disabled: nextPage > pagesNumber}">
      <a href="#" class="page-link" @click="moveNextPage()">Next</a>
    </li>
  </ul>
</nav>
</template>
<script>
	export default {
		props: {
			pagesNumber: {
				type: Number,
				default: 0
			}
		},
		data () {
			return {
				current: 1
			}
		}, 
		methods: {
			moveNextPage () {
				this.current++;
			},
			movePreviousPage () {
				this.current--;
			},
			changeCurrent(index) {
				this.current = index+1;
			}
		},
		computed: {
			nextPage () {
				return this.current + 1;
			},
			previousPage () {
				return this.current - 1;
			}
		},
		watch: {
			current (val) {
				this.$emit('changeFromIndex', val)
			}
		}
	}	
</script>
<style scoped>
	
</style>