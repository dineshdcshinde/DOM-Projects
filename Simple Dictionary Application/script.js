let searchBtn = document.querySelector(".search-btn");
let searchText = document.querySelector(".search");
let output = document.querySelector(".output");

searchBtn.addEventListener("click", async () => {
  let query = searchText.value.trim();
  if (!query) return alert("Please enter a word");

  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;

  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("Word not found");
    }

    let data = await response.json();
    output.textContent = await data[0].meanings[0].definitions[0].definition;
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  } finally {
    searchText.value = "";
  }
});

window.addEventListener("keydown", async (e) => {
  if (e.code == "Enter") {
    let query = searchText.value.trim();
    if (!query) return alert("Please enter a word");

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;

    try {
      let response = await fetch(url);

      if (!response.ok) {
        throw new Error("Word not found");
      }

      let data = await response.json();
      output.textContent = await data[0].meanings[0].definitions[0].definition;
    } catch (error) {
      output.textContent = `Error: ${error.message}`;
    } finally {
      searchText.value = "";
    }
  }
});
