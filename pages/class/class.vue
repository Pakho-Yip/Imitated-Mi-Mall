<template>
	<view>
		{{title}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"111111"
			}
		},
		onLoad() {
			console.log("2222");
			// console.log(getApp().globalData.text);
			console.log(uni.getStorageSync('index'));
			// this.pagepopup();
		},
		//显示
		onShow() {
			this.title = getApp().globalData.text;
		},
		methods: {
			pagepopup(){
				uni.$on('pagepopup', (data) => {
					this.title = data.title;
					    console.log('标题：' + data.title)
					    console.log('内容：' + data.content)
					})
			}
  
		}
	}
</script>

<style>

</style>
