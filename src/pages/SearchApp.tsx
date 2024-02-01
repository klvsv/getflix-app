import { ChangeEvent, FormEvent, useState } from "react";

export const SearchApp = () => {
	const [userSearchText, setUserSearchText] = useState("");
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserSearchText(e.target.value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					value={userSearchText}
					onChange={handleChange}
				/>
				<button>Search</button>
			</form>

			<section>Search results</section>
		</>
	);
};

export default SearchApp;
