module.exports =  function CreateList(data) {
    return`<h1>Posts</h1><ul>${data.map(elem=> `<li><h2>${elem.title}</h2><p>${elem.body}</p></li>`)}</ul>`.replaceAll(',','')
}