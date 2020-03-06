<template>
	<div id="app">
		<el-button @click="getToken" size="small">获取token</el-button>
	</div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import API from './api';
@Component
export default class App extends Vue {
	private async getToken() {
		const {data} = await API.getToken();
		console.log(data);
	}
}
</script>
<style lang="scss">
	html, body{
		height: 100%;
		margin: 0;
		padding: 0;
	}

	#app{
		height: 100%;
		padding: 15px;
	}

	#app>div{
		height: 100%;
	}
</style>
