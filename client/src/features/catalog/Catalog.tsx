import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { response } from "express";
import { useState, useEffect } from "react";
import { Product } from "../../app/model/product";
import ProductList from "./ProductList";


export default function Catalog(){
    const [products, setProducts] = useState<Product[]>([])

    useEffect(()=>{
        fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, [])
    return(
        <>
            <ProductList products={products} />
         </>
    )
}