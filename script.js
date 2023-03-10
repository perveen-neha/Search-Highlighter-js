let textToSearch = document.getElementById("text-to-search");
let paragraph = document.getElementById("paragraph");

textToSearch.addEventListener("input", search);

function search() {
  let inputValue = textToSearch.value;
  inputValue = inputValue.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    let pattern = new RegExp(`${inputValue}`,"gi");

    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
  // Characters to be escaped [.*+?^${}()|[\]\\] (There characters should not be searched in the text)
}
