import { useState } from "react";

function fetchToken(username, password) {

    console.log('username: '+username);
    console.log('password: '+password);
    
};

function LogIn() {
      const [usernameValue, setUsernameValue] = useState("");
      const [passwordValue, setpasswordValue] = useState("");
    

    return(

    <div>

            <label>
                Username: {' '}
                <input
                type="text"
                value={usernameValue}
                onChange={(e) => setUsernameValue(e.target.value)}/>
            </label>

            <label>
                Password: {' '}
                <input
                type="text"
                value={passwordValue}
                onChange={(e) => setpasswordValue(e.target.value)}/>
            </label>
        
            <button 
                    type='submit'
                    onClick={() => fetchToken(usernameValue, passwordValue)}
                    >Log In
            </button>

    </div>

    )

}

export default LogIn;