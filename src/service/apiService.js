import axios from "axios";

let messageShow = true;

const ApiService = {
  mount401Interceptor() {
    axios.interceptors.response.use(
      (response) => {
        console.log("salom");
        return response;
      },
      async (error) => {
        //   error
        if (messageShow) {
          throw error;
        }
        throw error;
      }
    );
  },
  unmount401Interceptor() {
    // Eject the interceptor
    axios.interceptors.response.eject(this._40i1nterceptor);
  },
};

export default ApiService;
