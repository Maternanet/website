import axios from "axios";
export default class {
  public static async sendContact(data: any, cb: Function) {
    try {
      var res = await axios.post("/support/contact", data);
      cb(res.data);
    } catch (error) {
      cb({ error: true, msg: "Unable to send form. Please try again later." });
    }
  }
}
