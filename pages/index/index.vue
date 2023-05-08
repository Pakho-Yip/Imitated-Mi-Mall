<template>
	<view>
<!-- 		<image v-if="show" class="logo animated bounceIn fast" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->
		<!-- <view style="font-size: 50upx;" class="iconfont icon-wode"></view> -->
		
<!-- 		<view class="d-flex bg-white border-top position-fixed bottom-0 left-0 right-0" style="height: 90upx;">
			<view class="flex-1 d-flex j-center a-center flex-column line-h">
				<view class="iconfont icon-xihuan line-h"></view>
				收藏
			</view>
			<view class="flex-1 d-flex j-center a-center flex-column line-h">
				<view class="iconfont icon-gouwuche line-h"></view>
				购物车
			</view>
			<view style="flex: 2.5;" class="text-white main-bg-color d-flex j-center a-center" hover-class="main-bg-hover-color">加入购物车</view>
		</view> -->
		
		<!-- <view style="line-height: 1;display: inline-block;background: #007AFF;width: 371upx;height: 150upx;border-right: 4upx solid #333333;"></view>
		<view style="line-height: 1;display: inline-block;background: #09BB07;width: 375upx;height: 150upx;"></view> -->
		
<!-- 		<scroll-view scroll-x="true" class="scroll-row">
			<view style="width: 200rpx;" class="border scroll-row-item">1</view>
			<view style="width: 200rpx;" class="border scroll-row-item">2</view>
			<view style="width: 200rpx;" class="border scroll-row-item">3</view>
			<view style="width: 200rpx;" class="border scroll-row-item">4</view>
			<view style="width: 200rpx;" class="border scroll-row-item">5</view>
		</scroll-view> -->
		
<!-- 		<view class="row p-2">
			<view class="span-4 text-center">
				<view class="iconfont icon-VIP py-2"></view>
				1
			</view>
			<view class="span-4 text-center">
				<view class="iconfont icon-VIP py-2"></view>
				1
			</view>			<view class="span-4 text-center">
				<view class="iconfont icon-VIP py-2"></view>
				1
			</view>			<view class="span-4 text-center">
				<view class="iconfont icon-VIP py-2"></view>
				1
			</view>
			<view class="span-4 text-center">
				<view class="iconfont icon-VIP py-2"></view>
				1
			</view>
			<view class="span-4 text-center">
				<view class="iconfont icon-VIP py-2"></view>
				1
			</view>
			<view class="span-4 text-center">
				<view class="iconfont icon-VIP py-2"></view>
				1
			</view>
			<view class="span-4 text-center">
				<view class="iconfont icon-VIP py-2"></view>
				1
			</view>
			<view class="span-4 text-center">
				<view class="iconfont icon-VIP py-2"></view>
				1
			</view>
			<view class="span-4 text-center">
				<view class="iconfont icon-VIP py-2"></view>
				1
			</view> -->
			
			<!-- 顶部选项卡 -->
			<scroll-view scroll-x class="border-bottom scroll-row" style="height: 80rpx;z-index: 9999;" 
			 :scroll-into-view="scrollinto" scroll-with-animation="true">
				<view class="scroll-row-item px-3"
				@tap="changeTab(index)"
				style="height: 80rpx;line-height: 80rpx;" 
				v-for="(item,index) in tabBars" :key="index"
				:class="tabIndex === index ? 'main-text-color bg-dark' : ''"
				:id="'tab'+index">
					<text class="font-md">{{item.name}}</text>
				</view>
			</scroll-view>
			
			<swiper :duration="150" :current="tabIndex" :style="'height:'+scrollH+'px;'" @change="onChangeTab">
				<swiper-item v-for="(item,index) in newsitems" :key="index">
					<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'"
					@scrolltolower="loadmore(index)">
						<!-- <view v-for="i in 100" :key="i">{{i}}</view> -->
						
						<block v-for="(list,listIndex) in item.list" :key="listIndex">
							<!-- 轮播图组件 -->
							<swiper-image v-if="list.type === 'swiper'" :resdata="list.data" />
							
							<!--首页分类 -->
							<template v-else-if="list.type === 'indexnavs'">
								<indexNav :resdata="list.data" />
								<divider />
							</template>
							
							
							<!-- 三图广告 -->
							<template v-else-if="list.type === 'threeAdv'">
								<threeAdv :resdata="list.data" />
								<divider />
							</template>
							
							
							<!-- 大图广告位 -->
							<!-- <card headTitle="每日精选" bodyCover="/static/images/demo/demo4.jpg" /> -->
				
							<!-- 公共列表组件 750-5=745 372.5 -->
							<view class="row j-sb" v-else-if="list.type === 'commonList'">
								<block v-for="(item2,index2) in list.data" :key="index2">
									<common-list :item="item2" :index="index2"></common-list>
								</block>
							</view>
						</block>
						
						<!-- 上拉加载更多 -->
						<divider />
						<view class="d-flex a-center j-center text-light-muted font-md py-3">
							{{item.loadtext}}
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>

		</view>
	</view>
