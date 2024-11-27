let tbody = document.querySelector("tbody");
let addBtn = document.querySelector(".addbtn");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone");

async function getData() {
  let response = await fetch("http://localhost:3000/details");
  let data = await response.json();
  console.log(data);
  data.forEach((detail) => {
    let tr = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdName = document.createElement("td");
    let tdEmail = document.createElement("td");
    let tdPhone = document.createElement("td");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    tdName.textContent = detail.name;
    tdEmail.textContent = detail.email;
    tdPhone.textContent = detail.phone;
    editBtn.textContent = "Edit";
    editBtn.classList = "edit-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.classList = "delete-btn";

    tbody.append(tr);
    tr.append(tdName, tdEmail, tdPhone, editBtn, deleteBtn);

    deleteBtn.addEventListener("click", async () => {
      await fetch(`http://localhost:3000/details/${detail.id}`, {
        method: "DELETE",
      });
    });

    editBtn.addEventListener("click", async (e) => {});
  });
  addBtn.addEventListener("click", async (e) => {
    //   e.preventDefault();
    let name = nameInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;
    let newUser = {
      name,
      email,
      phone,
    };
    let response = await fetch("http://localhost:3000/details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
  });
}
getData();
