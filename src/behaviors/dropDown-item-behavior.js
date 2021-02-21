// my-behavior.js
import $Tips from '../utils/tip'
import $Func from '../utils/function.js'
import api from '../api/api.js'
import listProjectBehavior from "/listProject-behavior.js"


const App = getApp()

module.exports = Behavior({
    behaviors: [listProjectBehavior],
    properties: {
       
    },
    data: {
      mainActiveIndex: 0,
      activeId: 0,
      dropItem:{id:'',toggle:false},
      windowFixed:false
    },
    created: function () {
        console.log('[my-behavior] created')
    },
    attached: function () {
        console.log('[my-behavior] attached')
    },
    ready: function () {
        console.log('[my-behavior] ready')
    },

    methods: {
      
      checkboxChange(e) {
        console.log(e);
        let index = e.currentTarget.dataset.navindex,
            result = 'navTit[' + index + '].result';
        this.setData({
          [result]:e.detail
        })
      },

      checkboxToggle(e) {
        const { index } = e.currentTarget.dataset;
        const checkbox = this.selectComponent(`.checkboxes-${index}`);
        checkbox.toggle();
      },

      splitLabel(){
        let data = this.data.navTit,label='',arr=[];
        data.forEach(item =>{
          item.result && arr.push(item.result);
          arr && (label = arr.join())
        });
       this.setData({
        label
       })
      },

      async confirmBtn(e) {
        let index = e.currentTarget.dataset.item;
        let item = this.selectComponent(`#item_${index}`);
        this.setData({
          articleList: [],
          isComplete: false,
          isEmpty: false,
          page: 1,
      })
        this.splitLabel();
        this.searchArticleList();
        item.toggle();
      },
      
      cancelfirmBtn(e){
        let index = e.currentTarget.dataset.item;
        let result = 'navTit[' + index + '].result';
        this.setData({
          [result]:'',
          mainActiveIndex: 0,
          activeId: 0,
        })
      },

      noop() {},
    
      onClickNav({ detail = {} }) {
        console.log(detail)
        this.setData({
          mainActiveIndex: detail.index || 0,
        });
      },
    
      onClickItem(e) {
        console.log(e)
        let index = e.currentTarget.dataset.navindex,
            activeId = e.detail.id,
            identity = e.detail.text,
            result = 'navTit[' + index + '].result';
        this.setData({ 
          activeId, 
          [result]:identity
        });
      },

      openHandle(e){
        let id = e.currentTarget.id,
            toggle = 'dropItem.toggle',
            itemId = 'dropItem.id';
        this.setData({
          [itemId]:id,
          [toggle]:true,
          windowFixed:true
        })
      },

      closeHandle(e){
        let  toggle = 'dropItem.toggle';
        this.setData({
          [toggle]:false,
          windowFixed:false
        })
      },

      buttonHandle(){
        $Tips.toast("敬请期待！")
      },

      async onPageScroll(e){
        // console.log(e.scrollTop)
        // let isSticky= e.scrollTop >= 200 ? true : false;
        // if(this.data.isNavSticky) return //吸附状态不重复调用setData
        // this.setData({
        //   isNavSticky: isSticky
        // })
        // let toggle = this.data.dropItem.toggle;
        // if(!toggle) return
        // let id = this.data.dropItem.id;
        // let item = this.selectComponent(`#${id}`);
        // console.log(item)
        // item && item.toggle(false);
      
    },
      

    }
})