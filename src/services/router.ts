const HOST = "http://localhost:4000/api/v1";

const routes = {
  login: {
    method: "POST",
    uri: "/auth",
    // headers: {
    //   "Content-Type": "application/json",
    // },
  },
  getTemplates: {
    method: "GET",
    uri: "/mail-template",
    listenHeaders: ["Authorization"],
  },
};

export { HOST, routes };
