import * as Yup from "yup";

// export const validationSchema = Yup.object({
//   title: Yup.string().required("Title is required"),
//   type: Yup.string()
//     .oneOf(
//       [
//         "minimumWithdrawalAmount",
//         "releaseFundsToWriterAfterDays",
//         "contractAcceptanceDeadline",
//         "contractServiceFeePercentage",
//         "contractSubmissionDeadline",
//       ],
//       "Invalid type value"
//     )
//     .required("Type is required"),
//   value: Yup.string()
//     .required("Value is required")
//     .test("is-valid", "Invalid value", function (value) {
//       const { type } = this.parent;

//       if (type === "minimumWithdrawalAmount" && value < 1000) {
//         return this.createError({
//           message: "The minimum withdrawal amount should be at least 1000",
//         });
//       }
//       if (type === "releaseFundsToWriterAfterDays" && value < 24) {
//         return this.createError({
//           message:
//             "The minimum days to release funds should be at least 24hours",
//         });
//       }
//       if (type === "contractAcceptanceDeadline" && value < 24) {
//         return this.createError({
//           message:
//             "The minimum days to refund contracts should be at least 24hours",
//         });
//       }
//       if (type === "contractServiceFeePercentage" && value < 5) {
//         return this.createError({
//           message:
//             "The minimum contract service fee percentage should be at least 5%",
//         });
//       }
//       if (type === "contractSubmissionDeadline" && value < 1) {
//         return this.createError({
//           message:
//             "The minimum days for contract submission deadline should be at least 1hour",
//         });
//       }

//       return true;
//     }),
// });

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
