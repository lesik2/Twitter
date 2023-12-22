import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "@constants/routes";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from '@constants/firebase';
import {useAuthState} from "react-firebase-hooks/auth";


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const AppRouter = () => {
    const [user] = useAuthState(auth)
 

    return (
      <BrowserRouter>
        {user?  
            (
                <Routes>
                    {privateRoutes.map((route) =>
                        <Route key={route.path} {...route}/>
                    )}
                </Routes>
            )
            :
            (
                <Routes>
                    {publicRoutes.map((route) =>
                        <Route key={route.path} {...route}/>
                    )}
                </Routes>
            )
        }
      </BrowserRouter>
    )
      
};

