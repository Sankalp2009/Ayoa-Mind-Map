import {createContext} from 'react'
export const Authcontext = createContext(null);
const AuthProvider = ({children})=>
{
  return(
      <Authcontext.Provider>
      {children}
      </Authcontext.Provider>
  )
}
export default AuthProvider;