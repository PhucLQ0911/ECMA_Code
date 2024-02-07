import { useEffect, useState } from 'react';
import ContactComponent from '../../components/client/ContactComponent';
import ContactApi from '../../api/ContactApi';

function ContactPage() {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		getContacts();
	}, []);

	const getContacts = async () => {
		// call api
		const data = await ContactApi.get();
		// using data
		setContacts(data);
	};
	return (
		<>
			<ContactComponent contacts={contacts} />
		</>
	);
}
export default ContactPage;
