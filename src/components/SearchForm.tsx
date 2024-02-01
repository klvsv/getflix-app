import { ChangeEvent, FormEvent, useState } from "react";

interface IMovieSearchFormProps {
	search: (text: string) => void;
}

export const SearchForm = (props: IMovieSearchFormProps) => {
	const [userSearchText, setUserSearchText] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserSearchText(e.target.value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		props.search(userSearchText);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				value={userSearchText}
				onChange={handleChange}
			/>
			<button>Search</button>
		</form>
	);
};
