// my-behavior.js
import $Tips from '../utils/tip'
import $Func from '../utils/function.js'
import api from '../api/api.js'
const computedBehavior = require('miniprogram-computed').behavior
const App = getApp()

module.exports = Behavior({
    behaviors: [computedBehavior],
    properties: {
       
    },
    computed: {
        areaArray(data) {
          return data.selectArea.split(',')
        },
    },
    data: {
		baseImgUrl: App.globalData.baseImgUrl, //图片地址
        areaList: App.globalData.area, //省市区数据
        articleList: [],    //文章列表
        categoryId: '',     //分类id
        selectArea: '',     //选择的区域
        label: '',          //标签
        page: 1,            //分页
        keyWord: '',        //关键词
        isComplete: false, //列表全部加载完毕
        showPopup: false,   //是否显示弹窗
        navIndex:0,        //当前栏目索引
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
        closePopup() {
            this.setData({ showPopup: false });
            this.selectComponent("#area").reset()
        },

        async areaNavHandle() {
            this.setData({ showPopup: true })
        },

        async changeNav(e) {
            console.log(e)
            // 关闭弹窗
            let id = this.data.dropItem && this.data.dropItem.id, item ='';
            if(id){
                item = this.selectComponent(`#${id}`);
                console.log(item)
                item && item.toggle(false);
            }
            let assortName = e.detail.title, keyWord = '';
            this.setData({
                articleList: [],
                isComplete: false,
                isEmpty: false,
                isRender:false,
                page: 1,
                keyWord,
                navIndex:e.detail.index
            })
            let tabs = this.selectComponent('#tabs');
            tabs && tabs.resize();
            await this.getContentCategoryList(assortName);
            await this.searchArticleList();
        },

        async getContentCategoryList(assortName) {
            const res = await api.getContentCategoryList({
                query: {
                    assortName
                },
            })
            let categoryId = '';
            res.length && (categoryId = res[0].id);
            this.setData({
                categoryId
            })
            return res
        },

        async searchArticleList() {
            
            const res = await api.searchArticleList({
                query: {
                    categoryId: this.data.categoryId,
                    area: this.data.areaArray[2],
                    label: this.data.label,
                    page: this.data.page,
                    keyWord: this.data.keyWord,
                    limit: 10,
                },
            });
            let data = res.data,
                totalCount = res.count,
                curList = this.data.articleList,
                isEmpty = false;
            !data.length && (isEmpty = true);
            this.setData({
                totalCount,
                isEmpty,
                isRender:true,
                articleList: curList.concat(data)
            })
        },

        selectAreaHandle(e) {
            let detail = e.currentTarget.id
            let node = this.selectComponent('#item_area');
            let data = e.detail.values, strValues = [];
            node && node.toggle()
            data.forEach(item => {
                strValues.push(item.name);
            })
            this.setData({
                selectArea: strValues.join(),
                showPopup: false,
                articleList: [],
                isComplete: false,
                isEmpty: false,
                page: 1,
            })
            this.searchArticleList()
        },
        
        cancleAreaHandle(e) {
            this.selectComponent('#area').reset();
            this.setData({
                showPopup: false,
                selectArea: ''
            })
            this.searchArticleList()
        },

        buttonHandle(){
            $Tips.toast("敬请期待！")
          },
    }
})