import { FaSearch } from "react-icons/fa";

function Search() {
    return (
        <div className="search">
            <span className="search__icon"><FaSearch /></span>
            <input type="text" className="search__input" placeholder="search" />
        </div>
    )
}

export default Search