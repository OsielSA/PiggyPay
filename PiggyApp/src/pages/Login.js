import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button onClick={() => loginWithRedirect({ appState: { returnTo: '/home' } })}>
            Login
        </button>
    );
}

export default Login;