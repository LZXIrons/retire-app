import Store from "./store.js";
export default new Store({
  state: {
    //以下为自定义的全局状态，用法和页面中的data: {...} 一致。
    msg: 'Mini Store',
    user: {
      name: 'Leisure'
    },

    counter: 0
  },
  methods: {
    goAnyWhere(e) {
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      })
    },
	HELLO(){
		console.log("HELLO")
	}
  },
  pageListener: {
    onLoad(options) {
      console.log('我在' + this.route, '参数为', options);
    },
    onHide() {
      console.log('lalala')
    },
    onShareAppMessage(res){
      return {
        title: '全局分享',
        path: '/pages/index/index'
      }
    }
  },
  // 开启了局部模式
  openPart: false
})