<template>
	<li class="item">
		<input type="checkbox" v-model="checked">
		<slot name="item" v-bind="{checked}"></slot>
	</li>
  
	<!-- <li>
		<input type="checkbox" v-model="checked">
		<span :style="{fontSize: '20px',color: checked ? 'red' : 'blue'}">{{item}}</span>
	</li> -->
</template>

<script>
	export default {
		props: ["item"],
		data() {
			return {
				checked: false
			};
		}
	};
</script>

<style scoped>
	.item {
		color: red;
	}
</style>
