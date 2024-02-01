import { IMovie } from "../models/IMovie";

interface ISearchResultProps {
	movies: IMovie[] | undefined;
}

export const SearchResult = ({ movies }: ISearchResultProps) => {
	return (
		<>
			<section id="searchResult">
				{movies?.map((movie) => (
					<div key={movie.imdbID}>
						<h4>{movie.Title}</h4>
						<div className="searchResultImg">
							<img
								src={movie.Poster}
								alt={movie.Title}
							/>
						</div>
					</div>
				))}
			</section>
		</>
	);
};
