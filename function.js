
module.exports =  function ListCreate(data) {
    return`<ul>${data.map(elem => `<li>${elem.name}</li>`)}</ul>`.replaceAll(',','')
}