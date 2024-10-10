import { useForm } from "../hooks/useForm";

const initialFormData = {
    email: "",
    nombre: ""
}

export const Formulario = () => {
    const {form, handleChange, resetForm} = useForm<typeof initialFormData>(initialFormData);
    const {nombre, email} = form;

    return (
        <form autoComplete="off" className="my-3 flex-fill">
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" name="email" id="email" value={email} className="form-control" onChange={handleChange}/>
            </div>

            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre:</label>
                <input type="text" name="nombre" id="nombre" value={nombre} className="form-control" onChange={handleChange}/>
            </div>

            <pre>{JSON.stringify(form)}</pre>

            <button type="button" onClick={resetForm} className="btn btn-danger">Reset Form</button>
        </form>
    );
}
