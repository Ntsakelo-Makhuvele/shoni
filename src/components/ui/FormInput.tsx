import { useFormContext } from 'react-hook-form';

interface InputProps {
    type: string,
    name: string,
    label: string,
    placeholder: string
}

const FormInput = ({ type, name, label, placeholder }: InputProps) => {
    const { register, formState: { errors } } = useFormContext();
    const error = errors[name]
    return (
        <div className='w-full'>
            <label htmlFor={name} className="block text-sm/6 font-medium text-gray-900">
                {label}
            </label>
            <div className="mt-2">
        <div className={`flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 
          ${error ? 'outline-red-500' : 'outline-gray-300'} 
          has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-primary/30`}>
          <input
            {...register(name)}
            id={name}
            type={type}
            placeholder={placeholder}
            className="block min-w-0 grow py-3 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
        {error && <p className="mt-1 text-xs text-red-500">{error.message as string}</p>}
      </div>
        </div>
    )
}

export default FormInput;