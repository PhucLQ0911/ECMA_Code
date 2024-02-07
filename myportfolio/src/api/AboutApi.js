import Api from './Api';

class AboutApi {
	constructor() {
		this.url = '/information';
	}

	get = () => {
		return Api.get(this.url);
	};
}

export default new AboutApi();
