import https from "../utils/http.util";

const httpHandler = {
  useRegisterUser: async (url, data) => {
    return https.post(url, data);
  },
  useLoginUser: async (url, data) => {
    return https.post(url, data);
  },
};

export default httpHandler;
