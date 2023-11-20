  function addCard(title = "unknown", content = "unknown") {
         const template = document
        .getElementById("card-template")
        .content.cloneNode(true);
      template.querySelector(".card-title").innerText = title;
      template.querySelector(".card-text").innerText = content;
      document.querySelector("#card-list").appendChild(template);
  }

let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

let formData = document.querySelector("#newItemForm")

formData.addEventListener("submit", addInputs)

function addInputs(event) {
  event.preventDefault()
  let formTitle = document.querySelector("#fTitle").value
  let formContent = document.querySelector("#fContent").value
  console.log(formContent)
  console.log(formTitle)
  let newNewsItem = { id: news.length + 1, title: formTitle, content: formContent}
  news.push(newNewsItem)
}


let toggleButton = document.querySelector("#toggleInterval")

toggleButton.addEventListener("click", stopInterval)

let RUNINTERVAL = true

function stopInterval() {
  RUNINTERVAL = !RUNINTERVAL
}

// setInterval(news.forEach((item) => {
//     addCard(item.title, item.content);
//   }), 5000)

setInterval(() => {
  if (RUNINTERVAL == true) {
    document.querySelector('#card-list').innerText = ""
    news.forEach((item) => {
      addCard(item.title, item.content)
    })
  }
}, 5000)