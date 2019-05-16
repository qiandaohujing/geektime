<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import axios from "axios";

export default {
	created() {
		axios
			.post(
				"https://www.easy-mock.com/mock/5c34a1dd571e3a7876576640/example/upload"
			)
			.then(res => {
				console.log("res:", res);
			});
	}
};
</script>