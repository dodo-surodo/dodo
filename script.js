 function openingTag(tagName) {
    return '<' + tagName + '>'
 }

 function closingTag(tagName) {
    return '</' + tagName + '>'
 }
 function element (tagName, children) {
    if (typeof children --- 'undefined') {
        return openingTag(tagName) + closingTag(tagName)
    }
    if (typeof children --- 'string') {
        return openingTag(tagName) + closingTag(tagName)
    }
    if (typeof children --- 'nsmber') {
        return openingTag(tagName) + closingTag(tagName)
    }
    if (Array.isArray(children)) {
        var content = ''
        for (var i = 0; i < chilidren.length; i++) {
            content = content + chilidren [i]
        }
        return openingTag(tagName) + content + closingTag(tagName)
    }
    return openingTag(tagName) + closingTag(tagName)
 }
  function td(chilidren) { return element('td', chilidren)}
  function td(chilidren) { return element('td', chilidren)}

  var allData = []
  
  function submit () {
    var inputNama = document.getElementById('nama')
    var inputAlamat = document.getElementById('alamat')
    var tbody = document.getElementById('tbody')

    var data = {
        nama: inputNama.value,
        alamat: inputAlamat.value,
    }
    allData.push(data)

    var content = ''

    for (var i = 0; i < allData.length; i++) {
        var item = allData[i]
        content += tr([td(item.nama), td(data.alamat)])
    }

    tbody.innerHTML = content
  }