</template>

<script>
	// 模拟后端数据
	let demoTabBars = [{
		name:"关注"
	}, {
		name:"推荐"
	}, {
		name:"体育"
	}, {
		name:"热点"
	}, {
		name:"财经"
	}, {
		name:"娱乐"
	}, {
		name:"军事"
	}, {
		name:"历史"
	}, {
		name:"本地"
	}];
	
	let demo1 = [
	{
		type:"swiper",
		data:[
			{
				src:"../../static/images/demo/demo4.jpg"
			},
			{
				src:"../../static/images/demo/demo4.jpg"
			},
			{
				src:"../../static/images/demo/demo4.jpg"
			}
		]
	},
	{
		type:"indexnavs",
		data:[
			{
				src:"/static/indexnav/1.png",
				text:"新品发布"
			},
			{
				src:"/static/indexnav/2.gif",
				text:"小米众筹"
			},
			{
				src:"/static/indexnav/3.gif",
				text:"以旧换新"
			},
			{
				src:"/static/indexnav/4.gif",
				text:"一分换团"
			},
			{
				src:"/static/indexnav/5.gif",
				text:"超值特卖"
			},
			{
				src:"/static/indexnav/6.gif",
				text:"小米秒杀"
			},
			{
				src:"/static/indexnav/7.gif",
				text:"真心想要"
			},
			{
				src:"/static/indexnav/8.gif",
				text:"电视热卖"
			},
			{
				src:"/static/indexnav/9.gif",
				text:"家电热卖"
			},
			{
				src:"/static/indexnav/10.gif",
				text:"米粉卡"
			}
		]
	},
	{
		type:"threeAdv",
		data:{
			big:{
				src:"/static/images/demo/demo1.jpg"
			},
			smalltop:{
				src:"/static/images/demo/demo2.jpg"
			},
			smallbottom:{
				src:"/static/images/demo/demo2.jpg"
			}
		}
	},
	{
		type:"commonList",
		data:[
			{
				cover:"/static/images/demo/list/1.jpg",
				title:"米家空调",
				desc:"1.5匹变频",
				oprice:2699,
				pprice:1399
			},
			{
				cover:"/static/images/demo/list/1.jpg",
				title:"米家空调",
				desc:"1.5匹变频",
				oprice:2699,
				pprice:1399
			},
			{
				cover:"/static/images/demo/list/1.jpg",
				title:"米家空调",
				desc:"1.5匹变频",
				oprice:2699,
				pprice:1399
			},
			{
				cover:"/static/images/demo/list/1.jpg",
				title:"米家空调",
				desc:"1.5匹变频",
				oprice:2699,
				pprice:1399
			}
		]
	},
	];
	
	let demo2 = [
	{
		type:"swiper",
		data:[
			{
				src:"../../static/images/demo/demo4.jpg"
			},
			{
				src:"../../static/images/demo/demo4.jpg"
			},
			{
				src:"../../static/images/demo/demo4.jpg"
			}
		]
	},
	{
		type:"indexnavs",
		data:[
			{
				src:"/static/indexnav/1.png",
				text:"新品发布"
			},
			{
				src:"/static/indexnav/2.gif",
				text:"小米众筹"
			},
			{
				src:"/static/indexnav/3.gif",
				text:"以旧换新"
			},
			{
				src:"/static/indexnav/4.gif",
				text:"一分换团"
			},
			{
				src:"/static/indexnav/5.gif",
				text:"超值特卖"
			}
		]
	},
	{
		type:"commonList",
		data:[
			{
				cover:"/static/images/demo/list/1.jpg",
				title:"米家空调",
				desc:"1.5匹变频",
				oprice:2699,
				pprice:1399
			},
			{
				cover:"/static/images/demo/list/1.jpg",
				title:"米家空调",
				desc:"1.5匹变频",
				oprice:2699,
				pprice:1399
			},
			{
				cover:"/static/images/demo/list/1.jpg",
				title:"米家空调",
				desc:"1.5匹变频",
				oprice:2699,
				pprice:1399
			},
			{
				cover:"/static/images/demo/list/1.jpg",
				title:"米家空调",
				desc:"1.5匹变频",
				oprice:2699,
				pprice:1399
			}
		]
	},
];
	import swiperImage from "@/components/index/swiper-image.vue";
	import indexNav from "@/components/index/index-nav.vue";
	import threeAdv from "@/components/index/three-adv.vue";
	import card from "@/components/common/card.vue";
	import commonList from "@/components/common/common-list.vue";
	export default {
		components: {
			swiperImage,
			indexNav,
			threeAdv,
			card,
			commonList
		},
		data() {
			return {
				// title: 'Hello',
				// show: true
				scrollinto:"",
				scrollH:500,
				tabIndex:0,
				tabBars:[],
				newsitems:[]
			}
		},
		onLoad() {
			// 获取可视区域高度
			uni.getSystemInfo({
				success: (res) => {
					this.scrollH = res.windowHeight - uni.upx2px(82);
					console.log(this.scrollH)
				}
			})
			// 初始化事件
			this.init();
		},
		methods: {
			// 初始化事件
			init(){
				// 获取顶部选项卡
				this.tabBars = demoTabBars;
				// 根据顶部选项卡生成页面
				let arr = [];
				for (var i = 0;i < this.tabBars.length; i++) {
					let obj = {
						list:[],
						// 1.上拉加载更多 2.加载中... 3.没有更多了
						loadtext:"上拉加载更多"
					}
					// 获取首屏数据
					if (i === 0) {
						obj.list = demo1;
					}
					
					arr.push(obj)
				}
				this.newsitems = arr;
			},
			// 切换选项卡
			changeTab(index){
				if(this.tabIndex === index) {
					return;
				}
				this.tabIndex = index;
				this.scrollinto = 'tab'+index;
				this.addData();
			},
			// 监听滑动列表
			onChangeTab(e){
				this.changeTab(e.detail.current);
			},
			// 加载数据
			addData(){
				// 拿到当前索引
				let index = this.tabIndex;
				// 请求数据库
				this.newsitems[index].list = demo2;
			},
			// 上拉加载更多
			loadmore(index){
				let item = this.newsitems[index];
				// 判断是否处于可加载状态
				if (item.loadtext !== '上拉加载更多') return;
				// 模拟加载
				item.loadtext = '加载中...';
				setTimeout(()=>{
					// 加载数据
					item.list=[ ...item.list, ...demo2];
					// 恢复状态
					item.loadtext = '上拉加载更多';
				},2000)
			}
		}
	}
</script>

<style>
/* 	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	} */
</style>
