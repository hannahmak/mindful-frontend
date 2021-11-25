import axios from 'axios';

const HTTP_ERR_MSG = {
	400: 'Server cannot proccess your request',
	422: 'Server cannot proccess your request',
	401: 'Your session is expired, please login',
	403: 'You cannot access this resource',
	404: 'Resouce cannot be found',
	503: 'Server cannot process your request at the moment',
	DEFAULT: 'Internal server error',
};
export default class RequestAdapterService {
	constructor() {
		this.req = axios.create({
			headers: {
				'Content-Type': 'application/json',
			},
		});

		this.req?.interceptors?.response?.use(
			(response) => {
				return response;
			},
			(error) => {
				throw error;
			}
		);
	}

	sendGetRequest(URL, params, config = {}) {
		return this.req.get(URL, { ...config, params });
	}

	sendPostRequest(URL, requestBody) {
		return this.req.post(URL, requestBody);
	}

	sendPutRequest(URL, requestBody) {
		return this.req.put(URL, requestBody);
	}

	sendDeleteRequest(URL, requestBody) {
		return this.req.delete(URL, requestBody);
	}

	generateErrMessage(error) {
		let errMessage = error.message;
		if (error.response) {
			const code = parseInt(error.response.status);
			errMessage = HTTP_ERR_MSG[code]
				? HTTP_ERR_MSG[code]
				: HTTP_ERR_MSG.DEFAULT;
		}
		return errMessage;
	}
}
