
import Messenger from "./components/messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";

function App() {

  const clientId = '716517389554-pffabsl272k3k927ps33hb93c8rggkq4.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider  clientId={ clientId }>
      <AccountProvider>
         <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;

//https://github.com/kunaltyagi9/MERN-Stack-Projects/blob/master/Whatsapp-Clone