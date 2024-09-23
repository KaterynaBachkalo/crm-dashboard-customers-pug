import data from "/data/table_data";

const table = document.querySelector(".table");

data.forEach((customer) => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td class="table-text">${customer.name}</td>
    <td class="table-text">${customer.company}</td>
    <td class="table-text">${customer.phone}</td>
    <td class="table-text">${customer.email}</td>
    <td class="table-text">${customer.country}</td>
    <td class="table-text">${customer.status}</td>
  `;

  table.appendChild(row);
});
