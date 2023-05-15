import { v4 as uuidv4 } from "uuid";

export const inventory = {
    keyboards: [
        { id: uuidv4(), brand: 'steelseries', model: 'k500', price: '100.00', img: '', instanceId: '' }
    ],
    mice: [
        { id: uuidv4(), brand: 'razer', model: 'viper mini', price: '50.00', img: '', instanceId: '' }
    ],
    headsets: [
        { id: uuidv4(), brand: 'corsair', model: 'c700', price: '70.00', img: '', instanceId: '' }
    ],
    controllers: [
        { id: uuidv4(), brand: 'xbox', model: 'series', price: '80', img: '', instanceId: '' }
    ]

}



