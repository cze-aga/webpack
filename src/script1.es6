let login = (username, password) => {
  if (username !== "admin" || password !== "radical") {
    console.log("incorrects login");
  }
};

login("admin", "idunno");
