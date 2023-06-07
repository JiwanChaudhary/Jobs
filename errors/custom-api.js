class CustomAPIError extends Error {
  constructor(message) {
    super(message);
  }
}
// console.log(typeof CustomAPIError);

module.exports = CustomAPIError;
