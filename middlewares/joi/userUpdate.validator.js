const Joi = require("joi");
const { WrongParametersError } = require("../../helpers/errors");

const schema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business"),
});

const userUpdateValidator = (req, res, next) => {
  try {
    const { error } = schema.validate(req.body);

    const response = (errorName) => {
      throw new WrongParametersError(`Must be a valid value ${errorName}`);
    };

    if (error) {
      return res.json(response(error.details[0].context.key));
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = userUpdateValidator;