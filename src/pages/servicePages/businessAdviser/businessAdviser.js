import api from '../../../api/api.js'
import dropDownItemBehavior from "../../../behaviors/dropDown-item-behavior.js"
const App = getApp()

Page({
  behaviors: [dropDownItemBehavior],

  /**
   * 页面的初始数据
   */
  data: {
    navTit:[
      {
        title: '区域',
        option: App.globalData.area,
        result:'',
        type:'areaList'
      }, 
    ],
    itemList:[
      {title:"支持退伍军人创业资金",time:"2012-12-12 11:11",address:"广州市-海珠区",qualifications:"本科",price:"6000-1000",pic:"/static/images/43-2x.png",company:"中国建设银行广州分行",tag:["服务机构"]},
      {title:"支持退伍军人创业资金",time:"2012-12-12 11:11",address:"广州市-海珠区",qualifications:"本科",price:"6000-1000",pic:"/static/images/43-2x.png",company:"中国建设银行广州分行",tag:["服务机构"]},
      {title:"支持退伍军人创业资金",time:"2012-12-12 11:11",address:"广州市-海珠区",qualifications:"本科",price:"6000-1000",pic:"/static/images/43-2x.png",company:"中国建设银行广州分行",tag:["服务机构"]},
      {title:"支持退伍军人创业资金",time:"2012-12-12 11:11",address:"广州市-海珠区",qualifications:"本科",price:"6000-1000",pic:"/static/images/43-2x.png",company:"中国建设银行广州分行",tag:["服务机构"]}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let categoryId = options.categoryId;
    this.setData({
      categoryId,
    });
    this.searchArticleList();
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