<template>
	<base-wrapper activeTabName="index">
		index
		
		<navigator :url="'/subPackages/test/demo'">
		    <up-button text="测试跳转" />
		</navigator>
	</base-wrapper>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import testApi from '@/api/test/testApi';

	async function test() {
		let res = await testApi.time()
		console.log(res);
	}

	test();
</script>

<style>

</style>