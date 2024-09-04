const Joi = require("joi");

const validateEmployeeSchema = Joi.object({
  employeeId: Joi.string().required().messages({
    "string.empty": "Employee ID is required.",
    "any.required": "Employee ID is required.",
  }),
  firstName: Joi.string().min(2).required().messages({
    "string.empty": "First name is required.",
    "string.min": "First name must be at least 2 characters long.",
    "any.required": "First name is required.",
  }),
  lastName: Joi.string().min(2).required().messages({
    "string.empty": "Last name is required.",
    "string.min": "Last name must be at least 2 characters long.",
    "any.required": "Last name is required.",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address.",
    "string.empty": "Email is required.",
    "any.required": "Email is required.",
  }),
  address: Joi.string().optional(),
  contactNo: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .optional()
    .messages({
      "string.pattern.base": "Contact number must be 10 digits.",
    }),
  details: Joi.string().optional(),
  designation: Joi.string().optional(),
});

module.exports = validateEmployeeSchema;
