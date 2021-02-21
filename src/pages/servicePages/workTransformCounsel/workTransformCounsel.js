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

      {
        title: '就业模范',
        option: App.globalData.area,
        result:'',
        type:'areaList'
    }, 
      {
        title: '个人号',
        option:[
          {
            // 导航名称
            text: '士兵',
            // 该导航下所有的可选项
            children: [
              { text: '不限',id: 0,},
            ],
          },
          {
            // 导航名称
            text: '士官',
            // 该导航下所有的可选项
            children: [
              { text: '不限',id: 0,},
            ],
          },
          {
            // 导航名称
            text: '专业军官',
            // 该导航下所有的可选项
            children: [
              { text: '不限',id: 0,}, { text: '自主择业',id: 1,}, { text: '政府安置',id: 2,},
            ],
          },
        ],
        result:'',
        type:'treeSelect'
    }, 
      {
        title: '全部',
        option: [{ text: '一等功',value: 0},{ text: '二等功',value: 1},{ text: '三等功',value: 2}],
        result:'',
        type:'checkBox'
    }, 
    {
      title: '发布时间',
      option:[ 
        { text: '一等伤残',value: 0},{ text: '二等伤残',value: 1},{ text: '三等伤残',value: 2},{ text: '四等伤残',value:3},{ text: '五等伤残',value: 4},
        { text: '六等伤残',value: 5},{ text: '七等伤残',value: 6},{ text: '八等伤残',value: 7},{ text: '九等伤残',value: 8},{ text: '十等伤残',value: 9},
      ],
      result:'',
      type:'checkBox'
    },
    ],
    itemList:[
      {title:"餐饮加盟",time:"2012-12-12 11:11",address:"广州",qualifications:"本科",price:"6000-1000",pic:"/static/images/43-2x.png",company:"广州公司",tag:["10强品牌","行业领先"]},
      {title:"餐饮加盟",time:"2012-12-12 11:11",address:"广州",qualifications:"本科",price:"6000-1000",pic:"/static/images/43-2x.png",company:"广州公司",tag:["10强品牌","行业领先"]},
      {title:"餐饮加盟",time:"2012-12-12 11:11",address:"广州",qualifications:"本科",price:"6000-1000",pic:"/static/images/43-2x.png",company:"广州公司",tag:["10强品牌","行业领先"]},
      {title:"餐饮加盟",time:"2012-12-12 11:11",address:"广州",qualifications:"本科",price:"6000-1000",pic:"/static/images/43-2x.png",company:"广州公司",tag:["10强品牌","行业领先"]}
    ]
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