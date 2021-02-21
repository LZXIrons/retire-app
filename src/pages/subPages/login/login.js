// pages/subPages//login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:false,
    // userId: this.$getStore('uuid'),
    phoneNum:'',
    password:'',
    disabled:false, //验证码按钮是否禁止点击
    codeLogin:false,
    codename:'获取验证码',
    codeNum:'',
  },
  async submitForm(e){
    let phoneNum = e.detail.value.phoneNum;
    let loginPassword = e.detail.value.password;
    let codeNum = e.detail.value.code;
    if(!phoneNum){
      this.$Tips.toast("请输入手机","none")
    }else{
      if(!this.codeLogin && !loginPassword){
        this.$Tips.toast("请输入密码","none")
        return
      }else if(this.codeLogin && !codeNum){
        this.$Tips.toast("验证码不能为空", "none")
        return
      }
      const res = await api.LoginByPhone({
        query:{
          phone:phoneNum,
          loginPassword:loginPassword || '',
          verifyCode:codeNum || '',
          loginType:this.codeLogin?2:1
        }
      })
      if(res.code == 0){
        let data = res.data;
        this.$setStore("userInfo", data);
        this.$setStore("token", data.token);
        this.$setStore("uuid", data.user.id);
        this.LOGIN(true);
        uni.reLaunch({
          url:'/pages/my'
        })
      }else{
        this.$Tips.toast(res.msg)
      }
    }
  },
  //获取手机验证码
  async getVerifyCode() {
    let phone = this.phoneNum;
    if (!this.$isMobile(phone)) {
      this.$Tips.toast("请输入正确手机号码", "none")
      return
    } 
    const res = await api.sendSms({
      query: {
        phone
      }
    })
    if(res.code == 0){
      this.$Tips.toast("短信已发送", "none");
      let num = 301, that = this;
      let timer = setInterval(function() {
        num--;
        if (num <= 0) {
          clearInterval(timer);
          that.codename = "重新发送";
          that.disabled = false;
        } else {
          that.codename = num + "s"
        }
      }, 1000)
      this.disabled = true;
    }else{
      this.$Tips.toast(res.msg, "none");
    }
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