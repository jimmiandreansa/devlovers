const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "test",
    password: "test",
  }),
};
fetch("https://jsonplaceholder.typicode.com/posts", options)