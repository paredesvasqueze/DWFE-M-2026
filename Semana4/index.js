async function llenartablita()
{
    response = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await response.json()

    let cuerpito = "";

    data.forEach(element => {
        cuerpito += `<tr><td>${element.id}</td>
                        <td>${element.name}</td>
                         <td>${element.username}</td>
                         <td>${element.email}</td>
                         <td>${element.phone}</td></tr>
        `});
    
    document.getElementById("cuerpo").innerHTML= cuerpito;
    
}

llenartablita();
