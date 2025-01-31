import { authFormSchema } from "@/lib/utils"
import { Control, FieldPath } from "react-hook-form"
import { z } from "zod"
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"


const formSchema = authFormSchema('sign-up')

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
}
const CustomInput = ({ name, label, control, placeholder }: CustomInput) => {


    return (
        <FormField

            control={control}
            name={name}
            render={({ field }) => (
                <div className="form-item w-full">
                    <FormLabel className="form-label">
                        {label}
                    </FormLabel>
                    <div className="flex w-full">
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                className="input-class"
                                {...field}
                                type={name === 'password' ? 'password' : 'text'}
                            />
                        </FormControl>
                        <FormMessage className="mt-2 form-message" />
                    </div>

                </div>
            )}
        />
    )
}

export default CustomInput