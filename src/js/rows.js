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
    <td class="table-text status"><span class="status-block">${customer.status}</span></td>
  `;

  table.appendChild(row);

  const lineRow = document.createElement("tr");

  lineRow.innerHTML = `
  <td colspan="6">
    <div class="linerow"></div>
  </td>
`;

  table.appendChild(lineRow);
});

const statuses = document.querySelectorAll(".status-block");

statuses.forEach((status) => {
  if (status.textContent === "Active") {
    status.classList.add("active");
  } else {
    status.classList.add("inactive");
  }
});
