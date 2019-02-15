<template>
	<div class="commentsmanagement_page">
		 <Table height="480" :columns="commentstitle" :data="commentslist"></Table>
	</div>
</template>

<script>
export default{
	data(){
		return {
			//表格标题
			commentstitle:[
				{
					title:'用户名',
					key:'username',
					align:'center'
				},
				{
					title:'番剧名',
					key:'bgname',
					align:'center'
				},
				{
					title:'集数',
					key:'episodes',
					align:'center'
				},
				{
					title:'评论内容',
					key:'commentstext',
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
										this.showcomments(params.row.commentstext);
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
										this.auditcomments(params.row.cid);
									}
								}
							},'审核')
						])
					}

				}
			],
			//表格数据
			commentslist:[
				{
					cid:2220,
					username:'YQC',
					bgname:'刀剑神域',
					episodes:'2',
					commentstext:'1223213546741232',
					status:1,//审核状态，状态为1待审核，状态为2审核成功，状态为3审核不通过
				},
				{
					cid:2221,
					username:'QQ',
					bgname:'刀剑神域',
					episodes:'2',
					commentstext:'dfdfsdfsfddadad',
					status:1,
				}
			]
		}
	},
	methods:{
		//查看视频
		showcomments(videosrc){

		},
		//审核视频
		auditcomments(cvid){

		}

	}
}
</script>

<style scoped>
	.commentsmanagement_page {
		width:840px;
		height:480px;
		position:relative;
	}
</style>