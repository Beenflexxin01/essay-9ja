import * as Yup from "yup";

export const loginValidatorSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("This field is required. Kindly provide a valid email! 🙂"),
  password: Yup.string()
    .min(6, "Too Short!")
    .required("This field is required. Kindly provide a valid password! 🤐"),
});

export const validationSchema = Yup.object({
  minimumWithdrawal: Yup.number()
    .required("Minimum Withdrawal Amount is required")
    .positive("Must be a positive number")
    .typeError("Must be a number"),
  fundRelease: Yup.number()
    .required("Days to release funds is required")
    .positive("Must be a positive number")
    .typeError("Must be a number"),
  contractRelease: Yup.number()
    .required("Days to release contract is required")
    .positive("Must be a positive number")
    .typeError("Must be a number"),
  contractPercentage: Yup.number()
    .required("Contract Service Percentage is required")
    .positive("Must be a positive number")
    .max(100, "Percentage cannot exceed 100")
    .typeError("Must be a number"),
});
