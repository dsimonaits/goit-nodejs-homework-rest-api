class RequestError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class WrongParametersError extends RequestError {
  constructor(message, statusType) {
    super(message);
    this.status = 400;
    this.statusType = statusType;
  }
}

class NotFound extends RequestError {
  constructor(message, statusType) {
    super(message);
    this.status = 404;
    this.statusType = statusType;
  }
}

module.exports = {
  RequestError,
  WrongParametersError,
  NotFound,
};
