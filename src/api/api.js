import { $post, $get } from '../utils/wxRequest.js'
// import wxRequest from '../utils/wxRequest.js'


//区域接口
const findByParentId = (params) => $post(params,'/api/area/findByParentId',false);
//获取文章详情
const getArticleDetail = (params) => $post(params,'/api/article/detail');
//搜索文章
const searchArticleList = (params) => $post(params,'/api/article/search');
//分类配置列表
const getContentCategoryList = (params) => $post(params,'/api/contentCategory/getContentCategoryList',false);
export default {
	findByParentId,
	getArticleDetail,
	searchArticleList,
	getContentCategoryList
}
