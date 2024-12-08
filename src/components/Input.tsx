import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Inputs } from '../sections/Contacts';

type InputProps = {
  register: UseFormRegister<Inputs>;
  name: keyof Inputs;
  type?: React.HTMLInputTypeAttribute | undefined;
  id: string;
  placeholder: string | undefined;
  errorText: string | undefined;
  label: string;
  options?: RegisterOptions<Inputs, keyof Inputs> | undefined;
  isTextarea?: boolean;
};

const Input = ({
  register,
  type,
  id,
  placeholder,
  errorText,
  name,
  label,
  options,
  isTextarea = false,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-left text-base font-normal">
        {label}
      </label>

      {isTextarea ? (
        <textarea
          {...register(name, options)}
          id={id}
          className="shadow-sm block min-h-32 w-full resize-none rounded-lg border border-surface-cloudy bg-surface-nightfall p-2.5 text-sm text-surface-cloudy placeholder-surface-misty-morning outline-none focus:border-surface-dusk focus:ring-1 focus:ring-surface-dusk"
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          {...register(name, options)}
          autoComplete="off"
          type={type}
          id={id}
          className="shadow-sm block w-full rounded-lg border border-surface-cloudy bg-surface-nightfall p-3 text-sm text-surface-cloudy placeholder-surface-misty-morning outline-none focus:border-surface-dusk focus:ring-1 focus:ring-surface-dusk"
          placeholder={placeholder}
        />
      )}

      {errorText && <span className="self-start text-sm text-red-400">{errorText}</span>}
    </div>
  );
};

export default Input;
