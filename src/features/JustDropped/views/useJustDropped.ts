import { useFormik } from "formik";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const useJustDropped = (close: () => void) => {
  const initialValues = {
    email: "",
  };
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: async (data) => {
      var templateParams = {
        email: data?.email,
      };
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          templateParams,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(() => {
          close();
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            className: "toast-login",
            hideProgressBar: true,
            autoClose: 3000,
          });
        })
        .catch((err) => {
          console.log(err);
          close();
        });
    },
  });

  return { values, handleChange, handleSubmit };
};

export default useJustDropped;
