const HOST = "http://localhost:4000";

const routes = {
  login: {
    method: "POST",
    uri: "/login",
    headers: {
      "Content-Type": "application/json",
    },
  },
  signup: {
    method: "GET",
    uri: "/signup",
    listenHeaders: ["Authorization"],
  },
};

export { HOST, routes };
