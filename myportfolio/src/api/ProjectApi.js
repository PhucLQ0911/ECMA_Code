import Api from './Api';

class ProjectApi {
	constructor() {
		this.url = '/projects';
	}

	get = () => {
		return Api.get(this.url);
	};
}

export default new ProjectApi();
