import {Route, Routes, BrowserRouter} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "@constants/routes";
import { useState } from 'react';




export const AppRouter = () => {
    const [user] = useState(false);

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

