export function processUniqueError(err) {
  let errContainer = err;
  if (err?.code === 11000) {
    errContainer = { errors: {} };
    errContainer.errors[Object.keys(err.keyValue)[0]] = {
      message: "The field must be unique",
    };
  }
  return errContainer;
}
export const BACKEND_NOTAUTH_CODE = 403;
export const BACKEND_NOTAUTH = {
  errors: { general: { message: "Not authorized" } },
};

export const BACKEND_NOT_FOUND_CODE = 404;
export const BACKEND_NOT_FOUND = {
  errors: { general: { message: "Website not found" } },
};

export const BACKEND_SUCCESS_CODE = 200;
export const BACKEND_INVALID_CODE = 400;
