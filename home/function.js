module.exports =  function CreateList(data) {
    return`<ul>${data.map(elem=> {`<li><h2>${elem.title}</h2><p>${elem.body}</p></li>`})}</ul>`.replaceAll(',','')
}