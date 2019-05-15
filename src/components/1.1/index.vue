<template>
	<div>
		{{ msg }}
		<div>
			<input type="text" v-model="info" />
			<button v-on:click="handleClick">添加</button>
		</div>
		<ul>
			<todo-item v-for="(item, index) in list" :key="index">
				<template v-slot:item="itemProps">
					<span
						:style="{
							fontSize: '20px',
							color: itemProps.checked ? 'red' : 'blue'
						}"
						>{{ item }}</span
					>
					<span
						:style="{
							fontSize: '20px',
							color: itemProps.checked ? 'red' : 'blue'
						}"
						>--->{{ getPercentage(item) }}</span
					>
				</template>
			</todo-item>

			<!-- :item 传值的方式针对一段HTML代码不可行 -->
			<!-- <todo-item v-for="(item, index) in list" :key="index" :item="item"></todo-item> -->
		</ul>
	</div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
	components: {
		TodoItem
	},
	data() {
		return {
			msg: "hello geektime",
			info: "",
			list: []
		};
	},
	methods: {
		handleClick() {
			this.list.push(this.info);
			this.info = "";
		},
		getPercentage(item) {
			return item * item;
		}
	}
};
</script>
