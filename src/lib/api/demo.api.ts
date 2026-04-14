//define demo request interface
interface DemoRequestDetails {
  name: string
  email: string
  company?: string
}

export interface DemoResponse {
  success?: boolean;
  error?: boolean;
  msg?: string;
}

export default class DemoService {
  //using promise instead of callback
  public static async requestDemo(data: DemoRequestDetails): Promise<DemoResponse> {
    try {
      const res = await fetch("/support/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!res.ok) throw new Error(`Demo request failed with status ${res.status}`);
      return await res.json();
    } catch (error) {
      console.error("[DemoService Error]: Failed to request demo", error);
      return { error: true, msg: "Unable to send form. Please try again later." };
    }
  }
}
