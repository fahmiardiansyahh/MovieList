import css from "bootstrap/dist/css/bootstrap.min.css";

class NavbarList extends HTMLElement {


	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode : "open" });
	}

	connectedCallback() {

		this.render();
	}


	render() {

		this.shadowDOM.innerHTML = `
		<style>
			${css}
			.navbar {
			background-color: #FF5483;
			}

			.nav-link {

				font-family: 'Source Code Pro', monospace;
				font-size: 18px;
				font-weight: bold;


			}


			.navbar-brand {
				
				font-family: 'Lobster', cursive;
				font-size: 30px;
				letter-spacing: 3px;
				font-weight: bold;

			}
		</style>

		<nav class="navbar navbar-expand-md navbar-dark">
			<div class="container">
				<a class="navbar-brand" href="#">
				    Movie List</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
		  			</button>
	  			  	<div class="collapse navbar-collapse" id="navbarNav">
				    	<ul class="navbar-nav ml-auto">
						    <li class="nav-item active">
						       	<a class="nav-link" href="https://www.themoviedb.org/documentation/api" target="_blank">TMDB API</a>
						    </li>
						</ul>
					</div>
			</div>
		</nav>




		`;



	}



}

customElements.define('navbar-list' , NavbarList);