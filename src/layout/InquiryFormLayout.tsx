import { InquirySchema } from "../lib/schemas";
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from "../components/ui/FormInput";
import FormSelect from "../components/ui/FormSelect";
import FormDateInput from "../components/ui/FormDateInput";
import FormTextArea from "../components/ui/FormTextArea";
import { Upload } from "lucide-react";

const eventTypes = ['Select Event Type', 'Wedding', 'Birthday', 'Baby Shower', 'Anniversary', 'Corporate Event', 'Graduation', 'Other']
const flavors = ['Select flavour', 'Chocolate', 'Vanilla', 'Carrot', 'Marble', 'Red Velvet', 'Lemon', 'Other (Specify in descriptiom)']
const budgetRanges = ['Select Budget Range', 'R500 -R1000','R1000 - R2000', '2000 - R3500', 'R3500 - R5000', 'R5000+']

const InquiryFormLayout = () => {
    const methods = useForm({
        resolver: zodResolver(InquirySchema),
        defaultValues: { fullName: "", email: "", eventDate: "", servingsNumber:1, budgetRange:"",cakeDescription:"",eventType:"",phone:"",preferredFlavor:""}
    })

    const onSubmit = (data:any) => console.log(data);
    return (
        <FormProvider {...methods}>  
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="card-elegant p-5">
                <h3 className="text-2xl font-bold mb-5">Contact Information</h3>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <FormInput type="text" name="fullName" label="Full Name *" placeholder="Your name"/>
                  <FormInput type="email" name="email" label="Email Address *" placeholder="email@example.com"/>
                </div>
                <div className="mt-5">
                  <FormInput type="phone" name="phone" label="Phone Number *" placeholder="+27 xx xxx xxxx"/>
                </div>
            </div>
            <div className="card-elegant p-5 mt-5">
               <h3 className="text-2xl font-bold mb-5">Event Details</h3>
               <div className="mt-5 grid md:grid-cols-2 grid-cols-1 gap-4">
                  <FormSelect name="eventType" label="Event Type *" options={eventTypes}/>
                  <FormDateInput name="eventDate" label={"Event Date *"} />
                  <FormInput type="text" name="servingsNumber" label="Number Of Servings *" placeholder="e.g 50" />
                  <FormSelect name="preferredFlavor" label="Preferred Flavor *" options={flavors}/>
               </div>
            </div>
            <div className="card-elegant p-5 mt-5">
                <h3 className="text-2xl font-bold mb-5">Event Details</h3>
                <div className="grid grid-cols-1">
                    <FormTextArea name="cakeDescription" placeholder="Tell us about the design, colors, themes, decorations, and any special instructions..." label="Cake Description *"/>
                    <FormSelect name="budgetRange" label="Budget Range" options={budgetRanges} />
                    </div>
                     <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900 mt-5 mb-3">
                            Reference Images (Optional, max 5)
                        </label>
                        <div className=" w-full border-2 border-border border-dashed border-default-strong rounded-base p-10 hover:border-primary rounded-md">
                            <Upload className="m-auto mb-3 text-foreground-muted"/>
                            <p className="text-center mb-3 text-foreground-muted">Drag and drop images here, or</p>
                            <label htmlFor="dropzone-file" className="block px-3 rounded-full w-[fit-content] m-auto h-full bg-neutral-secondary-medium  cursor-pointer bg-secondary">
                                <div className=" text-body">
                                      <p className="fit-content p-2">Browse Files</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                            <p className="text-center mt-3 text-foreground-muted">PNG, JPG up to 5MB each</p>
                        </div>
                </div>
               <div className="mt-10 mb-30">
                       <button type="submit" className="border w-full p-3 rounded-full text-white bg-primary cursor-pointer">Submit Request</button>
                    </div>
        </form>
        </FormProvider>
    )
}

export default InquiryFormLayout;