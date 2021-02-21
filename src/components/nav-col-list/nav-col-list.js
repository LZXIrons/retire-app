// components/nav-col-list/nav-col-list.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'apply-shared',
  },
  properties: {
    navList:{
      type:Array,
      value:[]
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
        wx.navigateTo({
          url,
        });
          
      }
    }
  }
})
