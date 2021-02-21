// pages/subPages//educateTrain/educateTrain.js
import api from '../../../api/api.js'
import listProjectBehavior from "../../../behaviors/listProject-behavior"
const App = getApp()

Page({
  behaviors: [listProjectBehavior],
  
  /**
   * 页面的初始数据
   */
  data: {
    articleList1:[
      {
        pic: '/static/images/6-2x.png', text: '广州市退役军人职业技能学习——办公技巧...', source: '退役军人就业网',price:100,
        url: "/pages/subPages/rights/rights"
      },
      {
        pic: '/static/images/6-2x.png', text: '广州市退役军人职业技能学习——办公技巧...', source: '退役军人就业网',
        url: "/pages/subPages/rights/rights"
      },
    ],
    articleList2:[
      {
        pic: '/static/images/6-2x.png', text: '广州市退役军人职业技能学习——办公技巧...', source: '退役军人就业网',price:100,
        url: "/pages/subPages/rights/rights"
      },
      {
        pic: '/static/images/6-2x.png', text: '广州市退役军人职业技能学习——办公技巧...', source: '退役军人就业网',
        url: "/pages/subPages/rights/rights"
      },
    ],
    articleList3:[
      {
        pic: '/static/images/6-2x.png', text: '退役军人就业网',size:90,
        url: "/pages/subPages/rights/rights"
      },
      {
        pic: '/static/images/6-2x.png', text: '退役军人就业网',size:90,
        url: "/pages/subPages/rights/rights"
      },
      {
        pic: '/static/images/6-2x.png', text: '退役军人就业网',size:90,
        url: "/pages/subPages/rights/rights"
      },
      {
        pic: '/static/images/6-2x.png', text: '退役军人就业网',size:90,
        url: "/pages/subPages/rights/rights"
      },
      {
        pic: '/static/images/6-2x.png',  text: '退役军人就业网',size:90,
        url: "/pages/subPages/rights/rights"
      },
      {
        pic: '/static/images/6-2x.png', text: '退役军人就业网',size:90,
        url: "/pages/subPages/rights/rights"
      },
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