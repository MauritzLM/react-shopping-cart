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
import mouse4 from "./images/mouse7.png";

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
        { id: uuidv4(), brand: 'steelseries', model: 'apex7', price: '100.00', img: keyboard1, instanceId: '' },
        { id: uuidv4(), brand: 'razer', model: 'Sidewinder', price: '100.00', img: keyboard2, instanceId: '' },
        { id: uuidv4(), brand: 'logitech', model: 'k500', price: '100.00', img: keyboard3, instanceId: '' },
        { id: uuidv4(), brand: 'logitech', model: 'k500', price: '100.00', img: keyboard4, instanceId: '' }
    ],
    mice: [
        { id: uuidv4(), brand: 'razer', model: 'viper mini', price: '50.00', img: mouse1, instanceId: '' },
        { id: uuidv4(), brand: 'razer', model: 'viper mini', price: '50.00', img: mouse2, instanceId: '' },
        { id: uuidv4(), brand: 'razer', model: 'viper mini', price: '50.00', img: mouse3, instanceId: '' },
        { id: uuidv4(), brand: 'razer', model: 'viper mini', price: '50.00', img: mouse4, instanceId: '' }
    ],
    headsets: [
        { id: uuidv4(), brand: 'corsair', model: 'c700', price: '70.00', img: headset1, instanceId: '' },
        { id: uuidv4(), brand: 'corsair', model: 'c700', price: '70.00', img: headset2, instanceId: '' },
        { id: uuidv4(), brand: 'corsair', model: 'c700', price: '70.00', img: headset3, instanceId: '' },
        { id: uuidv4(), brand: 'corsair', model: 'c700', price: '70.00', img: headset4, instanceId: '' }
    ],
    controllers: [
        { id: uuidv4(), brand: 'xbox', model: 'series', price: '80', img: controller1, instanceId: '' },
        { id: uuidv4(), brand: 'sony', model: 'ps5', price: '85', img: controller2, instanceId: '' },
        { id: uuidv4(), brand: 'sony', model: 'ps5', price: '85', img: controller3, instanceId: '' },
        { id: uuidv4(), brand: 'sony', model: 'ps5', price: '85', img: controller4, instanceId: '' }
    ]

}



