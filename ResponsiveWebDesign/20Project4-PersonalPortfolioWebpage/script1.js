/*** // Function to fetch the content for the views page
function fetchViewsPage() {
	fetch("views.html")
		.then((response) => response.text())
		.then((data) => {
			const contentElement = document.getElementById("content");
			contentElement.innerHTML = data;
		})
		.catch((error) => console.error(error));
}

// Function to fetch the content for the home page
function fetchHomePage() {
	const aboutSection = `
    <section id="welcome-section" class="welcome-section">
      <div class="quote-container-left">
						<div class="bubble right">
							Quality is not an act, it is a habit." - Aristotle
						</div>
					</div>
					<div class="quote-container-right">
						<div class="bubble left">
							"The best software engineers are those who understand the power of
							simplicity." - Anonymous
						</div>
					</div>

					<img
						class="profile-image"
						src="https://drive.google.com/uc?id=11GXeT9qmJhU26JKbsyoDOmNZ1x_gN6oQ"
						alt="Stephen Omollo"
					/>
					<h1>Hey! I am Stephen O. Omollo</h1>
					<p>a Front-End Software Engineer</p>
    </section>
  `;

	const projectsSection = `
    <section id="projects" class="projects-section">
      <h2 class="projects-section-header">These are some of my projects</h2>

					<div class="projects-grid">
						<a
							href="https://bashyetu.surge.sh/"
							target="_blank"
							class="project project-tile"
						>
							<img
								class="project-image"
								src="https://drive.google.com/uc?id=1RaNi3iJctSdABxsBQnm1rRiLPjliA6Y1"
								alt="project"
							/>
							<p class="project-title">
								<span class="code">&lt;</span>
								Celebrate Life's Milestones React App
								<span class="code">&#47;&gt;</span>
							</p>
						</a>
						<a
							href="https://nairobitester.github.io/freeCodeCampCerts/"
							target="_blank"
							class="project project-tile"
						>
							<img
								class="project-image"
								src="https://drive.google.com/uc?id=1WF6xhDA-_1kdcvEMt7d_ICbPBxHl5bf_"
								alt="project"
							/>
							<p class="project-title">
								<span class="code">&lt;</span>
								Responsive Web Design Projects
								<span class="code">&#47;&gt;</span>
							</p>
						</a>
						<a
							href="https://nairobitester.github.io/projectJavaScript/"
							target="_blank"
							class="project project-tile"
						>
							<img
								class="project-image"
								src="https://drive.google.com/uc?id=1feF1UIczDePHIPCYDQKPw2b6C-9Dk231"
								alt="project"
							/>
							<p class="project-title">
								<span class="code">&lt;</span>
								JavaScript & jQuery Front-End
								<span class="code">&#47;&gt;</span>
							</p>
						</a>
						<a
							href="https://nairobitester.github.io/projectHTMLCSS/"
							target="_blank"
							class="project project-tile"
						>
							<img
								class="project-image"
								src="https://drive.google.com/uc?id=1QIgFOrootPElC6MNz9UQyT6B_--E5tWm"
								alt="project"
							/>
							<p class="project-title">
								<span class="code">&lt;</span>
								HTML and CSS Skills
								<span class="code">&#47;&gt;</span>
							</p>
						</a>
					</div>

					<a
						href="https://github.com/NairobiTester?tab=repositories"
						class="btn btn-show-all"
						target="_blank"
						>Show all<i class="fas fa-chevron-right"></i
					></a>
    </section>
  `;

	const skillsSection = `
    <section id="skills" class="skills-section">
      <div class="contact-section-header">
						<h2>Skills & Certifications</h2>
						<p>
							<strong class="p-color">Skills: </strong> JavaScript/HTML/CSS,
							jQuery, SCSS/BootstrapCSS-5/TailwindCSS, React, Typescript, Redux,
							SQL, Git
						</p>
						<br />
						<p>
							<strong class="p-color">Certifications: </strong>Responsive Web
							Design Certification & JavaScript Algorithms & Data Structures
							Certification from
							<a href="https://www.freecodecamp.org/learn/"
								><strong>FreeCodeCamp.org</strong></a
							>
						</p>
						<br />
						<p>
							<strong class="p-color">Interests: </strong> MERN, NextJs, React
							Native/Ionic Framework, SvelteJS, VueJS, SolidJS, Astro, Elm,
							Python (Rest APIs, GraphQL APIs, Microservices, AI and Data
							Science), C++/Rust, Test-Driven Development, and
							Docker/Kubernetes/AWS.
						</p>
						<br />
						<a
							href="https://drive.google.com/file/d/1iwPn6xNXzgiNCPLJkyXuqNlC5Ohsextc/view?usp=sharing"
							download
							>Download Resume</a
						>
					</div>
    </section>
  `;

	const contactSection = `
    <section id="contact" class="contact-section">
     <div class="contact-section-header">
						<h2>Let's work together...</h2>
						<br />
						<p>Contact me via email or phone-number provided below.</p>
					</div>
					<div class="contact-links">
						<a
							id="profile-link"
							href="https://github.com/NairobiTester"
							target="_blank"
							class="btn contact-details"
							><i class="fab fa-github"></i> GitHub</a
						>
						<a
							href="https://www.freecodecamp.org/OkenoChile"
							target="_blank"
							class="btn contact-details"
							><i class="fab fa-free-code-camp"></i>FreeCodeCamp</a
						>
						<a href="diligentwriting@gmail.com" class="btn contact-details"
							><i class="fas fa-at"></i> Email: diligentwriting@gmail.com</a
						>
						<a href="tel:+254 727 505 840" class="btn contact-details"
							><i class="fas fa-mobile-alt"></i> Call: +254727505840</a
						>
					</div>
    </section>
  `;

	const contentElement = document.getElementById("content");

	// Check the clicked link's href attribute to determine which content to fetch
	if (window.location.hash === "#welcome-section") {
		contentElement.innerHTML = aboutSection;
	} else if (window.location.hash === "#projects") {
		contentElement.innerHTML = projectsSection;
	} else if (window.location.hash === "#skills") {
		contentElement.innerHTML = skillsSection;
	} else if (window.location.hash === "#contact") {
		contentElement.innerHTML = contactSection;
	}
}

// Function to handle navigation and fetch appropriate page content
function handleNavigation(event) {
	event.preventDefault();

	const target = event.target;
	const href = target.getAttribute("href");

	if (href === "views.html") {
		fetchViewsPage();
	} else {
		fetchHomePage();
	}
}

// Add event listeners to the navigation links
const navLinks = document.querySelectorAll("#navbar a");
navLinks.forEach((link) => {
	link.addEventListener("click", handleNavigation);
});

***/
// Function to fetch the content for the home page
// Function to fetch the content for the home page
/** function fetchHomePage() {
	const aboutSection = `
    <section id="welcome-section" class="welcome-section">
      <div class="quote-container-left">
						<div class="bubble right">
							Quality is not an act, it is a habit." - Aristotle
						</div>
					</div>
					<div class="quote-container-right">
						<div class="bubble left">
							"The best software engineers are those who understand the power of
							simplicity." - Anonymous
						</div>
					</div>

					<img
						class="profile-image"
						src="https://drive.google.com/uc?id=11GXeT9qmJhU26JKbsyoDOmNZ1x_gN6oQ"
						alt="Stephen Omollo"
					/>
					<h1>Hey! I am Stephen O. Omollo</h1>
					<p>a Front-End Software Engineer</p>
    </section>
  `;

	const projectsSection = `
    <section id="projects" class="projects-section">
      <h2 class="projects-section-header">These are some of my projects</h2>

					<div class="projects-grid">
						<a
							href="https://bashyetu.surge.sh/"
							target="_blank"
							class="project project-tile"
						>
							<img
								class="project-image"
								src="https://drive.google.com/uc?id=1RaNi3iJctSdABxsBQnm1rRiLPjliA6Y1"
								alt="project"
							/>
							<p class="project-title">
								<span class="code">&lt;</span>
								Celebrate Life's Milestones React App
								<span class="code">&#47;&gt;</span>
							</p>
						</a>
						<a
							href="https://nairobitester.github.io/freeCodeCampCerts/"
							target="_blank"
							class="project project-tile"
						>
							<img
								class="project-image"
								src="https://drive.google.com/uc?id=1WF6xhDA-_1kdcvEMt7d_ICbPBxHl5bf_"
								alt="project"
							/>
							<p class="project-title">
								<span class="code">&lt;</span>
								Responsive Web Design Projects
								<span class="code">&#47;&gt;</span>
							</p>
						</a>
						<a
							href="https://nairobitester.github.io/projectJavaScript/"
							target="_blank"
							class="project project-tile"
						>
							<img
								class="project-image"
								src="https://drive.google.com/uc?id=1feF1UIczDePHIPCYDQKPw2b6C-9Dk231"
								alt="project"
							/>
							<p class="project-title">
								<span class="code">&lt;</span>
								JavaScript & jQuery Front-End
								<span class="code">&#47;&gt;</span>
							</p>
						</a>
						<a
							href="https://nairobitester.github.io/projectHTMLCSS/"
							target="_blank"
							class="project project-tile"
						>
							<img
								class="project-image"
								src="https://drive.google.com/uc?id=1QIgFOrootPElC6MNz9UQyT6B_--E5tWm"
								alt="project"
							/>
							<p class="project-title">
								<span class="code">&lt;</span>
								HTML and CSS Skills
								<span class="code">&#47;&gt;</span>
							</p>
						</a>
					</div>

					<a
						href="https://github.com/NairobiTester?tab=repositories"
						class="btn btn-show-all"
						target="_blank"
						>Show all<i class="fas fa-chevron-right"></i
					></a>
    </section>
  `;

	const skillsSection = `
    <section id="skills" class="skills-section">
      <div class="contact-section-header">
						<h2>Skills & Certifications</h2>
						<p>
							<strong class="p-color">Skills: </strong> JavaScript/HTML/CSS,
							jQuery, SCSS/BootstrapCSS-5/TailwindCSS, React, Typescript, Redux,
							SQL, Git
						</p>
						<br />
						<p>
							<strong class="p-color">Certifications: </strong>Responsive Web
							Design Certification & JavaScript Algorithms & Data Structures
							Certification from
							<a href="https://www.freecodecamp.org/learn/"
								><strong>FreeCodeCamp.org</strong></a
							>
						</p>
						<br />
						<p>
							<strong class="p-color">Interests: </strong> MERN, NextJs, React
							Native/Ionic Framework, SvelteJS, VueJS, SolidJS, Astro, Elm,
							Python (Rest APIs, GraphQL APIs, Microservices, AI and Data
							Science), C++/Rust, Test-Driven Development, and
							Docker/Kubernetes/AWS.
						</p>
						<br />
						<a
							href="https://drive.google.com/file/d/1iwPn6xNXzgiNCPLJkyXuqNlC5Ohsextc/view?usp=sharing"
							download
							>Download Resume</a
						>
					</div>
    </section>
  `;

	const contactSection = `
    <section id="contact" class="contact-section">
     <div class="contact-section-header">
						<h2>Let's work together...</h2>
						<br />
						<p>Contact me via email or phone-number provided below.</p>
					</div>
					<div class="contact-links">
						<a
							id="profile-link"
							href="https://github.com/NairobiTester"
							target="_blank"
							class="btn contact-details"
							><i class="fab fa-github"></i> GitHub</a
						>
						<a
							href="https://www.freecodecamp.org/OkenoChile"
							target="_blank"
							class="btn contact-details"
							><i class="fab fa-free-code-camp"></i>FreeCodeCamp</a
						>
						<a href="diligentwriting@gmail.com" class="btn contact-details"
							><i class="fas fa-at"></i> Email: diligentwriting@gmail.com</a
						>
						<a href="tel:+254 727 505 840" class="btn contact-details"
							><i class="fas fa-mobile-alt"></i> Call: +254727505840</a
						>
					</div>
    </section>
  `;

	const contentElement = document.getElementById("content");

	// Check the clicked link's href attribute to determine which content to fetch
	if (window.location.hash === "#welcome-section") {
		contentElement.innerHTML = aboutSection;
	} else if (window.location.hash === "#projects") {
		contentElement.innerHTML = projectsSection;
	} else if (window.location.hash === "#skills") {
		contentElement.innerHTML = skillsSection;
	} else if (window.location.hash === "#contact") {
		contentElement.innerHTML = contactSection;
	}
}

// Function to fetch the content for the views page
function fetchViewsPage() {
	fetch("views.html")
		.then((response) => response.text())
		.then((data) => {
			const contentElement = document.getElementById("content");
			contentElement.innerHTML = data;
		})
		.catch((error) => console.log("Error fetching views page:", error));
}

// Function to handle nav link clicks
function handleNavLinks(event) {
	const clickedLink = event.target;

	// Check if the clicked link is the "Views" link
	if (clickedLink.getAttribute("href") === "views.html") {
		event.preventDefault(); // Prevent navigation to views.html
		fetchViewsPage(); // Fetch and display the views page content
	} else {
		fetchHomePage(); // Fetch and display the home page content
	}
}

// Add click event listeners to the nav links
const navLinks = document.querySelectorAll(".nav-item a");
navLinks.forEach((link) => {
	link.addEventListener("click", handleNavLinks);
}); ***/

// Function to fetch the content for the views page
function fetchViewsPage() {
	fetch("views.html")
		.then((response) => response.text())
		.then((data) => {
			const contentElement = document.getElementById("content1");
			contentElement.innerHTML = data;
		})
		.catch((error) => console.log("Error fetching views page:", error));
}

// Function to handle nav link clicks
function handleNavLinks(event) {
	const clickedLink = event.target;

	// Check if the clicked link is the "Views" link
	if (clickedLink.getAttribute("href") === "views.html") {
		event.preventDefault(); // Prevent default navigation behavior
		fetchViewsPage(); // Fetch and display the views page content
	}
}

// Add click event listeners to the nav links
const navLinks = document.querySelectorAll(".nav-item a");
navLinks.forEach((link) => {
	link.addEventListener("click", handleNavLinks);
});
