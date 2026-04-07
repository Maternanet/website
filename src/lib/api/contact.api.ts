//define contact details
interface ContactDetails {
  name: string
  email: string
  phone?: string
  organization?: string
  partnership_type?: string
  message: string
}

import axios from "axios";
export default class ContactService {
  public static async sendContact(data: ContactDetails): Promise<any> {
    try {
      const res = await axios.post("https://formsubmit.co/ajax/careconnect.afrika@gmail.com", {
        ...data,
        _subject: "New Partnership Contact from Maternanet Website",
        _template: "table"
      });
      return res.data;
    } catch (error) {
      return { error: true, msg: "Unable to send form. Please try again later." };
    }
  }
}
