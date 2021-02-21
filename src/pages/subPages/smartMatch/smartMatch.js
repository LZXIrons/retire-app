// pages/subPages//smartMatch/smartMatch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    optList:[
      { options:["士兵","士官","转业军官"],result:'',title:'您的身份是'},
      { options:["一等功","二等功","三等功","无"],result:'',title:'您是否获得过功勋'},
      { options:["一级伤残证","二级伤残证","三级伤残证","无"],result:'',title:'您在服役中是否有过负伤'}
    ],

  },
  choiceType(e){
    let index = e.currentTarget.dataset.index,
        v = e.detail.value,
        result = 'optList[' + index + '].result',
        value = this.data.optList[index].options[v];
    this.setData({
      [result]:value,
    })
  },
  toList(){
    let list = this.data.optList,arr = [],label='';
    list.forEach(item =>{
      arr.push(item.result)
    })
    label = arr.join();
    wx.navigateTo({
      url: '/pages/subPages/smartMatchList/smartMatchList?label=' + label,
    })
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