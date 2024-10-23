import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  register?: any;  
  error?: string;  
  defaultValue?: any;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  register,
  error,
  defaultValue,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs text-gray-500">{label}</label>
      <input
        className={`ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full ${error ? 'ring-red-500' : ''}`}
        type={type}
        defaultValue={defaultValue}
        {...register(name)}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
};

export default InputField;
