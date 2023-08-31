const articlesContainer = document.getElementById("articles-container");
const paginationContainer = document.getElementById("pagination-container");

const articlesPerPage = 5;
let currentPage = 1;

function sortArticlesByDateDescending() {
	articlesData.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function displayArticles(pageNumber) {
	const startIndex = (pageNumber - 1) * articlesPerPage;
	const endIndex = startIndex + articlesPerPage;
	const articles = articlesData.slice(startIndex, endIndex);

	articlesContainer.innerHTML = "";

	for (const article of articles) {
		const articleElement = document.createElement("div");
		articleElement.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.content}</p>
      <p>${article.date}</p>
      <a href="${article.link}" target="_blank" class="read-more-link">Read more</a>
    `;

		articlesContainer.appendChild(articleElement);
	}

	//pagination

	const totalPages = Math.ceil(articlesData.length / articlesPerPage);

	paginationContainer.innerHTML = "";

	for (let i = 1; i <= totalPages; i++) {
		const pageLink = document.createElement("a");
		pageLink.href = "#";
		pageLink.textContent = i;
		pageLink.addEventListener("click", () => {
			currentPage = i;
			displayArticles(currentPage);
		});

		paginationContainer.appendChild(pageLink);
	}

	if (currentPage < totalPages) {
		const buttonContainer = document.createElement("div");
		buttonContainer.classList.add("button-container");

		const loadMoreButton = document.createElement("button");
		loadMoreButton.classList.add("load-more-button");
		loadMoreButton.textContent = "Load More";
		loadMoreButton.addEventListener("click", () => {
			currentPage++;
			displayArticles(currentPage);
		});

		buttonContainer.appendChild(loadMoreButton);
		paginationContainer.appendChild(buttonContainer);
	}
}

sortArticlesByDateDescending();
displayArticles(currentPage);
