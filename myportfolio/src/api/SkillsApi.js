import Api from './Api';

class SkillApi {
	constructor() {
		this.url = '/specializing';
	}

	get = () => {
		return Api.get(this.url);
	};
}

export default new SkillApi();
