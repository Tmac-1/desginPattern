import Item from './item';

// 工厂函数
export default function (list,itemData){
    return new Item(list,itemData)
}