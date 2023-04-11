import { FC, FormEvent } from "react";

interface Props {
  inputId: string;
  label: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

const SearchBar: FC<Props> = ({ inputId, label, onSubmit, isLoading }) => {
  return (
    <form role="search" onSubmit={onSubmit} className="search-bar">
      <label htmlFor={inputId} className="search-bar__label">
        {label}
        <input
          id={inputId}
          type="text"
          className="search-bar__input"
          name={inputId}
          disabled={isLoading}
        />
      </label>
      <button type="submit" className="search-bar__submit" disabled={isLoading}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
