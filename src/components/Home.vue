<template>
	<div>
		<h1>Home page</h1>
		<ul>
			<li><h3 @click="gotoSlot">vslot</h3></li>
			<li><h3 @click="gotoModel">vmodel</h3></li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		gotoSlot() {
			this.$router.push("/vslot");
		},
		gotoModel() {
			this.$router.push("/vmodel");
		}
	}
};
</script>

<style scoped>
ul li:hover {
	color: blue;
	cursor: pointer;
}
</style>
