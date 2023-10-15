export function createMarkup(array = []) {
  return array
    .map((el) => {
      return `<ol>
      <li class="item ${el.done ? "checked" : ""} " data-id="${
        el.id
      }">
    <p class="text">${el.value}</p>
    <button type="button" class="button">Done ✅</button>
  </li>
      </ol> `;
    })
    .join("");
}
