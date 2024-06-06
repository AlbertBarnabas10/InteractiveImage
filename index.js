const datas = [
  {
    img: "test.jpg",
    title: "test title",
    description: "test description",
    date: "test date",
  },
  {
    img: "test.jpg",
    title: "test title",
    description: "test description",
    date: "test date",
  },
  {
    img: "test.jpg",
    title: "test title",
    description: "test description",
    date: "test date",
  },
];

const card = document.querySelector(".card");
datas.forEach((datas) => {
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  const cardImg = document.createElement("img");
  cardImg.src = datas.img;

  const cardTitle = document.createElement("p");
  cardTitle.textContent = datas.title;

  const cardDescription = document.createElement("p");
  cardDescription.textContent = datas.description;

  const cardDate = document.createElement("p");
  cardDate.textContent = datas.date;

  cardContent.appendChild(cardImg);
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardDescription);
  cardContent.appendChild(cardDate);

  card.appendChild(cardContent);
});
