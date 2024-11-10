import React from "react";

export interface IInputForm
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
}

const InputForm: React.FC<IInputForm> = ({ label, error, ...props }) => {
  return (
    <>
      <div className="mt-3 w-full md:w-[90%]">
        <label className="text-gray-700 text-sm font-medium pb-2 block">
          {label}
        </label>
        <input
          className="border border-gray-300 outline-none px-2 py-1.5 rounded bg-inherit w-full placeholder:text-xs"
          {...props}
        />
        {error && (
          <p className="text-red-600 mt-2 text-xs font-medium">{error}</p>
        )}
      </div>
    </>
  );
};

export default InputForm;
