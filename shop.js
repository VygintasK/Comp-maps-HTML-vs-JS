
export default function shopItem(props){
    let {title, phone, mail, mapsUrl, address} = props
    let shop = document.createElement('div')
    shop.classList.add('shop')
    shop.innerHTML = `
    <h3 class="shop-title">${title}</h3>
    <ul class="shop-address-list">
      <li>Phone: <a href="tel:+${phone}">+${phone}</a></li>
      <li>Email: <a href="${mail}">${mail}</a></li>
      <li>Address: <a href="${mapsUrl}" target="_blank">${address}</a></li>
    </ul>
    `
    return shop
}