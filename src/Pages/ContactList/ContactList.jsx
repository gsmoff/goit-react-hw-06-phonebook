import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { setFilter } from 'redux/contacts/contactsSlice';


export const ContactList = () => {

    const contacts = useSelector(store => store.contacts) 
    // console.log(contacts);

    const filter = useSelector(store => store.filter);
    
    const dispatch = useDispatch();

    const handleFilterChange = event => {
        dispatch(setFilter(event.target.value));
        console.log(event.target.value);
    };

    const filteredContacts = () => {
        if (filter ==='') return contacts;
        return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()))
    }

    const items = filteredContacts()

    return (
        <>
            <h3>Contacts</h3>
            <input
                type="text"
                name="filter"
                // value={filter}
                onChange={handleFilterChange}
                placeholder="Enter name for search"
            />
            <ul>
                {items.map(({ id, name, phone }) => (
                    <li key={id}>
                        {name}: {phone}{' '}
                        <button
                            onClick={() => {
                                dispatch(deleteContact(id));
                            }}
                        >
                            delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
