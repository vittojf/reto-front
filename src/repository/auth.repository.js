import axios from "axios";
import { EndpointConfig } from "../config/config";

export default class AuthRepository {
  // Definir el cliente Axios para consumir el servicio
  get ws() {
    const cfg = new EndpointConfig();
    const _ws = axios.create({
      baseURL: cfg.AUTH_API,
      headers: cfg.header()
    });
    return _ws;
  }
  //EXAMPLE
  async singUp(body) {
    const endpoint = `/sign-up`;

    let res = await this.ws.post(endpoint, body);
    return res.data;
  }
}
