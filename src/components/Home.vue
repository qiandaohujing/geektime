<template>
	<div>
		<h1>Home page</h1>
		<el-button type="primary" @click="testSth">test</el-button>
		<ul>
			<li><h3 @click="gotoSlot">vslot</h3></li>
			<li><h3 @click="gotoModel">vmodel</h3></li>
		</ul>
	</div>
</template>

<script>
import { login } from "../api/login";
export default {
	data() {
		return {};
	},
	methods: {
		testSth() {
			login().then(res => {
				console.log("res:", res);
			});
		},
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
ul li {
	background-color: yellow;
}
</style>
