class NewRegisteration {
  constructor(name, number, email, dateOfBirth) {
    this.name = name;
    this.number = number;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
  }

  logRegister() {
    console.log(this);
  }

  postRegister(baseURL) {
    fetch(baseURL, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(this),
    })
      .then((response) => {
        //history.replace(redirect);

        return response.json();
      })
      .catch((err) => {
        alert("There is an error, please try again later");
        //data = err;
        return err;
      });
  }
}
export default NewRegisteration;
//module.exports = NewRegisteration;
