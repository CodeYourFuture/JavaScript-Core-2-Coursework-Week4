// Write your code here
const images = [
    { 'id': '1', 'url': 'https://images.unsplash.com/photo-1634139104613-56ee22e1c0a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1771&q=80'},
    { 'id': '2', 'url': 'https://images.unsplash.com/photo-1482015527294-7c8203fc9828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80' },
    { 'id': '3', 'url': 'https://images.unsplash.com/photo-1510307853572-cd978ae81304?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80' },
    { 'id': '4', 'url': 'https://images.unsplash.com/photo-1512080111770-7e3411c1e613?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80' },
    { 'id': '5', 'url': 'https://images.unsplash.com/photo-1532767551683-39dfc14c40bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80' },
    { 'id': '6', 'url': 'https://images.unsplash.com/photo-1478641396229-e6f88f6e31b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80' },
    { 'id': '7', 'url': 'https://images.unsplash.com/photo-1606035325719-2bda1005a0fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2994&q=80' }
]

let container = document.querySelector('.items')

const loadImages = (images, container) => {
    images.forEach( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'>
            </div>
        `
    })
}

loadImages(images, container)

let items = document.querySelectorAll('.item')

const previous = () => {
    container.appendChild(items[0])
    items = document.querySelectorAll('.item')
}
const next = () =>{
    let lastItem = items[items.length - 1]
    container.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
}

document.getElementById('previous').addEventListener('click', previous)
document.getElementById('next').addEventListener('click', next)


setInterval(previous, 5000)