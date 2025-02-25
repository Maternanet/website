//define demo request interface
interface DemoRequestDetails {
  name: string
  email: string
  company?: string
}

import axios from "axios";
export default class DemoService {
  //using promise instead of callback
  public static async requestDemo(data: DemoRequestDetails): Promise<any> {
    try {
      const res = await axios.post("https://api.medisync.com/demo", data);
      return res.data;
    } catch (error) {

      return { error: true, msg: "Unable to send form. Please try again later." };
    }
  }
}
