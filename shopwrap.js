import shopList from "./shoplist.js"

export default function shopWrapper(props){
    let {title } = props
    let shopwrap = document.createElement('div')
    shopwrap.classList.add('shops-wrapper')
    shopwrap.innerHTML = `
    <h2 class="shop-title">${title}</h2>
    `
    shopwrap.append(shopList())
    return shopwrap
}