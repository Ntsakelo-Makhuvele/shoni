import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { useFormContext,Controller } from 'react-hook-form';

interface FormSelectProps {
    label: string,
    options: any[],
    name: string

}

const FormSelect = ({ label, options, name }: FormSelectProps) => {
    const { control, formState: { errors } } = useFormContext();
    const error = errors[name];

    return (
        <div className="w-full">
            <Controller
            name={name}
             control={control}
             render={({field:{value,onChange}}) => (
            <Listbox  value={value} onChange={onChange}>
                <Label className="block text-sm/6 font-medium text-gray-900">{label}</Label>
                <div className="relative mt-2">
                <ListboxButton className={`grid w-full cursor-default grid-cols-1 rounded-md bg-white py-3 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary/30 sm:text-sm/6 ${error ? 'outline-red-500' : 'outline-gray-300'}`}>
                        <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                            <span className="block truncate">{ value || options[0]}</span>
                        </span>
                        <ChevronUpDownIcon
                            aria-hidden="true"
                            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                    </ListboxButton>
                    <ListboxOptions
    
                        transition
                        className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                    >
                        {options.map((option, index) => (
                            <ListboxOption
                                key={index}
                                value={option}
                                className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-primary data-focus:text-white data-focus:outline-hidden"
                            >
                                <div className="flex items-center">

                                    <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{option}</span>
                                </div>

                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
             )}
            />
           
            {error && <p className="mt-1 text-xs text-red-500">{error.message as string}</p>}
        </div>
    )
}

export default FormSelect