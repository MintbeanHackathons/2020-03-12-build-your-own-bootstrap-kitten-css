import "byob-css";

let navs = Array.from(document.getElementsByTagName('nav'))
navs.forEach(n => {
    let children = Array.from(n.childNodes)
    children.forEach(c => {
        if(c.nodeName === 'A'){
            c.tabIndex = '0'
        }
    })
})
