// pages/subPages//hotSpotPolicy/hotSpotPolicy.js
import api from '../../../api/api.js'
import dropDownItemBehavior from "../../../behaviors/dropDown-item-behavior.js"
const App = getApp()

Page({
  behaviors: [dropDownItemBehavior],

  /**
   * 页面的初始数据
   */
  data: {
    navTit: [
      { title: "推荐" },
      { title: "最新" },
      { title: "最热" },
    ],
    specialNavTit:[
      {
        title: '区域',
        option: App.globalData.area,
        result:'',
        type:'areaList'
      }, 
    ],
  },



  toDetail(e) {
    let yitem = e.currentTarget.dataset.yitem;
    wx.navigateTo({
      url: '/pages/subPages/articleDetail/articleDetail?id=' + yitem.id,
    });
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
    let total = this.data.totalCount, length = this.data.articleList.length;
    if (length < total) {
      this.data.page += 1;
      this.searchArticleList()
    } else {
      this.setData({
        isComplete: true
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})