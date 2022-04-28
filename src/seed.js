export function seedDatabase(firebase) {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
    /* eslint-enable */
  }

  firebase
    .firestore()
    .collection("products")
    .add({
      id: getUUID(),
      name: "Men Button Through Solid Shirt",
      price: 1500,
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/09/18/163194135173dd9236d76f076f31089fa7c4069532_thumbnail_600x.webp",
      colors: ["#ff0000", "#00ff00", "#0000ff", "#000"],
      sex: "man",
      company: "ABC",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magni ratione doloremque perferendis reiciendis eius officiis laborum voluptatum veniam maxime odio, iste perspiciatis quaerat provident ea eaque, itaque sapiente eveniet? Fugit assumenda maxime blanditiis iste quia vero reprehenderit voluptatum temporibus.",
      category: "t-shirts",
      shipping: true,
    });
  firebase
    .firestore()
    .collection("products")
    .add({
      id: getUUID(),
      name: "Men Floral Print Tee",
      price: 1500,
      image:
        "https://img.ltwebstatic.com/images3_pi/2022/03/28/16484347957c48c54ccc963853a1bb30495469dd3e_thumbnail_600x.webp",
      colors: ["#ff0000", "#ffb900"],
      sex: "man",
      company: "zara",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magni ratione doloremque perferendis reiciendis eius officiis laborum voluptatum veniam maxime odio, iste perspiciatis quaerat provident ea eaque, itaque sapiente eveniet? Fugit assumenda maxime blanditiis iste quia vero reprehenderit voluptatum temporibus.",
      category: "t-shirts",
      shipping: false,
    });
  firebase
    .firestore()
    .collection("products")
    .add({
      id: getUUID(),
      name: "Men Letter Patched Detail Pocket Front Shirt Without Tee",
      price: 1500,
      image:
        "https://img.ltwebstatic.com/images3_pi/2022/02/25/1645781080f171890f166b5c029b5b31662fc1844d_thumbnail_600x.webp",
      colors: ["#ff0000", "#00ff00", "#ffb900"],
      sex: "man",
      company: "zara",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magni ratione doloremque perferendis reiciendis eius officiis laborum voluptatum veniam maxime odio, iste perspiciatis quaerat provident ea eaque, itaque sapiente eveniet? Fugit assumenda maxime blanditiis iste quia vero reprehenderit voluptatum temporibus.",
      category: "t-shirts",
      shipping: false,
    });
}

// red: #ff0000
// green: #00ff00
// dark-blue: #0000ff
// black :#000
// light-yellow: #ffb900
// brown: #A52A2A
// gray: #808080
// pink: #FF00FF

// {
//   "id": "recZkNf2kwmdBcqd0",
//   "name": "accent chair",
//   "price": 25999,
//   "image": "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160?ts=1651103827&userId=usrQMwWEPx18KgLcP&cs=3a2464351c5187e5",
//   "colors": [
//   "#ff0000",
//   "#00ff00",
//   "#0000ff"
//   ],
//   "company": "marcos",
//   "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//   "category": "office",
//   "shipping": true
//   },
