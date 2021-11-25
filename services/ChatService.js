import RequestAdapterService from "./requestAdapterService";

export default class ChatService extends RequestAdapterService {
  baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  async createNewChat(payload) {
    try {
      const { data } = await super.sendPostRequest(
        `${this.baseURL}/chat/room`,
        payload,
        true
      );

      return data;
    } catch (error) {
      const errMsg = super.generateErrMessage(error);
      throw new Error("Getting room list: " + errMsg);
    }
  }

  async getChatRooms(payload) {
    try {
      const {
        data: { data },
      } = await super.sendGetRequest(
        `${this.baseURL}/chat/partner-room`,
        payload,
        true
      );

      return data;
    } catch (error) {
      const errMsg = super.generateErrMessage(error);
      throw new Error("Getting room list: " + errMsg);
    }
  }

  async getMessages(payload) {
    try {
      const {
        data: { data },
      } = await super.sendGetRequest(`${this.baseURL}/message`, payload, true);

      return data;
    } catch (error) {
      const errMsg = super.generateErrMessage(error);
      throw new Error("Getting message list: " + errMsg);
    }
  }

  async getPartnerBySubId(payload) {
    try {
      const {
        data: { data },
      } = await super.sendGetRequest(
        `${this.baseURL}/user/partner`,
        payload,
        true
      );

      return data;
    } catch (error) {
      const errMsg = super.generateErrMessage(error);
      throw new Error("Getting room list: " + errMsg);
    }
  }

  async readMessages(payload) {
    try {
      const { data } = await super.sendPutRequest(
        `${this.baseURL}/message/read`,
        payload,
        true
      );

      return data;
    } catch (error) {
      const errMsg = super.generateErrMessage(error);
      throw new Error("Update message read status: " + errMsg);
    }
  }
}
