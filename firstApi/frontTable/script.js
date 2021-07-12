//POST Method
function toPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
        alert("Opa! Dados gravados com sucesso!")
        location.reload();
    }

    return request.responseText
}


function cadastraUsuario() {
    event.preventDefault()
    let url = "http://localhost:8080/product/"
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    console.log(name)
    console.log(price)

    body = {
        "name": name,
        "price": price
    }

    toPost(url, body)
}


    function toGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function createLine(product) {
    console.log(product)

    tableBody = document.createElement("tbody");

    line = document.createElement("tr");
    tdId = document.createElement("td");
    tdname = document.createElement("td");
    tdId.innerHTML = product.name
    //mudar!
    tdname.innerHTML = "R$: " + product.price + ",00"

    line.appendChild(tdId);
    line.appendChild(tdname);

    tableBody.appendChild(line);

    return line;
}

function main() {
    let data = toGet("http://localhost:8080/product/");
    let products = JSON.parse(data);
    let table = document.getElementById("table");
    products.forEach(element => {
        let line = createLine(element);
        table.appendChild(line);
    });
}

function limparCampos(){
    document.getElementById("form").reset();
}

main()
limparCampos()