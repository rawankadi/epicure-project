import {Dish} from './Dish'

export interface Resturants{
    URLImage:string;
    name:string;
    ChefName:string;
    Status:string;
    dishes:Dish[];
}

export const Claro:Resturants={
    URLImage:"./images/meal1.svg",
    name:"Claro",
    ChefName:"Ran Shmueli",
    Status:"Open now",
    dishes:[]
}
export const KabKem:Resturants={
    URLImage:"./images/KabKem.svg",
    name:"Kab Kem",
    ChefName:"Yariv Malili",
    Status:"Closed",
    dishes:[]
}
export const Messa:Resturants={
    URLImage:"./images/Messa.svg",
    name:"Messa",
    ChefName:"Aviv Moshe",
    Status:"Open now",
    dishes:[]
}
export const NetanThai:Resturants={
    URLImage:"./images/nitanthai.svg",
    name:"Netan Thai",
    ChefName:"Sahaf Shabtay",
    Status:"Open now",
    dishes:[]
}
export const TigerLilly:Resturants={
    URLImage:"./images/tigerLily.svg",
    name:"Tiger Lilly",
    ChefName:"Yanir Green",
    Status:"Open now",
    dishes:[]
}
export const KabKem2:Resturants={
    URLImage:"./images/Kabkem2.svg",
    name:"Kab Kem",
    ChefName:"Yair Malili",
    Status:"Open now",
    dishes:[]
}
export const Messa2:Resturants={
    URLImage:"./images/Messa2.svg",
    name:"Messa",
    ChefName:"Aviv Moshe",
    Status:"Open now",
    dishes:[]
}


 export const AllRestaurants:Resturants[]=[Claro,KabKem,Messa];

