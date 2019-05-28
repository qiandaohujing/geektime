<template>
	<div id="vwatch">
		<div>
			{{ fullName }}

			<div>firstName: <input v-model="firstName" /></div>
			<div>lastName: <input v-model="lastName" /></div>
		</div>
	</div>
</template>

<script>
import { setTimeout } from "timers";
export default {
	data() {
		return {
			firstName: "Foo",
			lastName: "Bar",
			fullName: "Foo Bar"
		};
	},
	watch: {
		firstname: (function() {
			let timer = null;
			return function(val) {
				clearTimeout(timer);
				timer = setTimeout(
					() => (this.fullname = val + " " + this.lastname),
					500
				);
			};
		})(),
		lastname: (function(val) {
			let timer = null;
			return function() {
				clearTimeout(timer);
				timer = setTimeout(
					() => (this.fullname = this.firstname + " " + val),
					500
				);
			};
		})()
	}
};
</script>

<style scoped>
#vwatch {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
