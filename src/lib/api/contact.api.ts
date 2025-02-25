//define contact details
interface ContactDetails {
  name: string
  email: string
  message: string
}

import axios from "axios";
export default class ContactService {
  public static async sendContact(data: ContactDetails): Promise<any> {
    try {
      const res = await axios.post("/support/contact", data);
      return res.data;
    } catch (error) {
      return { error: true, msg: "Unable to send form. Please try again later." };
    }
  }
}
