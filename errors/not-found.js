const { StatusCodes } = require("http-status-codes");
const CustomeAPIError = require("./custom-api");

class NotFoundError extends CustomeAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
