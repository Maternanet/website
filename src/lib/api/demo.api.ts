import axios from "axios";
export default class {
  public static async requestDemo(data: any, cb: Function) {
    try {
      var res = await axios.post("https://api.medisync.com/demo", data);
      cb(res.data);
    } catch (error) {
      
      cb({ error: true, msg: "Unable to send form. Please try again later." });
    }
  }
}
