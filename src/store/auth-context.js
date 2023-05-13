import React from 'react'

const AuthContext=React.createContext({
    isLogged:false,
    onLogout:()=>{},
});

const AuthContextProvider=(props)=>{
    return <AuthContext.Provider>{props.children}</AuthContext.Provider>
}
export default AuthContext;