import RequestAdapterService from './requestAdapterService';

export default class ChatService extends RequestAdapterService {
	baseURL = process.env.NEXT_PUBLIC_BASE_URL;

	async saveProfile(profile) {
		try {
			const { data } = await super.sendPostRequest(
				`${this.baseURL}/user`,
				profile
			);

			return data;
		} catch (error) {
			const errMsg = super.generateErrMessage(error);
			throw new Error('Saving profile to database: ' + errMsg);
		}
	}
}
