
import { Container, CssBaseline, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Route} from "react-router-dom";
import Catalog from "../../features/catalog/Catalog";
import Login from "../../features/account/Login";
import { Product } from "../model/product";
import Header from "./Header";
import { Switch } from "react-router-dom";
import Register from "../../features/account/Register";
import { useAppDispatch } from "../store/configureStore";
import { fetchCurrentUser } from "../../features/account/accountSlice";
import Inventory from "../../features/admin/Inventory";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../../features/home/HomePage";


function App() {
    const dispatch = useAppDispatch();
    // const[products, setProducts] = useState<Product[]>([]);

    // useEffect(() => {
    //  fetch('http://localhost:5000/api/products')
    //  .then(response => response.json())
    //  .then(data =>  setProducts(data))
    // }, [])
    const [loading, setLoading] = useState(true);

    const initApp = useCallback(async () => {
      try {
        await dispatch(fetchCurrentUser());
      } catch (error) {
        console.log(error);
      }
    }, [dispatch])
  
    useEffect(() => {
      initApp().then(() => setLoading(false));
    }, [initApp])

    useEffect(() =>{
        dispatch(fetchCurrentUser());
    })


    // function addProduct() {
    //     setProducts(prevState => [...prevState,
    //     {
    //         id: prevState.length +101,
    //         name: 'product' + (prevState.length + 1),
    //         price: (prevState.length *100) +100,
    //         author: 'some people',
    //         description: 'some description',
    //         pictureUrl: 'http://picsum.photos/200'
    //     }])
    // }

    return(
        <>
            <CssBaseline/>
    
            <Header />   
            <Route exact path='/' component={HomePage} />    
            <Route path={'/(.+)'} render={() => (
             <Container>
                 <Switch>
                 
                 <PrivateRoute roles={['Admin']} path='/inventory' component={Inventory} />
                 <Route path='/login' component={Login} />
                 <Route path='/register' component={Register} />
                 {/* <Route path='/inventory' component={Inventory} /> */}
                 </Switch>
            </Container> 
            )}/>
        </>
    )
    
}

export default App;