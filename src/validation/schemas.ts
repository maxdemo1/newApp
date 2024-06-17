import * as Yup from "yup";

export const userDataValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  username: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(20, "Too Long!"),
  email: Yup.string().email("Not valid email").required("Required"),
});
