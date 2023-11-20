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

setInterval(news.forEach((item) => {
    addCard(item.title, item.content);
  }), 5000)