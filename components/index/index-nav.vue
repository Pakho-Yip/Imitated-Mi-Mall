<template>
	<view class="row j-center m-2">
		<block v-for="(item, index) in resdata" :key="index">
			<view class="span-4 d-flex flex-column j-center a-center py-1" @tap="event(item)">
				<image :src="item.src" 
				style="width: 60rpx;height: 60rpx;"
				mode="widthFix"></image>
				<text class="font-sm">{{item.text}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			resdata: Array
		},
		methods:{
			event(item) {
				console.log("点击了图标")
			}
		}
	}
</script>

<style>
</style>
