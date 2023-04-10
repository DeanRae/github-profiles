import { FC, FormEvent } from 'react'

interface Props {
    inputId: string;
    label: string;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
const SearchBar: FC<Props> = ({ inputId, label, onSubmit }) => {
    return (
        <form role="search" onSubmit={onSubmit} className="search-bar">
            <label htmlFor={inputId} className="search-bar__label">
                {label}
                <input id={inputId} type="text" className="search-bar__input" />
            </label>
            <button type="submit" className="search-bar__submit">
                Search
            </button>
        </form>

    )
}

export default SearchBar
