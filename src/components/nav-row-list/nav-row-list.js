// components/nav-row-list/nav-row-list.js
import $Tips from '../../utils/tip'

Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'shared',
  },
  properties: {
    navList:{
      type:Array,
      value:[]
    },
    columnNum:{
      type:Number,
      value:4
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toNav(e){
      let isBind = e.currentTarget.dataset.isbindevent,
          assortName = e.currentTarget.dataset.text,
          url = e.currentTarget.dataset.url;
      if(isBind){
        isBind && this.triggerEvent("getNavData",{assortName,url})
      }else{
        if(!url) $Tips.toast("敬请期待！")
        wx.navigateTo({
          url,
        });
          
      }
    }
  }
})
