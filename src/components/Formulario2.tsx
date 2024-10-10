import { useForm } from "../hooks/useForm";

const initialFormData = {
    postal: "",
    ciudad: ""
}

export const Formulario2 = () => {
    const {form, handleChange, resetForm} = useForm<typeof initialFormData>(initialFormData);
    const {ciudad, postal} = form;

    return (
        <form autoComplete="off" className="my-3 flex-fill">
            <div className="mb-3">
                <label htmlFor="postal" className="form-label">Código Postal:</label>
                <input type="text" name="postal" id="postal" value={postal} className="form-control" onChange={handleChange}/>
            </div>

            <div className="mb-3">
                <label htmlFor="ciudad" className="form-label">Ciudad:</label>
                <input type="text" name="ciudad" id="ciudad" value={ciudad} className="form-control" onChange={handleChange}/>
            </div>

            <pre>{JSON.stringify(form)}</pre>

            <button type="button" onClick={resetForm} className="btn btn-danger">Reset Form</button>
        </form>
    );
}
