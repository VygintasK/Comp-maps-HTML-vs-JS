import shopItem from "./shop.js"
import shopsObjArr from "./shopsOBJ.js"

export default function shopList(){

    let list = document.createElement('div')
    list.classList.add('shops-list')

    shopsObjArr.forEach(shopObj => {
        list.append(shopItem(shopObj))
    });

    return list
}
