import $ from 'jquery';
import createItem from './createItem.js';
export default class List {
    constructor(app){
       this.app = app;
       this.$el = $('<div>')
    }
    // 获取数据
    loadData(){
        const data = [{
            "id":1,
            "name":"《js 面试题》1",
            "price":189,
            "discount":1
        },{
            "id":2,
            "name":"《js 面试题》2",
            "price":189,
            "discount":1
        },{
            "id":2,
            "name":"《js 面试题》3",
            "price":189,
            "discount":0
        },{
            "id":2,
            "name":"《js 面试题》4",
            "price":189,
            "discount":0
        }]
        return new Promise((resolve,reject)=>{
            resolve(data)
        })

    }
    // 生成列表
    initItemList(data){
       data.forEach(itemData =>{
           //创建一个 Item 然后init
            let item = createItem(this,itemData);
            item.init()
       })
    }
    // 渲染
    render(){
        this.app.$el.append(this.$el)
    }
    init(){
       this.loadData().then(data =>{
           this.initItemList(data)
       }).then(()=>{
           this.render()
       })
    }
}