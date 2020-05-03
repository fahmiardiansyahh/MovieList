import css from "bootstrap/dist/css/bootstrap.min.css";

class SearchBar extends HTMLElement {


	constructor() {

		super();
		this.shadowDOM = this.attachShadow({ mode: "open" });


	}

	connectedCallback() {
		this.render();
	}


	set clickEvent(click) {

		this._clickEvent = click;
		this.render();

	}

	get value() {

		return this.shadowDOM.querySelector('#searchElement').value;

	}


	render() {

		this.shadowDOM.innerHTML = `
			<style>
			${css}
				button.btn.btn-search:hover {
					background-color: #FF5483;
				}

				.content {
					background-color: #DBF6F4;
					background-image: url('https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80');
					background-size: cover;
					padding: 0px;
					min-height: 569px;
					overflow-x: hidden;
				}



				.titleMenu {
					font-family: 'Satisfy', cursive;
					margin-top: 150px;
					font-size: 80px;
					text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000; 
					color: #FF5483;
				}
				


				@media only screen and (max-width: 768px) {
					.titleMenu {
						font-family: 'Satisfy', cursive;
						margin-top: 150px;
						font-size: 55px;
						text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000; 
						color: #FF5483;
					}
				}

			</style>

		<div class="container-fluid content">
			<div class="row">
				<div class="col-8 offset-2">
					<div class="row justify-content-center">
						<h2 class="titleMenu"> Search Movie </h2>
							<div class="input-group mb-5">
								<input id="searchElement" type="search" class="form-control"  placeholder="Search Movie...." aria-label="Search Movie..." aria-describedby="basic-addon2">
								<div class="input-group-append">
									<button id="searchButtonElement" class="btn btn-search btn-secondary" type="submit" name="search" >Search
									</button>
								</div>
							</div>
					</div>
				</div>
			</div>
		</div>

		
		`;


		this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);



	}




}


customElements.define('search-bar' , SearchBar);