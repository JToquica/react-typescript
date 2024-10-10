import { useState } from "react";

interface User {
    name: string;
    age: number;
}

const initialUser:User = {
    name: "",
    age: 0
}

export const User = () => {
    const [user, setUser] = useState<User>(initialUser);

    const login = () => {
        setUser({
            name: "José Toquica",
            age: 23
        })
    }

    return (
        <div className="mt-5">
            <h3>User: useState</h3>

            <button type="button" className="btn btn-primary" onClick={login}>Login</button>
            <pre className="mt-2">{JSON.stringify(user)}</pre>
        </div>
    );
}