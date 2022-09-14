export interface Dish{
    ImgURL:string;
    name:string;
    DishType:string;
    signature?:string;
    price:number;
}

export const PadKiMao:Dish={
    ImgURL: "./images/meal1.svg",
    DishType: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    name: "Pad Ki Mao",
    signature: "./images/smallspicy.svg",
    price:88,
}
export const GarbanzoFrito:Dish={
    ImgURL: "./images/GarbanzoFrito.jpeg",
    DishType: "Polenta fingers, veal cheek,magic chili cured lemon cream, yellow laksa",
    name: "Garbanzo Frito",
    signature: "./images/smallvegetarian.svg",
    price:78,
}
export const SmokedPizza:Dish={
    ImgURL: "./images/KabKem2.svg",
    DishType: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    name: "Smoked Pizza",
    signature: "./images/smallvegan.svg",
    price:98,
}
export const PadKiMao2:Dish={
    ImgURL: "./images/Padkimao2.svg",
    DishType: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    name: "Pad Ki Mao",
    signature: "./images/smallvegetarian.svg",
    price:65,
}
export const taMaLaKo:Dish={
    ImgURL: "./images/taMaLaKo.svg",
    DishType: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
    name: "ta Ma La Ko",
    signature: "./images/smallspicy.svg",
    price:65,
}
export const RedFarm:Dish={
    ImgURL: "./images/RedFarm.svg",
    DishType: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
    name: "Red Farm",
    signature: "./images/smallvegetarian.svg",
    price:65,
}

export const CardDishs:Dish[]=[PadKiMao,GarbanzoFrito,SmokedPizza];
