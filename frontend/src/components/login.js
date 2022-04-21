import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = props => {
    const navigate = useNavigate();
    const initialUserState = {
        name: "",
        id: "",
    };

    const [user, setUser] = useState(initialUserState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const login = () => {
        props.login(user);
        navigate('/');
    }

    return (
        <div className="submit-form">
            <div>
                <div className="form-group">
                    <label htmlFor="user">
                        Username
                    </label>
                    <input 
                        type="text"
                        id="name"
                        className="form-control"
                        required
                        value={user.name}
                        onChange={handleInputChange}
                        name="name"
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="user">
                        ID
                    </label>
                    <input 
                        type="text"
                        id="id"
                        className="form-control"
                        required
                        value={user.id}
                        onChange={handleInputChange}
                        name="id"
                        />
                </div>
                <button onClick={login} className="btn btn-success">
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
