let bttn = document.querySelector(".box button");
// load tha data from local storage
let data = loadData();
if (data != null) {
    data.forEach(element => {
        let div = document.createElement("div");
        let p = document.createElement("p");
        let btton = document.createElement("button");
        p.textContent = element;
        btton.textContent = "Delete";
        div.append(p, btton);
        document.body.appendChild(div);
        btton.addEventListener("click", (e) => {
            removeItem(p.textContent);
            div.remove();
        });

    });
}

// stop the sumbiton action 
document.forms[0].onsubmit = (e) => {
    e.preventDefault();
};


// add event listner on the button to create elements
bttn.addEventListener("click", () => {

    let text = document.querySelector(".box input").value;
    let div = document.createElement("div");
    let p = document.createElement("p");
    let btton = document.createElement("button");
    if(text !=""){
    p.textContent = text;
    btton.textContent = "Delete";
    div.append(p, btton);
    document.body.appendChild(div);
    addData(text);
    document.querySelector(".box input").value = "";  //to make the input field empty after add a card
    btton.addEventListener("click", (e) => {
        removeItem(p.textContent);
        div.remove();
    });
}

});

function addData(item) {
    let data = JSON.parse(localStorage.getItem("data", "[]"));
    if (data == null) {
        data = []
    }
    data.push(item);

    localStorage.setItem("data", JSON.stringify(data));
}
function removeItem(item) {
    let data = JSON.parse(localStorage.getItem("data", "[]"));
    let index = data.indexOf(item);
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
}
function loadData() {
    let data = JSON.parse(localStorage.getItem("data", "[]"));
    return data;
}