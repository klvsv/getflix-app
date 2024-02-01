import { useState } from "react";
import { SearchForm } from "../components/SearchForm";
import { IMovie } from "../models/IMovie";
import axios from "axios";
import { IOmdbResponse } from "../models/IOmdbResponse";

export const SearchApp = () => {
	const [movies, setMovies] = useState<IMovie[]>();

	const searchMovies = async (searchText: string) => {
		const response = await axios.get<IOmdbResponse>("http://www.omdbapi.com/?i=tt3896198&apikey=4f6b3c19&s=" + searchText);
		setMovies(response.data.Search);
	};

	return (
		<>
			<SearchForm search={searchMovies} />
			<section>results</section>
		</>
	);
};

export default SearchApp;
