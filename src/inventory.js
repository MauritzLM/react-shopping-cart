import { v4 as uuidv4 } from "uuid";
// keyboard images
import keyboard1 from "./images/keyboard1.jpeg";
import keyboard2 from "./images/keyboard7.jpeg";
import keyboard3 from "./images/keyboard8.jpeg";
import keyboard4 from "./images/keyboard5.jpeg";

// mouse images
import mouse1 from "./images/mouse9.png";
import mouse2 from "./images/mouse8.png";
import mouse3 from "./images/mouse6.png";
import mouse4 from "./images/mouse4.png";

// headset images
import headset1 from "./images/headset1.jpeg";
import headset2 from "./images/headset2.jpeg";
import headset3 from "./images/headset3.jpeg";
import headset4 from "./images/steelseries.jpeg";

// controller images
import controller1 from "./images/ps4-black.jpeg";
import controller2 from "./images/ps4-camo.jpeg";
import controller3 from "./images/xbox1.jpeg";
import controller4 from "./images/xbox2.jpeg";


export const inventory = {
    keyboards: [
        { id: uuidv4(), brand: 'Asus', model: 'TUF Gaming', price: '95.99', img: keyboard1, instanceId: '' },
        { id: uuidv4(), brand: 'Cooler Master', model: 'CK721', price: '105.89', img: keyboard2, instanceId: '' },
        { id: uuidv4(), brand: 'Logitech', model: 'TKL SE', price: '110.89', img: keyboard3, instanceId: '' },
        { id: uuidv4(), brand: 'Keychron', model: 'Tenkeyless', price: '149.99', img: keyboard4, instanceId: '' }
    ],
    mice: [
        { id: uuidv4(), brand: 'Cougar', model: 'Minos X5', price: '69.99', img: mouse1, instanceId: '' },
        { id: uuidv4(), brand: 'Corsair', model: 'Scimitar', price: '149.99', img: mouse2, instanceId: '' },
        { id: uuidv4(), brand: 'Logitech', model: 'G502', price: '139.99', img: mouse3, instanceId: '' },
        { id: uuidv4(), brand: 'Gigabyte', model: 'Aorus M4', price: '59.89', img: mouse4, instanceId: '' }
    ],
    headsets: [
        { id: uuidv4(), brand: 'Redragon', model: 'H510', price: '79.99', img: headset1, instanceId: '' },
        { id: uuidv4(), brand: 'HyperX', model: 'Cloud Wireless', price: '89.99', img: headset2, instanceId: '' },
        { id: uuidv4(), brand: 'Redragon', model: 'Lamia 2', price: '75.99', img: headset3, instanceId: '' },
        { id: uuidv4(), brand: 'Steelseries', model: 'Arctis 7', price: '200.99', img: headset4, instanceId: '' }
    ],
    controllers: [
        { id: uuidv4(), brand: 'Playstation', model: 'ps4 Black', price: '59.99', img: controller1, instanceId: '' },
        { id: uuidv4(), brand: 'Playstation', model: 'ps4 Camo', price: '65.99', img: controller2, instanceId: '' },
        { id: uuidv4(), brand: 'Xbox', model: 'Series White', price: '85.99', img: controller3, instanceId: '' },
        { id: uuidv4(), brand: 'Xbox', model: 'Series Black', price: '85.99', img: controller4, instanceId: '' }
    ]

}



