async function llenartablita()
{
    response = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await response.json()
    let cuerpito = "";
    const cuerpo = document.getElementById("cuerpo");

    data.forEach(element => {
        /*
        cuerpito += `<tr><td>${element.id}</td>
                        <td>${element.name}</td>
                         <td>${element.username}</td>
                         <td>${element.email}</td>
                         <td>${element.phone}</td></tr>`
                         */
        let fila = document.createElement("tr");        
        let cid = document.createElement("td");
        cid.textContent = element.id;
        let cname = document.createElement("td");        
        cname.textContent = element.name;
        let cusername = document.createElement("td");
        cusername.textContent = element.username;
        let cemail = document.createElement("td");
        cemail.textContent = element.email;
        let cphone = document.createElement("td");
        cphone.textContent = element.phone;
        fila.appendChild(cid);
        fila.appendChild(cname);
        fila.appendChild(cusername);
        fila.appendChild(cemail);
        fila.appendChild(cphone);
        cuerpo.appendChild(fila);

    }); 
    
//document.getElementById("cuerpo").innerHTML= cuerpito;
    
  }

llenartablita();
