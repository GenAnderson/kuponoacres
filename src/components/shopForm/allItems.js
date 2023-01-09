const allItems = [
  {
    id: 1,
    name: "Sunflower Shoots",
    flavor: "Nutty, toasty, hint of lemon",
    description:
      "Sunflower shoots provide a unique texture and compliments any salad or sandwich by adding volume, crunch, and nutrition. Its fresh, crisp flavor and nutty aftertaste also does well when added to a smoothie or used for dipping. High in protein and full of living enzymes, these shoots contain 61x more vitamin C, 48x more vitamin K when compared with dried sunflower seeds.",
    nutrients:
      "Vitamins A, B, D, E, protein, omega fatty acids, calcium, iron, magnesium, zinc",
    price: 7.5,
    photo: require("../../images/prod1.png"),
    category: "Home & Health Menu",
  },

  {
    id: 2,
    name: "Broccoli",
    flavor: "Mild broccoli or cabbage flavor",
    description:
      "Broccoli microgreens are known for their mild and palatable taste in comparison to its mature version. Broccoli microgreens contain 19x the vitamin A, 32x the vitamin K, and on average 100x more sulforaphane (anti-cancer/heart health) than its mature version. Broccoli should be a staple in any microgreen diet and will certainly change the way you view this veggie raw.",
    nutrients:
      "Vitamins A, B, C, E, K, calcium, magnesium, phosphorus, iron, copper, zinc",
    price: 7.5,
    photo: require("../../images/prod2.png"),
    category: "Home & Health Menu",
  },

  {
    id: 3,
    name: "Kale",
    flavor: "Mild broccoli flavor with nutty aftertaste",
    description:
      "One of our most popular, Kale is known for its palatable taste, crisp texture, and resembles nothing of its full-grown version. As a microgreen Kale contains 58x the vitamin K, and 47x-1520x the sulforaphane (anti-cancer/heart health) of its mature version. Micro Kale is a must!",
    nutrients:
      "Vitamins A, C, K, calcium, potassium, zinc, magnesium, iron, fiber",
    price: 7.5,
    photo: require("../../images/prod3.png"),
    category: "Home & Health Menu",
  },

  {
    id: 4,
    name: "Red Acre Cabbage",
    flavor: "Rich, sweet cabbage flavor with a mild spicy aftertaste",
    description:
      "Red cabbage is traditionally known for its high mineral content and vitamins. As a microgreen it provides 166x the calcium, 10x the vitamin A, and 57x the vitamin K when compared with its mature version. Tender and mild in flavor, this is a great way to consume your red cabbage.",
    nutrients:
      "Vitamins A, C, K, calcium, iron, magnesium, phosphorus, potassium, zinc",
    price: 7.5,
    photo: require("../../images/prod4.png"),
    category: "Home & Health Menu",
  },

  {
    id: 5,
    name: "Mizuna Mustard",
    flavor: "Light mustard flavor, mild peppery flavor, hint of broccoli",
    description:
      "Mizuna also known as Japanese Mustard is by far the mildest of the three mustard greens that we grow. This microgreen is rich in antioxidants and high in vitamins A, C, and K. Mizuna microgreens are a great addition to any salad and are an excellent substitute as a milder arugula.",
    nutrients: "Vitamins A, C, K, calcium, iron, antioxidants, fiber",
    price: 7.5,
    photo: require("../../images/prod5.png"),
    category: "Home & Health Menu",
  },

  {
    id: 6,
    name: "Wasabi Mustard",
    flavor: "Bold mustard flavor, mild bitterness, spicy, wasabi",
    description:
      "In Japanese the name “Wasabina” literally means “like wasabi” and refers to the hint of wasabi you will experience after biting into this one. The boldest and spiciest of the three microgreen mustards that we offer, this microgreen is often paired with sashimi or sushi. Wasabina microgreens are rich in vitamins A, B, and C as well as anti-cancer phytochemicals.",
    nutrients:
      "Vitamins A, B, C, E, K, calcium, manganese, antioxidants, fiber",
    price: 7.5,
    photo: require("../../images/prod6.png"),
    category: "Home & Health Menu",
  },

  {
    id: 7,
    name: "Arugula Mustard",
    flavor: "Mustard, tangy, peppery, spicy",
    description:
      "Micro Arugula is mild when compared to its mature version. It has a subtle sweet, tangy, peppery, and earthy flavor finished with a nutty aftertaste. Packed with vitamin K and calcium, it supports bone health while also being a good source of vitamin C to support the immune system and helps with absorption of iron, potassium, and folate.",
    nutrients: "Vitamins C, K, calcium, magnesium, phosphorus, iron",
    price: 7.5,
    photo: require("../../images/prod7.png"),
    category: "Home & Health Menu",
  },

  {
    id: 8,
    name: "Daikon Radish",
    flavor: "Peppery, spicy, mild radish",
    description:
      "Daikon radish microgreens are found to have one of the greatest tocopherol concentrations, a type of vitamin E that helps to protect cells. As a microgreen Daikon contains 2x the calcium, 5x the vitamin C, and 11,000x more vitamin K than its mature version. Daikon microgreens are a great addition to a dish you want to add a slight kick without being overwhelmed by radish.",
    nutrients:
      "Vitamins A, B, C, E, K, calcium, iron, magnesium, phosphorus, potassium, zinc",
    price: 7.5,
    photo: require("../../images/prod8.png"),
    category: "Home & Health Menu",
  },

  {
    id: 9,
    name: "Rambo Purple Radish",
    flavor: "Peppery, spicy, nutty, heavy radish",
    description:
      "The spiciest of the microgreens that we offer, Rambo Radish is well known for its extremely high levels of vitamin A, C, and K. As a microgreen Rambo Radish contains approximately 10,000x to 20,000x more vitamin A, and 1000x-2000x more vitamin K than its mature version.",
    nutrients:
      "Vitamins A, B, C, E, K, calcium, iron, magnesium, phosphorus, potassium, zinc, and essential amino acids",
    price: 7.5,
    photo: require("../../images/prod9.png"),
    category: "Home & Health Menu",
  },

  {
    id: 10,
    name: "Radish Mix",
    flavor: "Spicy",
    description:
      "(Rambo radish, daikon radish, china rose radish) This Radish Mix is designed to add a kick of spice to any plate while maintaining balance and palatability. In addition to its unique flavor profile our Radish Mix is also packed with a spectrum if B vitamins making it not only delicious but nutritious as well.",
    price: 7.5,
    photo: require("../../images/prod10.png"),
    category: "Home & Health Menu",
  },
  {
    id: 11,
    name: "Kūpono Acres Micro Mix",
    flavor: "Mild",
    description:
      "(Red Acre Cabbage, Broccoli, Red Mizuna, Amaranth) Our signature Kupono Acres Micro Mix is designed with mildness, balance, and visual appeal in mind. This balance allows for our micro mix to be used to garnish any plate while its mild flavor profile allows for flexible pairing with a variety of food types. This is a must have for any home chef looking to dress up their plates.",
    price: 7.5,
    photo: require("../../images/prod11.png"),
    category: "Home & Health Menu",
  },
  {
    id: 12,
    name: "Keiki Essentials",
    flavor: "Mild",
    description:
      "(Broccoli, Cauliflower, Kohlrabi, Red Acre Cabbage) The ULTIMATE parent hack blend containing essential nutrients to help with child development. Rich in calcium (supports bone development), iron (promotes healthy red blood cells and regulates central nervous system cell division), zinc (necessary for the creation of DNA, cell growth, healthy immune system), and B vitamins (maintains healthy brain cells). Mild and tender, parents can easily hide this blend in smoothies, meals, or as a nutrient dense salad with a serving size 10-25% that of a traditional sized salad.",
    price: 7.5,
    photo: require("../../images/prod12.png"),
    category: "Functional Food Menu",
  },
  {
    id: 13,
    name: "Ultimate Nutrition",
    flavor: "Mild mustard, radish kick, hint of pepper",
    description:
      "(Cauliflower, Garden Cress, Rapini, Radish Blend- China Rose, Daikon, Rambo Purple) The Ultimate Nutrition Blend provides some of the highest nutritional value in microgreens. This blend is high in vitamins A, C, K, E, and B vitamins while also providing a wide range of nutrients like calcium, magnesium, phosphorus, potassium, iron, and zinc. Its bold flavor is correlated with its nutritional value and can be an excellent addition in salads, soups, sushi, or used as a garnish. We recommend this blend for those who are interested in boosting nutrition, while also being able to palate its bold flavor.",
    price: 7.5,
    photo: require("../../images/prod13.png"),
    category: "Functional Food Menu",
  },
  {
    id: 14,
    name: "Immune Booster",
    flavor: "Mild, hint of mustard",
    description:
      "(Amaranth, Cauliflower, Kohlrabi Turnip, Rapini) A nutrient dense blend of immune boosting microgreens focusing on vitamin C, vitamin A, vitamin E, iron, and zinc. These microgreens are by far some of the most concentrated in these specific nutrients and minerals making it an excellent selection for anyone looking to boost their immune system. This mild blend can easily be blended into a smoothie, added to a sandwich, used as garnish for eggs, or just mixed into a salad.",
    price: 7.5,
    photo: require("../../images/prod14.png"),
    category: "Functional Food Menu",
  },
  {
    id: 15,
    name: "Heart Healthy",
    flavor: "Mild, hint of mustard",
    description:
      "(Cauliflower, Chinese Cabbage, Green Mizuna) A nutrient dense blend filled with heart healthy microgreens focusing on potassium, magnesium, calcium, and B vitamins. These nutrients and minerals are essential for maintaining a robust cardiovascular system while supporting overall heart health. This blend works well with sandwiches, salads, and for plating and garnishing fish dishes.",
    price: 7.5,
    photo: require("../../images/prod15.png"),
    category: "Functional Food Menu",
  },
  {
    id: 16,
    name: "Superfood",
    flavor: "Mild",
    description:
      "(Broccoli, Brussel Sprout, Kohlrabi Turnip, Kale) The Superfood Blend is a hand selected choice of veggie microgreens that provide a full spectrum and extremely high concentration of vitamins, nutrients, and minerals. This unique blend of the nutritionally dense microgreen versions of well-known superfoods is as nutritious as it gets. Versatile in its uses, throw a handful of these raw superfoods in your smoothie and we promise, you won't even know it's there!",
    price: 7.5,
    photo: require("../../images/prod16.png"),
    category: "Functional Food Menu",
  },

  {
    id: 17,
    name: "Bundle 5",
    price: 35,
    description:
      "Includes: your choice of 5 x 24 fluid oz. microgreen containers",
    photo: require("../../images/bun5.jpg"),
    countSelection: 5,
    items: [],
  },
  {
    id: 18,
    name: "Bundle 6",
    price: 40,
    description:
      "Includes: your choice of 6 x 24 fluid oz. microgreen containers",
    photo: require("../../images/bun6.jpg"),
    countSelection: 6,
    items: [],
  },
  {
    id: 19,
    name: "Bundle 7",
    price: 45,
    description:
      "Includes: your choice of 7 x 24 fluid oz. microgreen containers",
    photo: require("../../images/bun7.jpg"),
    countSelection: 7,
    items: [],
  },

  {
    id: 20,
    name: "Bulk Order Bundle",
    price: 38,
    description:
      "Includes: your choice of 3 x 48 fluid oz. microgreen containers",
    photo: require("../../images/bunbulk.jpg"),
    countSelection: 3,
    items: [],
  },
];

export default allItems;
