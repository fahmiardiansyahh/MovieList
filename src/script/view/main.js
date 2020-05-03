import '../component/movie-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

	const main = () => {


		const searchElement = document.querySelector("search-bar");

		const movieListElement = document.querySelector("movie-list");


		const onButtonSearchClicked = () => {

			// Data Source
			DataSource.searchMovie(searchElement.value)
			.then(renderResult)
			.catch(fallbackResult)


		};

		const renderResult = results => {


			movieListElement.movies = results ;


		}



		const fallbackResult = massage => {


			movieListElement.renderError(massage);


		}



		 searchElement.clickEvent = onButtonSearchClicked;



	}


export default main;

