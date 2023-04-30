import axios from "axios";

class Http {
  instance;
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:8000/api/v1",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

const https = new Http().instance;
export default https;
