import Navbar from "../components/ui/NavBar"
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Calendar,Upload } from "lucide-react"
import { useState } from "react"
import InquiryFormLayout from "../layout/InquiryFormLayout"


const eventTypes = ['Select Event Type', 'Wedding', 'Birthday', 'Baby Shower', 'Anniversary', 'Corporate Event', 'Graduation', 'Other']

const flavors = ['Select flavour', 'Chocolate', 'Vanilla', 'Carrot', 'Marble', 'Red Velvet', 'Lemon', 'Other (Specify in descriptiom)']

const CustomRequest = () => {
    const [selectedEvent, setSelectedEvent] = useState(eventTypes[0]);
    const [selectedFlavor, setSelectedFlavor] = useState(flavors[0]);

    return (
        <div>
            <Navbar />
            <section className="mt-30 py-15 bg-gradient-rose">
                <h1 className="text-4xl text-center font-bold">Custom Cake Request</h1>
                <p className="text-center mt-3 text-foreground-muted">Have a unique vision? Share your dream cake with us and we'll bring it to life. <br />Upload reference images and describe your perfect creation.</p>
            </section>
            <section className="max-w-[700px] w-[90%] m-auto mt-20">
                <InquiryFormLayout />
            </section>
        </div>
    )
}

export default CustomRequest;