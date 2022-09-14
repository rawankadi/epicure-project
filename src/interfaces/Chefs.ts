export interface chefs{
    PictureURL:string;
    name:string;
    description:string;
    restaurants:[
        {
            resImage:string;
            name:string;
        }
    ]
}

export const chefOfTheWeek={
    PicturURL:'./images/Yossi.svg',
    name:'Yossi Shitrit',
    description:'Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit is creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.',
    restaurants: [
        {
            resImage:'./images/Onza.svg',
            name: 'Onza',
        },
        {
            resImage:'./images/KitchenMarketPic.svg',
            name: 'Kitchen Market',
        },
        {
            resImage:'./images/Mashya.svg',
            name: 'Mashya',
        },

    ]
}

