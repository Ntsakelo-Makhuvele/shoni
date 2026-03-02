import { Calendar } from "lucide-react"
import {useFormContext} from 'react-hook-form'

interface InputProps {
    name: string,
    label: string,
}

const FormDateInput = ({name,label}:InputProps) => {
    const {register, formState:{errors}} = useFormContext();
    const error = errors[name];

    return (
        <div className="w-full">
            <label className="block text-sm font-medium mb-3">{label}</label>
            <div className="relative bg-white ">
                <input
                    {...register(name)}
                    type="date"
                    name={name}

                    className={`block min-w-0 grow py-3 pr-3 pl-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary sm:text-sm/6 w-full px-4 rounded-md border border-border bg-white ${error ? 'outline-red-500' : 'outline-gray-300'}`}
                    min={new Date().toISOString().split('T')[0]}
                />
                <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted pointer-events-none" />
            </div>
            {error && <p className="mt-1 text-xs text-red-500">{error.message as string}</p>}
        </div>
    )
}

export default FormDateInput;