const logoutFormHandler = async (event) => {
  event.preventDefault();
};

document
  .querySelector("#logoutForm")
  .addEventListener("submit", logoutFormHandler);
