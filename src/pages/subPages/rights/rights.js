// pages/subPages//rights/rights.js
//获取应用实例
import $Tips from '../../../utils/tip'
import $Func from '../../../utils/function.js'
import api from '../../../api/api.js'
import listProjectBehavior from "../../../behaviors/listProject-behavior"
Page({
  behaviors: [listProjectBehavior],

  /**
   * 页面的初始数据
   */
  data: {
    navList: [
      {
        pic: '/static/images/43-2x.png', text: '政策查询', desc: '根据区域、身份、立功受奖等条件精准查询出符合条件的政策信息',
        url: "/pages/servicePages/workPolicy/workPolicy",isBindevent:true
      },
      {
        pic: '/static/images/44-2x.png', text: '智能匹配', desc: '根据您的个人信息、区域、身份、立功受奖等信息智能地推荐符合您的职业',
        url: "/pages/subPages/smartMatch/smartMatch",isBindevent:false
      },
      {
        pic: '/static/images/45-2x.png', text: '复转手续', desc: '复员是一种正常退出现役的途径。正常一般有三种情况，即转业、退休和复员',
        url: "/pages/subPages/returnProcess/returnProcess", dot:true
      },
      {
        pic: '/static/images/46-2x.png', text: '精准对接', desc: '持续服务机构/人员与退役军人用户对接',
        url: "/pages/subPages/accurateLink/accurateLink"
      },

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