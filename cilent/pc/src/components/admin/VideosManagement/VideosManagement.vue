<template>
	<div class="videomanagement_page">
		 <Table height="480" :columns="videotitle" :data="videolist"></Table>
	</div>
</template>
<script>
export default{
	data(){
		return {
			//表格标题
			videotitle:[
				{
					title:'用户名',
					key:'username',
					align:'center'
				},
				{
					title:'视频名',
					key:'videoname',
					align:'center'
				},
				{
					title:'视频链接',
					key:'videosrc',
					align:'center'
				},
				{
					title:'审核',
					key:'action',
					align:'center',
					render:(h,params)=>{
						return h('div',[
							h('Button',{
								props:{
									type:'primary',
									size:'small'
								},
								style:{
										marginRight:"5px"
								},
								on:{
									click:()=>{
										this.showvideo(params.row.videosrc);
									}
								}
							},'查看'),
							h('Button',{
								props:{
									type:'warning',
									size:'small'
								},
								on:{
									click:()=>{
										this.auditvideo(params.row.upvid);
									}
								}
							},'审核')
						])
					}

				}
			],
			//表格数据
			videolist:[
				{
					upvid:1110,
					username:'YQC',
					videoname:'1234',
					videosrc:'../../static/img/xxx.mp4',
					status:1,//审核状态，状态为1待审核，状态为2审核成功，状态为3审核不通过
				},
				{
					upvid:1111,
					username:'QQ',
					videoname:'5678',
					videosrc:'../../static/img/xxx.mp4',
					status:1,
				}
			]
		}
	},
	methods:{
		//查看视频
		showvideo(videosrc){

		},
		//审核视频
		auditvideo(upvid){

		}

	}
}
</script>

<style scoped>
	.videomanagement_page {
		width:840px;
		height:480px;
		position:relative;
	}
</style>