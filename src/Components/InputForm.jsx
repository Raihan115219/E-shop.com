import React from "react";
import { useForm } from "react-hook-form";

function InputForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <div className="row g-3">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                {...register("First_name", { required: "name is requred" })}
              />
              {errors.First_name && (
                <p className="text-danger  py-1">{errors.First_name.message}</p>
              )}
            </div>
            <div className="col-md-6 mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                {...register("Last_name", { required: "last name is requred" })}
              />
              {errors.Last_name && (
                <p className="text-danger  py-1">{errors.Last_name.message}</p>
              )}
            </div>
            <div className="col-md-6 mb-4">
              <input
                type="email"
                className="form-control"
                placeholder="enter your email"
                {...register("email", {
                  required: "email is requred",
                  pattern: {
                    value:
                      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                    message: "Plese try to use a valid Eamill Address!",
                  },
                })}
              />
              {errors.email && (
                <p className="text-danger  py-1">{errors.email.message}</p>
              )}
            </div>
            <div className="col-md-6 mb-4">
              <input
                type="tel"
                className="form-control"
                placeholder="phone number"
                {...register("phone_number", {
                  required: "phone number is requred",

                  pattern: {
                    value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
                    message:
                      "Mobile number is not valide ,All information is required",
                  },
                })}
              />
              {errors.phone_number && (
                <p className="text-danger  py-1">
                  {errors.phone_number.message}
                </p>
              )}
            </div>
            <div className="col-12 mb-4">
              <textarea
                className="form-control"
                placeholder="Enter your Massage here......."
                {...register("info", {
                  required: "massage  is requred",
                  maxLength: {
                    value: 100,
                    message: "100 charected are allowed!",
                  },
                })}
              ></textarea>
              {errors.info && (
                <p className="text-danger  py-1">{errors.info.message}</p>
              )}
            </div>
            <div className="col-12 mb-4">
              <button type="submit" className="btn main-btn">
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
