export default function mapWrapper(props){
    let {mapUrl, width, hight } = props
    let mapWrap = document.createElement('div')
    mapWrap.classList.add('map-wrapper')
    mapWrap.innerHTML=`
    <iframe src="${mapUrl}" width="${width}" height="${hight}" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `


    return mapWrap
}