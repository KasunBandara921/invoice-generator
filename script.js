document.addEventListener("DOMContentLoaded", () => {
  const addItemBtn = document.getElementById("add-item");
  const itemNameInput = document.getElementById("item-name");
  const itemQtyInput = document.getElementById("item-qty");
  const itemPriceInput = document.getElementById("item-price");
  const invoiceBody = document.getElementById("invoice-body");
  const grandTotalDisplay = document.getElementById("grand-total");

  let grandTotal = 0;

  addItemBtn.addEventListener("click", () => {
    const name = itemNameInput.value.trim();
    const qty = parseInt(itemQtyInput.value);
    const price = parseFloat(itemPriceInput.value);

    if (!name || isNaN(qty) || isNaN(price)) return;

    const total = qty * price;
    grandTotal += total;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="p-2">${name}</td>
      <td class="p-2">${qty}</td>
      <td class="p-2">${price.toFixed(2)}</td>
      <td class="p-2 font-semibold text-green-400">${total.toFixed(2)}</td>
    `;
    invoiceBody.appendChild(row);

    grandTotalDisplay.textContent = grandTotal.toFixed(2);

    // Clear inputs
    itemNameInput.value = "";
    itemQtyInput.value = "";
    itemPriceInput.value = "";
  });
});