import Api from './Api';

class ContactApi {
	constructor() {
		this.url = '/contacts';
	}

	get = () => {
		return Api.get(this.url);
	};
}

export default new ContactApi();
