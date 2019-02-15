<template>
	<div class="bangumiloading_page">
		
		<!--周一至周日待更新标题-->
		<div class="menu">
			<Menu @on-select="MenuClick" mode="horizontal" :theme="theme1" active-name="1">
				<MenuItem v-for="(item,index,key) in Menulist" :key="item.key" :name="item.id">
					<Icon type="md-paw" />
					{{item.title}}
				</MenuItem>		
			</Menu>
		</div>

		<div class="timer_box">
			<h1>{{currenttime | dateFormat}}</h1>
		</div>

		<!--周一至周日待更新数据-->
		<div class="weekday_data">
			 <Table  height="410" ref="weekdaydata" :columns="bangumiupdatetitle" :data="bangumiupdatelist"></Table>
		</div>

	</div>
</template>
<script>
export default {
	data() {
		return {
			theme1: 'light',
			currenttime:new Date(),
			//周一至周日待更新
			Menulist:[
				{
					id:"1",
					title:"周一待更"
				},
				{
					id:"2",
					title:"周二待更"
				},
				{
					id:"3",
					title:"周三待更"
				},
				{
					id:"4",
					title:"周四待更"
				},
				{
					id:"5",
					title:"周五待更"
				},
				{
					id:"6",
					title:"周六待更"
				},
				{
					id:"7",
					title:"周日待更"
				},
			],
			//更新数据标题
			bangumiupdatetitle:[
				
					{
                        title: '番剧名称',
                        key: 'bgname',
                    },
                    {
                        title: '状态',
                        key: 'status',
						render:(h,params)=>{
							let statustext="";
							if(params.row.isdirty < params.row.allepisodes){
								statustext="未完结"
							}else {
								statustext="已完结"
							}
							return h('div',{
								style:{
									cursor:'pointer',
								},
								on:{
									click:()=>{

									}
								}
							},statustext)
						}
                    },
                    {
                        title: '已更新',
                        key: 'isdirty',
						align:'center',
						render:(h,params)=>{
							return h('div',{
								style:{
									cursor:'pointer',

								},
								on:{
									click:()=>{

									}
								}
							},params.row.isdirty)
						}
                    },
					{
                        title: '总集数',
                        key: 'allepisodes',
						align:'center'
                    },
					{
						title:'上传更新',
						key:'upload',
						align:'center',
						render:(h,params)=>{
							return h('Icon',{
								props:{
									type:"md-cloud-upload"
								},
								style:{
									cursor:"pointer",
									fontSize:"30px",
									color:"lightblue"
								},
								on:{
									click:()=>{
										
									}
								}

							})
						}
					}
				
			],
			//更新数据
			bangumiupdatelist:[],

		}
	},
	mounted(){
		let _this=this;
		//挂载的时候先请求一次周一的数据
		this.$http.get('/weekdayuploading', {
				params: {
					week: 1
				}
		})
		.then(function (response) {
			_this.bangumiupdatelist=response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
		//调用定时器		
		this.timer=setInterval(function(){
			_this.currenttime=new Date();
		},1000);
		
	},
	beforeDestroy(){
		//销毁前清除定时器
		if(this.timer) {
			clearInterval(this.timer);
		}
	},
	methods:{
		//周一至周日的更新查询
		MenuClick(name){
			let _this=this;
			this.$http.get('/weekdayuploading', {
				params: {
					week: name
				}
			})
			.then(function (response) {
				_this.bangumiupdatelist=response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		
	}
}
</script>

<style lang="less">
	@import '../../../assets/css/base.less';
</style>
<style scoped>
	.bangumiloading_page {
		width:100%;
		height:480px;
	}
	.menu {
		position: fixed;
    	z-index: 1000;
		width: 870px;
	}
	.weekday_data {
		width: 870px;
		height: 410px;
		position: relative;
		top: 80px;
	}
	.timer_box {
		position: absolute;
		top: 60px;
		left: 871px;
		width: 200px;
    	text-align: center;
	}
</style>
