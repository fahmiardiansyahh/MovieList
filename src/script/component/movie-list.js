import './movie-item.js';
import css from "bootstrap/dist/css/bootstrap.min.css";
import swal from 'sweetalert';

class MovieList extends HTMLElement  {


	constructor() {

		super();
		this.shadowDOM = this.attachShadow({ mode : "open" });
	}


	set movies(movies) {

		this._movies = movies;
		this.render();

	}


	renderError(message) {

		this.shadowDOM.innerHTML = `
			<style>
				${css}
				section .section-title {
				    text-align: center;
				    color: #007b5e;
				    margin-bottom: 50px;
				    text-transform: uppercase;
				}


			<style>
		`;

		swal({

		  icon: "error",
		  title : `Your Data ${message}!`

		});


	}

	render() {

		this.shadowDOM.innerHTML = '';

		this._movies.forEach(movie => {

			const movieItemElement = document.createElement('movie-item');
			movieItemElement.movie = movie;

			this.shadowDOM.appendChild(movieItemElement);

		});



	}

}

customElements.define('movie-list', MovieList);