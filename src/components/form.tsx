import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from "./input-form";
import { validationInputs } from "../validations/form.validations";

export interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  landlinePhone: string;
  address: string;
}

const UserForm: React.FC = () => {
  const { control, handleSubmit } = useForm<IForm>({
    mode: "all",
    resolver: zodResolver(validationInputs),
  });

  const onSubmitHandler: SubmitHandler<IForm> = (data) => console.log(data);

  return (
    <div className="w-[70%]">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">
        Your Information
      </h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex w-[90%] gap-4">
          <Controller
            control={control}
            name={"firstName"}
            render={({ field, fieldState }) => {
              return (
                <InputForm
                  type="text"
                  label="FirstName"
                  error={fieldState.error?.message}
                  {...field}
                />
              );
            }}
          />
          <Controller
            control={control}
            name={"lastName"}
            render={({ field, fieldState }) => {
              return (
                <InputForm
                  type="text"
                  label="LastName"
                  error={fieldState.error?.message}
                  {...field}
                />
              );
            }}
          />
        </div>
        <Controller
          control={control}
          name={"email"}
          render={({ field, fieldState }) => {
            return (
              <InputForm
                type="text"
                label="Email"
                error={fieldState.error?.message}
                {...field}
              />
            );
          }}
        />
        <div className="flex gap-4 w-[90%]">
          <Controller
            control={control}
            name={"phoneNumber"}
            render={({ field, fieldState }) => {
              return (
                <InputForm
                  type="text"
                  label="Phone Number"
                  error={fieldState.error?.message}
                  {...field}
                />
              );
            }}
          />
          <Controller
            control={control}
            name={"landlinePhone"}
            render={({ field, fieldState }) => {
              return (
                <InputForm
                  type="text"
                  label="Landline Phone"
                  error={fieldState.error?.message}
                  {...field}
                  placeholder="021-"
                />
              );
            }}
          />
        </div>
        <Controller
          control={control}
          name={"address"}
          render={({ field, fieldState }) => {
            return (
              <InputForm
                type="text"
                label="Address"
                error={fieldState.error?.message}
                {...field}
              />
            );
          }}
        />
      </form>
    </div>
  );
};

export default UserForm;
