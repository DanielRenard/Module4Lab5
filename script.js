  function addCard(news) {
    news.forEach((item) => {
         const template = document
        .getElementById("card-template")
        .content.cloneNode(true);
      template.querySelector(".card-title").innerText = item.title;
      template.querySelector(".card-text").innerText = item.content;
      document.querySelector("#card-list").appendChild(template);
    });
  }


let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

console.log(news)

// news.forEach((item) => {
//     addCard(item.title, item.content);
//   });

// addCard(news.title, news.content)