// import { Avatar, Button, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper } from "@mui/material";
// import { response } from "express";
// import { useState, useEffect } from "react";
// import useProducts from "../../app/hooks/useProducts";
// import { Product } from "../../app/model/product";
// import { useAppSelector, useAppDispatch } from "../../app/store/configureStore";
// import { setProductParams, setPageNumber } from "./catalogSlice";
// import ProductList from "./ProductList";


// export default function Catalog(){
//     const {products, author, types, filtersLoaded, metaData, productsLoaded} = useProducts();
//     const { productParams,  } = useAppSelector(state => state.catalog);
//     const dispatch = useAppDispatch();



//     return (
//         <ProductList products={products} />
//     )

// }

import { Grid, Paper } from "@mui/material";
import AppPagination from "../../app/components/AppPagination";
import useProducts from "../../app/hooks/useProducts";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { setPageNumber, setProductParams } from "./catalogSlice";
import ProductList from "./ProductList"


export default function Catalog() {
    const {products, author, types, filtersLoaded, metaData} = useProducts();
    const { productParams,  } = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch()

    return (
        <Grid container columnSpacing={4}>
            <Grid item xs={9}>
                <ProductList products={products} />
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={9} sx={{mb: 2}}>
                {metaData &&
                <AppPagination 
                    metaData={metaData}
                    onPageChange={(page: number) => dispatch(setPageNumber({pageNumber: page}))}
                />}
            </Grid>
        </Grid>
    )
}