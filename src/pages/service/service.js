// pages/service/service.js
import api from '../../api/api.js'
import listProjectBehavior from "../../behaviors/listProject-behavior"
const App = getApp()

Page({
  behaviors: [listProjectBehavior],

  /**
   * 页面的初始数据
   */
  data: {
    navList_1:[
      {pic:'/static/images/32-2x.png',text:'权益优抚',size:65,url:"/pages/servicePages/workPolicy/workPolicy",isBindevent:true},
      {pic:'/static/images/33-2x.png',text:'我要就业',size:65,url:"/pages/servicePages/seekWork/seekWork",isBindevent:false},
      {pic:'/static/images/34-2x.png',text:'机构招募',size:65,url:"/pages/servicePages/groupRecruit/groupRecruit",isBindevent:false},
      {pic:'/static/images/35-2x.png',text:'转岗咨询',size:65,url:"/pages/servicePages/workTransformCounsel/workTransformCounsel",isBindevent:false},
      {pic:'/static/images/36-2x.png',text:'职场资讯',size:65,url:"/pages/servicePages/workInfo/workInfo",isBindevent:false},
    ],
    navList_2:[
      {pic:'/static/images/37-2x.png',text:'官方推荐',size:65,url:"/pages/servicePages/officialRecommend/officialRecommend",isBindevent:false},
      {pic:'/static/images/38-2x.png',text:'我要支持',size:65,url:"/pages/servicePages/projectSupport/projectSupport",isBindevent:false},
      {pic:'/static/images/39-2x.png',text:'企业服务',size:65,url:"/pages/servicePages/businessService/businessService",isBindevent:false},
     
    ],
    
    navList_3:[
      {pic:'/static/images/40-2x.png',text:'培训教育',size:65,url:"/pages/subPages/educateTrain/educateTrain",isBindevent:false},
     
    ],
  },
  async getNavDataList(e) {
    let assortName = e.detail.assortName,
        url = e.detail.url;
    await this.getContentCategoryList(assortName);
    wx.navigateTo({
      url:url + '?categoryId=' + this.data.categoryId,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})