// products.js

// decided to move the product items to their own component for less clutter and seperation of concerns and readability.

// import pictures for i can use them throughout
import Pics from "./Images/02-5-320x320.jpg";
import Pic2 from "./Images/02-12-320x320.jpg";
import Pic3 from "./Images/02-17-320x320.jpg";

const products = [
  {
    id: 1,
    title: "Waiting",
    description:
      "Captain Hook's favourite rose from Peter Pan before he went to the dark side.",
    price: 450,
    image: Pic3,
  },
  {
    id: 2,
    title: "40 Knights",
    description: "A rose from Jafar to the Sultan.",
    price: 450,
    image: Pic2,
  },
  {
    id: 3,
    title: "Bad Boy for Life",
    description:
      "A momento from Mulan to her people after she disposed of Li Shang (he was boring) and ran away with Shan Yu.",
    price: 450,
    image: Pic3,
  },
  {
    id: 4,
    title: "Kinapped",
    description:
      "A thorny rose from Pocahontas, a reminder that the Disney movie was a lie and she was KIDNAPPED.",
    price: 450,
    image: Pics,
  },
  {
    id: 5,
    title: "Asta Rose",
    description: '"Believing in yourself is my super power." To SISTA !',
    price: 450,
    image: Pic2,
  },
];

export default products;
