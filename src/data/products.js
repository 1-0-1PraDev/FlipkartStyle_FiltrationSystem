import AirPodsImg from '../assets/Product-images/airpods.png';
import ControllerImg from '../assets/Product-images/controller.png';
import GamingControllerImg from '../assets/Product-images/gaming-controller.png';
import MacbookImg from '../assets/Product-images/macbook.png';
import MonitorImg from '../assets/Product-images/monitor.png';
import SmartWatchImg from '../assets/Product-images/smartwatch.png';

export const products = [
  {
    id: 1,
    name: "Mistral MK.1 T-shirt",
    price: 499,
    colors: ["#000000", "#ff9900"], // Black, Orange
    sizes: ["Small", "Medium", "Large"],
    image: AirPodsImg
  },
  {
    id: 2,
    name: "Rookie T-shirt",
    price: 999,
    colors: ["#33cc33", "#ccff66"], // Green shades
    sizes: ["Medium", "Small"],
    image: MacbookImg
  },
  {
    id: 3,
    name: "Explorer Pants",
    price: 1499,
    colors: ["#663300", "#f2e6d9"], // Brown, Beige
    sizes: ["Medium", "Large", "XL"],
    image: ControllerImg
  },
  {
    id: 4,
    name: "Voyager Jacket",
    price: 3499,
    colors: ["#000000", "#ccff66"], // Black, Light Green
    sizes: ["Large", "XL"],
    image: GamingControllerImg
  },
  {
    id: 5,
    name: "Trail Runner Shorts",
    price: 799,
    colors: ["#663300", "#ff9900"], // Brown, Orange
    sizes: ["Small", "Medium"],
    image: MonitorImg
  },
  {
    id: 6,
    name: "AirBoult Smart Watch NS-100",
    price: 2799,
    colors: ["#663320", "#ff99c3"], // Brown, Orange
    sizes: ["Small", "Medium"],
    image: SmartWatchImg
  },
];

export default products;