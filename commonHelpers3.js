import"./assets/main-BqdfBK-g.js";const a=[{name:"Jane Cooper",company:"Microsoft",phone:"(225) 555-0118",email:"jane@microsoft.com",country:"United States",status:"Active"},{name:"Floyd Miles",company:"Yahoo",phone:"(205) 555-0100",email:"floyd@yahoo.com",country:"Kiribati",status:"Inactive"},{name:"Ronald Richards",company:"Adobe",phone:"(302) 555-0107",email:"ronald@adobe.com",country:"Israel",status:"Inactive"},{name:"Marvin McKinney",company:"Tesla",phone:"(252) 555-0126",email:"marvin@tesla.com",country:"Iran",status:"Active"},{name:"Jerome Bell",company:"Google",phone:"(629) 555-0129",email:"jerome@google.com",country:"Réunion",status:"Active"},{name:"Kathryn Murphy",company:"Microsoft",phone:"(406) 555-0120",email:"kathryn@microsoft.com",country:"Curaçao",status:"Active"},{name:"Jacob Jones",company:"Yahoo",phone:"(208) 555-0112",email:"jacob@yahoo.com",country:"Brazil",status:"Active"},{name:"Kristin Watson",company:"Facebook",phone:"(704) 555-0127",email:"kristin@facebook.com",country:"Åland Islands",status:"Inactive"}],e=document.querySelector(".table");console.log(a.length);if(a.length)a.map(t=>{const o=document.createElement("tr");o.innerHTML=`
      <td class="table-text">${t.name}</td>
      <td class="table-text">${t.company}</td>
      <td class="table-text">${t.phone}</td>
      <td class="table-text">${t.email}</td>
      <td class="table-text">${t.country}</td>
      <td class="table-text status"><span class="status-block">${t.status}</span></td>
    `,e.appendChild(o);const n=document.createElement("tr");n.innerHTML=`
    <td colspan="6">
      <div class="linerow"></div>
    </td>
  `,e.appendChild(n)});else{const t=document.createElement("tr");t.innerHTML=`
  <td class="table-text error" colspan="6">There are no customers yet :(</td>
`,e.appendChild(t)}const c=document.querySelectorAll(".status-block");c.forEach(t=>{t.textContent==="Active"?t.classList.add("active"):t.classList.add("inactive")});
//# sourceMappingURL=commonHelpers3.js.map
