import { useFormContext } from "react-hook-form"

interface FormTextAreaProps{
    name: string,
    label:string,
    placeholder:string
}
const FormTextArea = ({name,label,placeholder}:FormTextAreaProps) => {
    const {register,formState:{errors}} = useFormContext();
    const error = errors[name];

    return (
        <div className="w-full mb-5">
              <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
                            {label}
                        </label>
              <textarea {...register(name)} name={name} id={name} className={`w-full bg-white border-1 border-border mt-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary p-5 rounded-md ${error ? 'border-red-500' : 'border-border'}`} rows={5} placeholder={placeholder}></textarea>
              {error && <p className="mt-1 text-xs text-red-500">{error.message as string}</p>}
        </div>
    )
}

export default FormTextArea;