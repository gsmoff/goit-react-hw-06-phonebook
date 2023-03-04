import { setFilter } from 'redux/contacts/contactsSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {

    const dispatch = useDispatch();

    const handleFilterChange = event => {
        dispatch(setFilter(event.target.value));
        console.log(event.target.value);
    };
    

    return (
        <input
            type="text"
            name="filter"
            // value={filter}
            onChange={handleFilterChange}
            placeholder="Enter name for search"
        />
    );
};
