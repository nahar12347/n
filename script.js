fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('rate-table-body');
    tableBody.innerHTML = '';

    data.forEach(item => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${item.size}</td>
        <td>₹${item.price}</td>
        <td>${item.date}</td>
      `;

      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error loading data:", error);
  });
