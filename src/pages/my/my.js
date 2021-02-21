// pages/my/my.js
import $Tips from '../../utils/tip';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList_1:[
      {pic:'/static/images/17-2x.png',text:'学习积分',size:65},
      {pic:'/static/images/18-2x.png',text:'军汇商城',size:65},
      {pic:'/static/images/17-2x.png',text:'个人简历',size:65,url:"/pages/myPages/personResume/personResume"},
      {pic:'/static/images/18-2x.png',text:'学习提升',size:65},
      {pic:'/static/images/19-2x.png',text:'职业信用',size:65},
      {pic:'/static/images/20-2x.png',text:'良好建议',size:65,url:"/pages/myPages/goodAdvise/goodAdvise"},
      {pic:'/static/images/22-2x.png',text:'就创测评',size:65},
      {pic:'/static/images/23-2x.png',text:'就业测评',size:65},
      {pic:'/static/images/24-2x.png',text:'创业测评',size:65},
      {pic:'/static/images/25-2x.png',text:'报告生成',size:65},
      {pic:'/static/images/26-2x.png',text:'数据分析',size:65},
      {pic:'/static/images/27-2x.png',text:'职业规划',size:65},
    ],
  
    navList_2:[
      {pic:'/static/images/28-2x.png',text:'设置',size:65},
      {pic:'/static/images/29-2x.png',text:'联系客服',size:65},
      {pic:'/static/images/30-2x.png',text:'修改密码',size:65},
      {pic:'/static/images/31-2x.png',text:'退出登陆',size:65},

    ],
    userInfo:{
      name:'肖伟',
      pic:'/static/images/user-head.jpg',
      desc:'勇者不畏惧一切困难！',
      service:'天河员村服务街道办',
      address:'广州天河区员村镇',
      tel:18620840326
    }
  },
  clickHandle(){
    $Tips.toast("敬请期待！")
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