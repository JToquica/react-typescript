import { ChangeEvent, useState } from "react";

export const useForm = <T,>(initState:T) => {
    const [form, setForm] = useState<T>(initState);

    const handleChange = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value
        });
    }

    const resetForm = () => setForm(initState);

    return {
        form,
        handleChange,
        resetForm
    }
}