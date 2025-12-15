const projects = [
  {
    title: "Portfolio",
    description: "Главный проект портфолио, демонстрирует мои навыки и работы.",
    url: "https://murixa.github.io/Portfolio/",
    img: "foto1.png"
  },
  {
    title: "Model",
    description: "Проект с моделью или демонстрацией работы с данными.",
    url: "https://murixa.github.io/model/",
    img: "foto2.png"
  },
  {
    title: "Game Site",
    description: "Сайт с игрой, интерактивный проект с графикой и логикой игры.",
    url: "https://murixa.github.io/Game_site/",
    img: "foto3.png"
  }
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <img src="${project.img}" alt="${project.title}">
    <div class="content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.url}" target="_blank">Открыть проект</a>
    </div>
  `;

  container.appendChild(card);
});
