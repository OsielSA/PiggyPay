import { useAuth0 } from "@auth0/auth0-react";

const MenuBar = () => {
    const { user, isAuthenticated, isLoading, logout } = useAuth0();

    if(isAuthenticated)
        console.log(user);

    return (
        <div>
            <h1>PiggyPay Home</h1>
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.username}</h2>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
        </div>
    );
}

export default MenuBar;