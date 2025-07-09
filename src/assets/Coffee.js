import Espresso from './images/espresso.jpg';
import Latte from './images/latte.jpg';
import Water from './images/Water.jpg';
import CactusJuice from './images/cactus_juice.jpg';

const products =[   
    {
        id: 1,
        title: "Espresso Coffee",
        image: Espresso,
        price:5.99,
        description: "Not that good",
    },
    {
        id: 2,
        title: "Latte",
        image: Latte,
        price:6.99,
        description: "Terrible",
    },
    {
        id: 3,
        title: "Water",
        image: Water,
        price:2.99,
        description: "That's some high quality H20.",
    },
    {
        id: 3,
        title: "Cactus Juice",
        image: CactusJuice,
        price:10.99,
        description: "It'll quench ya! It's the quenchiest!",
    }   
];

export default products;