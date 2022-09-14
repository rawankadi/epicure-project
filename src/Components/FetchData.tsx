import React from 'react'
import axios from "axios"


export default async function FetchData(apiRoute: string) {
    let result;
    await axios.get(apiRoute)
    .then(Response =>{
        if(Response.status === 200){
            result = Response.data
        }
    })
    .catch(error =>{
        console.log(error);
        result = error.response.data
    });
  return result; 
}
