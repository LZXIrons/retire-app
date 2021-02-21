// components/header-top/header-top.js
import $Tips from '../../utils/tip'
import $Func from '../../utils/function.js'
import api from '../../api/api.js'
const App = getApp()
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'shared',
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphonex:false,
    title:'',
    route:'',
    statusBarHeight:"20",//状态栏高度
  },
  lifetimes:{
    attached(){
      this.geStatusBarHeight();
      this.getCurPage()
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    geStatusBarHeight(){
      let h = wx.getSystemInfoSync().statusBarHeight;
      this.setData({
        statusBarHeight:h
      })
    },
    getCurPage(){
      let route = $Func.getCurPage(),title;
      if(route == "/pages/index/index"){
        title = "退役服务通"
      }else if(route == "/pages/service/service"){
        title = "服务"
      }else if(route == "/pages/model/model"){
        title = "就创模范"
      }else if(route == "/pages/my/my"){
        title = "我的"
      }else if(route == "/pages/friendCircle/friendCircle"){
        title = "战友圈"
      }
      this.setData({
        title,
        route
      })
    },
    toSearch(){
      wx.navigateTo({
        url: '/pages/subPages/search/search',
        
      });
        
    }
  }
})
