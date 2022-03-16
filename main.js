let navBtns = document.querySelectorAll(".btn");
let tHead = document.querySelector("#tableHead");
let tBody = document.querySelector("#tableBody");
let headline = document.querySelector(".headline");
let loader = document.querySelector(".loader");

for (let i = 0; i < navBtns.length; i++) {
    navBtns[i].addEventListener("click", getCurrentData);
}

function getCurrentData(e) {
    e.preventDefault();
    loader.style.display = "block";
    let url = this.getAttribute("href");
    getData(url).then(
        (data) => {
            displayData(data);
            loader.style.display = "none";
            headline.innerHTML = this.innerHTML;
        },
        (msg) => {
            console.log(msg);
        }
    );
}

function displayData(data) {
    let text = "<tr>";
    let elementData = "";
    let first = data[0];
     for (const key in first) {
        text += `
        <th>${key}</th>
        `;
    }
     data.forEach(render);

    function render(element) {
        elementData += "<tr>";
        for (const key in element) {
            elementData += `
         <td>${element[key]}</td>
           `;
        }
        elementData += "</tr>";
    }

    // for (let i = 0; i < data.length; i++) {
    //       elementData += "<tr>";
    //     for (const key in data[i]) {
    //         elementData += `
    //      <td>${data[i][key]}</td>
    //        `;
    //     }
    //     elementData += "</tr>";
    // }
    text += "</tr>";
    tHead.innerHTML = text;
    tBody.innerHTML = elementData;
}

