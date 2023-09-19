<template>
	<base-wrapper activeTabName="product">
		product

		<text>{{ testStore.count }}</text>
		<button @click="testStore.increment">增加</button>
	</base-wrapper>
</template>

<script setup>
	import {
		useTestStore
	} from '../../store/modules/test';
	const {
		proxy
	} = getCurrentInstance();

	const testStore = useTestStore();
</script>

<style lang="scss" scoped>

</style>