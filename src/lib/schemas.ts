import {z} from 'zod';


const emailSchema = z.email("Invalid email address");
const phoneSchema = z.string().length(10);

export const InquirySchema = z.object({
    fullName: z.string().min(3, 'Name is too short'),
    email: emailSchema,
    phone: phoneSchema,
    servingsNumber: z.coerce.number().min(1,'Atleast 1 serving required'),
    eventDate: z.string().refine((date) => new Date(date) > new Date(), {
    message: "Date must be in the future",
  }),
  eventType:z.string().min(1,'Event type is required'),
  preferredFlavor:z.string().min(1,'Flavor is required'),
  cakeDescription:z.string().min(1,'Description is required'),
  budgetRange: z.string().min(1,'Budget range is required')
})