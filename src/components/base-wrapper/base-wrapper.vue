<template>
	<view class="flex-column h-full">
		<view class="flex-1">
			<slot></slot>
		</view>
		
		<view>
			<g-tab-bar :activeTabName="activeTabName"></g-tab-bar>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		activeTabName: {
			type: String,
			required: true,
			default: 'index'
		},
	})
</script>

<style>

</style>