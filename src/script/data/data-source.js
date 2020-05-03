class DataSource {

			static searchMovie(keyword) {

					// Endpoint
					const url = "https://api.themoviedb.org/3/search/movie";

					// Api Key
					const keys = "eb15acfbd9f9081ac6cddebecc93b0e5";

				  return fetch(`${url}?api_key=${keys}&query=${keyword}`)
				  .then(response => {
				  		return response.json();
				  })
				  .then(responseJson => {
				  		if(responseJson.total_results > 0) {

				  			return Promise.resolve(responseJson.results);

				  		} else {

				  			return Promise.reject(`${keyword} Is Not Found`)

				  		}
				  })


			}




}

export default DataSource;