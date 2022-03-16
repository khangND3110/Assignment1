import { Avatar, Button, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper } from "@mui/material";
import { response } from "express";
import { useState, useEffect } from "react";
import useProducts from "../../app/hooks/useProducts";
import { Product } from "../../app/model/product";
import { useAppSelector, useAppDispatch } from "../../app/store/configureStore";
import { setProductParams, setPageNumber } from "./catalogSlice";
import ProductList from "./ProductList";


export default function Catalog(){
    const {products, brands, types, filtersLoaded, metaData} = useProducts();
    const { productParams,  } = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    // if (!filtersLoaded) return <LoadingComponent message='Loading products...' />

    return (
        <ProductList products={products} />
        // <Grid container columnSpacing={4}>
        //     <Grid item xs={3}>
        //         <Paper sx={{ mb: 2 }}>
        //             <ProductSearch />
        //         </Paper>
        //         <Paper sx={{ mb: 2, p: 2 }}>
        //             <RadioButtonGroup
        //                 selectedValue={productParams.orderBy}
        //                 options={sortOptions}
        //                 onChange={(e) => dispatch(setProductParams({ orderBy: e.target.value }))}
        //             />
        //         </Paper>
        //         <Paper sx={{ mb: 2, p: 2 }}>
        //             <CheckboxButtons
        //                 items={brands}
        //                 checked={productParams.brands}
        //                 onChange={(items: string[]) => dispatch(setProductParams({ brands: items }))}
        //             />
        //         </Paper>
        //         <Paper sx={{ mb: 2, p: 2 }}>
        //             <CheckboxButtons
        //                 items={types}
        //                 checked={productParams.types}
        //                 onChange={(items: string[]) => dispatch(setProductParams({ types: items }))}
        //             />
        //         </Paper>
        //     </Grid>
        //     <Grid item xs={9}>
        //         <ProductList products={products} />
        //     </Grid>
        //     <Grid item xs={3} />
        //     <Grid item xs={9} sx={{mb: 2}}>
        //         {metaData &&
        //         <AppPagination 
        //             metaData={metaData}
        //             onPageChange={(page: number) => dispatch(setPageNumber({pageNumber: page}))}
        //         />}
        //     </Grid>
        // </Grid>
    )
    // const [products, setProducts] = useState<Product[]>([])

    // useEffect(()=>{
    //     fetch('http://localhost:5000/api/products')
    //     .then(response => response.json())
    //     .then(data => setProducts(data));
    // }, [])
    // return(
    //     <>
    //         <ProductList products={products} />
    //      </>
    // )
}