import { Search } from 'react-feather';
// === styles 
import './SearchHeader.scss';


const SearchHeader = () => {

    return (
        <div className='search--wrapper'>
            <form className='search--form'>
                <label htmlFor="search"></label>
                <input type="search" id="search" name="search" placeholder='Type your text ...'/>

                <button className='search--form-button'> <Search /></button>
            </form>
        </div>
    )
}


export default SearchHeader;