import { FC, FormEvent } from 'react'

interface FormElements extends HTMLFormControlsCollection {
    searchInput: HTMLInputElement
}
export interface SearchBarFormElement extends HTMLFormElement {
    readonly elements: FormElements
}
interface Props {
    inputId: string;
    label: string;
    onSubmit: (e: FormEvent<SearchBarFormElement>) => void;
    isLoading: boolean;
}

const SearchBar: FC<Props> = ({ inputId, label, onSubmit, isLoading }) => {
    return (
        <form role="search" onSubmit={onSubmit} className="search-bar">
            <label htmlFor={inputId} className="search-bar__label">
                {label}
                <input id={inputId} type="text" className="search-bar__input" name={inputId}/>
            </label>
            <button type="submit" className="search-bar__submit" disabled={isLoading}>
                Search
            </button>
        </form>

    )
}

export default SearchBar
