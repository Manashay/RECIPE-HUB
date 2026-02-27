const recipesData = [
  {
    title: "Classic Eggs Benedict",
    description: "The quintessential brunch dish. Perfectly poached eggs and buttery hollandaise sauce over crispy parma ham.",
    imageUrl: "https://images.unsplash.com/photo-1600335895229-6e75511892c8",
    prepTime: "20 min",
    servings: 2,
    calories: 705,
    tags: ["Breakfast", "Quick Easy"],
    ingredients: [
      { name: "Eggs", quantity: 4, unit: "pcs", added: false },
      { name: "English Muffins", quantity: 2, unit: "pcs", added: false },
      { name: "Parma Ham", quantity: 4, unit: "slices", added: false },
      { name: "Butter", quantity: 100, unit: "grams", added: false },
      { name: "Lemon Juice", quantity: 1, unit: "tbsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Poach the eggs in simmering water with a drop of vinegar." },
      { stepNumber: 2, text: "Toast the split English muffins until golden brown." },
      { stepNumber: 3, text: "Whisk egg yolks and lemon juice while drizzling melted butter to make hollandaise." },
      { stepNumber: 4, text: "Assemble by placing ham, egg, and sauce over the muffins." }
    ],
    rating: { average: 3.5, reviewCount: 707 },
    nutrition: [
      { label: "Fat", value: "64 g" },
      { label: "Carbs", value: "16 g" },
      { label: "Protein", value: "18 g" }
    ],
    isFavorite: true
  },
  {
    title: "Avocado Sourdough Toast",
    description: "Artisan sourdough topped with smashed avocado, chili flakes, and a squeeze of lime.",
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8",
    prepTime: "10 min",
    servings: 1,
    calories: 320,
    tags: ["Breakfast", "Vegan", "Healthy"],
    ingredients: [
      { name: "Sourdough Bread", quantity: 1, unit: "slice", added: false },
      { name: "Avocado", quantity: 1, unit: "pcs", added: false },
      { name: "Chili Flakes", quantity: 1, unit: "tsp", added: false },
      { name: "Lime", quantity: 0.5, unit: "pcs", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Toast the sourdough slice to your preferred crispness." },
      { stepNumber: 2, text: "Mash the avocado in a bowl with lime juice and salt." },
      { stepNumber: 3, text: "Spread the mixture onto the toast and sprinkle chili flakes." }
    ],
    rating: { average: 4.8, reviewCount: 120 },
    nutrition: [
      { label: "Fat", value: "22 g" },
      { label: "Carbs", value: "28 g" },
      { label: "Protein", value: "7 g" }
    ]
  },
  {
    title: "Grilled Salmon Salad",
    description: "Fresh Atlantic salmon over a bed of mixed greens with a zesty lemon vinaigrette.",
    imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
    prepTime: "25 min",
    servings: 2,
    calories: 450,
    tags: ["Lunch", "Gluten-free", "High Protein"],
    ingredients: [
      { name: "Salmon Fillet", quantity: 2, unit: "pcs", added: false },
      { name: "Mixed Greens", quantity: 200, unit: "grams", added: false },
      { name: "Cherry Tomatoes", quantity: 10, unit: "pcs", added: false },
      { name: "Olive Oil", quantity: 2, unit: "tbsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Season salmon with salt and pepper." },
      { stepNumber: 2, text: "Grill salmon for 4-5 minutes per side until flaky." },
      { stepNumber: 3, text: "Toss greens and tomatoes with olive oil and lemon." },
      { stepNumber: 4, text: "Top the salad with the grilled salmon." }
    ],
    rating: { average: 4.9, reviewCount: 85 },
    nutrition: [
      { label: "Fat", value: "28 g" },
      { label: "Carbs", value: "12 g" },
      { label: "Protein", value: "34 g" }
    ]
  },
  {
    title: "Quinoa Buddha Bowl",
    description: "Vibrant bowl filled with roasted chickpeas, kale, sweet potato, and tahini dressing.",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    prepTime: "35 min",
    servings: 4,
    calories: 520,
    tags: ["Lunch", "Vegan", "Nut-free"],
    ingredients: [
      { name: "Quinoa", quantity: 1, unit: "cup", added: false },
      { name: "Chickpeas", quantity: 1, unit: "can", added: false },
      { name: "Sweet Potato", quantity: 1, unit: "large", added: false },
      { name: "Kale", quantity: 2, unit: "cups", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Cook quinoa according to package instructions." },
      { stepNumber: 2, text: "Roast diced sweet potatoes and chickpeas at 200°C for 20 mins." },
      { stepNumber: 3, text: "Massage kale with a little olive oil to soften." },
      { stepNumber: 4, text: "Assemble all components in a bowl and drizzle with tahini." }
    ],
    rating: { average: 4.6, reviewCount: 210 },
    nutrition: [
      { label: "Fat", value: "18 g" },
      { label: "Carbs", value: "65 g" },
      { label: "Protein", value: "15 g" }
    ]
  },
  {
    title: "Spicy Beef Tacos",
    description: "Street-style tacos with slow-cooked beef, fresh cilantro, and white onions.",
    imageUrl: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
    prepTime: "45 min",
    servings: 3,
    calories: 610,
    tags: ["Dinner", "Spicy", "Meat Lovers"],
    ingredients: [
      { name: "Ground Beef", quantity: 500, unit: "grams", added: false },
      { name: "Taco Shells", quantity: 6, unit: "pcs", added: false },
      { name: "Onion", quantity: 1, unit: "pcs", added: false },
      { name: "Cilantro", quantity: 1, unit: "bunch", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Brown the beef in a skillet over medium heat." },
      { stepNumber: 2, text: "Add taco seasoning and a splash of water, simmer for 10 mins." },
      { stepNumber: 3, text: "Warm the taco shells in the oven." },
      { stepNumber: 4, text: "Fill shells with beef and top with chopped onion and cilantro." }
    ],
    rating: { average: 4.7, reviewCount: 340 },
    nutrition: [
      { label: "Fat", value: "32 g" },
      { label: "Carbs", value: "45 g" },
      { label: "Protein", value: "28 g" }
    ]
  },
  {
    title: "Mushroom Risotto",
    description: "Creamy Italian rice dish simmered with wild mushrooms and parmesan.",
    imageUrl: "https://images.unsplash.com/photo-1476124369491-e7addf5db371",
    prepTime: "40 min",
    servings: 2,
    calories: 580,
    tags: ["Dinner", "Vegetarian", "Classic"],
    ingredients: [
      { name: "Arborio Rice", quantity: 1, unit: "cup", added: false },
      { name: "Mushrooms", quantity: 250, unit: "grams", added: false },
      { name: "Vegetable Broth", quantity: 4, unit: "cups", added: false },
      { name: "Parmesan", quantity: 50, unit: "grams", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Sauté mushrooms until golden, then set aside." },
      { stepNumber: 2, text: "Toast rice in a pan, then add broth one ladle at a time." },
      { stepNumber: 3, text: "Stir constantly until rice is creamy and cooked." },
      { stepNumber: 4, text: "Stir in mushrooms, butter, and parmesan before serving." }
    ],
    rating: { average: 4.4, reviewCount: 150 },
    nutrition: [
      { label: "Fat", value: "24 g" },
      { label: "Carbs", value: "70 g" },
      { label: "Protein", value: "12 g" }
    ]
  },
  {
    title: "Berry Smoothie Bowl",
    description: "Thick blend of frozen berries and banana topped with chia seeds and granola.",
    imageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733",
    prepTime: "10 min",
    servings: 1,
    calories: 310,
    tags: ["Breakfast", "Vegan", "Healthy"],
    ingredients: [
      { name: "Mixed Berries", quantity: 1.5, unit: "cups", added: false },
      { name: "Banana", quantity: 1, unit: "pcs", added: false },
      { name: "Almond Milk", quantity: 0.5, unit: "cup", added: false },
      { name: "Granola", quantity: 0.25, unit: "cup", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Blend frozen berries, banana, and milk until thick." },
      { stepNumber: 2, text: "Pour into a bowl." },
      { stepNumber: 3, text: "Top with granola and fresh fruit." }
    ],
    rating: { average: 4.7, reviewCount: 88 },
    nutrition: [
      { label: "Fat", value: "8 g" },
      { label: "Carbs", value: "55 g" },
      { label: "Protein", value: "6 g" }
    ]
  },
  {
    title: "Chicken Caesar Wrap",
    description: "Grilled chicken, crisp romaine, and Caesar dressing in a whole wheat tortilla.",
    imageUrl: "https://images.unsplash.com/photo-1671572579845-52270341950f",
    prepTime: "15 min",
    servings: 1,
    calories: 480,
    tags: ["Lunch", "Quick Easy", "High Protein"],
    ingredients: [
      { name: "Grilled Chicken", quantity: 150, unit: "grams", added: false },
      { name: "Tortilla", quantity: 1, unit: "pcs", added: false },
      { name: "Romaine Lettuce", quantity: 1, unit: "cup", added: false },
      { name: "Caesar Dressing", quantity: 2, unit: "tbsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Lay the tortilla flat and spread dressing." },
      { stepNumber: 2, text: "Add lettuce and sliced chicken." },
      { stepNumber: 3, text: "Fold in the sides and roll tightly." }
    ],
    rating: { average: 4.5, reviewCount: 112 },
    nutrition: [
      { label: "Fat", value: "22 g" },
      { label: "Carbs", value: "38 g" },
      { label: "Protein", value: "32 g" }
    ]
  },
  {
    title: "Red Lentil Dahl",
    description: "Comforting Indian lentil stew served with basmati rice and fresh naan.",
    imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
    prepTime: "40 min",
    servings: 4,
    calories: 390,
    tags: ["Dinner", "Vegan", "Nut-free"],
    ingredients: [
      { name: "Red Lentils", quantity: 1, unit: "cup", added: false },
      { name: "Coconut Milk", quantity: 1, unit: "can", added: false },
      { name: "Turmeric", quantity: 1, unit: "tsp", added: false },
      { name: "Garlic", quantity: 3, unit: "cloves", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Rinse lentils and boil in water until soft." },
      { stepNumber: 2, text: "In a separate pan, sauté garlic, ginger, and spices." },
      { stepNumber: 3, text: "Combine spices with lentils and add coconut milk." },
      { stepNumber: 4, text: "Simmer for 15 minutes until thickened." }
    ],
    rating: { average: 4.8, reviewCount: 260 },
    nutrition: [
      { label: "Fat", value: "10 g" },
      { label: "Carbs", value: "58 g" },
      { label: "Protein", value: "18 g" }
    ]
  },
  {
    title: "Hummus & Pita Plate",
    description: "Creamy homemade hummus served with warm pita bread and olives.",
    imageUrl: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea",
    prepTime: "10 min",
    servings: 2,
    calories: 350,
    tags: ["Snacks", "Vegetarian", "Quick Easy"],
    ingredients: [
      { name: "Chickpeas", quantity: 1, unit: "can", added: false },
      { name: "Tahini", quantity: 3, unit: "tbsp", added: false },
      { name: "Pita Bread", quantity: 2, unit: "pcs", added: false },
      { name: "Olive Oil", quantity: 1, unit: "tbsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Blend chickpeas, tahini, garlic, and lemon until smooth." },
      { stepNumber: 2, text: "Warm the pita bread in a toaster or oven." },
      { stepNumber: 3, text: "Serve hummus drizzled with olive oil alongside pita." }
    ],
    rating: { average: 4.6, reviewCount: 74 },
    nutrition: [
      { label: "Fat", value: "18 g" },
      { label: "Carbs", value: "42 g" },
      { label: "Protein", value: "10 g" }
    ]
  },
  {
    title: "Tuna Poke Bowl",
    description: "Marinated tuna with avocado, edamame, and pickled ginger over rice.",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    prepTime: "20 min",
    servings: 1,
    calories: 490,
    tags: ["Lunch", "Healthy", "Seafood"],
    ingredients: [
      { name: "Sushi Grade Tuna", quantity: 150, unit: "grams", added: false },
      { name: "Sushi Rice", quantity: 1, unit: "cup", added: false },
      { name: "Edamame", quantity: 0.5, unit: "cup", added: false },
      { name: "Soy Sauce", quantity: 2, unit: "tbsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Cook sushi rice and let it cool." },
      { stepNumber: 2, text: "Dice tuna and marinate in soy sauce and sesame oil." },
      { stepNumber: 3, text: "Place rice in a bowl and top with tuna and vegetables." }
    ],
    rating: { average: 4.9, reviewCount: 190 },
    nutrition: [
      { label: "Fat", value: "15 g" },
      { label: "Carbs", value: "52 g" },
      { label: "Protein", value: "36 g" }
    ]
  },
  {
    title: "Shakshuka",
    description: "Eggs poached in a spiced tomato and bell pepper sauce, topped with feta.",
    imageUrl: "https://images.unsplash.com/photo-1590412200988-a436bbd97c19",
    prepTime: "30 min",
    servings: 2,
    calories: 420,
    tags: ["Breakfast", "Vegetarian", "Spicy"],
    ingredients: [
      { name: "Eggs", quantity: 4, unit: "pcs", added: false },
      { name: "Canned Tomatoes", quantity: 400, unit: "grams", added: false },
      { name: "Bell Pepper", quantity: 1, unit: "pcs", added: false },
      { name: "Feta Cheese", quantity: 50, unit: "grams", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Sauté onions and peppers until soft." },
      { stepNumber: 2, text: "Add tomatoes and spices, simmer for 10 minutes." },
      { stepNumber: 3, text: "Make small wells in the sauce and crack eggs into them." },
      { stepNumber: 4, text: "Cover and cook until egg whites are set." }
    ],
    rating: { average: 4.7, reviewCount: 415 },
    nutrition: [
      { label: "Fat", value: "26 g" },
      { label: "Carbs", value: "24 g" },
      { label: "Protein", value: "22 g" }
    ]
  },
  {
    title: "Caprese Skewers",
    description: "Mozzarella balls, cherry tomatoes, and basil drizzled with balsamic.",
    imageUrl: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2",
    prepTime: "15 min",
    servings: 6,
    calories: 120,
    tags: ["Snacks", "Vegetarian", "Gluten-free"],
    ingredients: [
      { name: "Cherry Tomatoes", quantity: 12, unit: "pcs", added: false },
      { name: "Bocconcini", quantity: 12, unit: "pcs", added: false },
      { name: "Fresh Basil", quantity: 12, unit: "leaves", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Thread a tomato, a basil leaf, and a mozzarella ball onto a skewer." },
      { stepNumber: 2, text: "Repeat for all skewers." },
      { stepNumber: 3, text: "Drizzle with balsamic glaze before serving." }
    ],
    rating: { average: 4.8, reviewCount: 56 },
    nutrition: [
      { label: "Fat", value: "8 g" },
      { label: "Carbs", value: "4 g" },
      { label: "Protein", value: "7 g" }
    ]
  },
  {
    title: "Beef Stir Fry",
    description: "Tender steak slices and crunchy veggies tossed in a savory ginger-soy sauce.",
    imageUrl: "https://images.unsplash.com/photo-1512058560366-cd24270083cd",
    prepTime: "20 min",
    servings: 2,
    calories: 540,
    tags: ["Dinner", "Quick Easy", "High Protein"],
    ingredients: [
      { name: "Flank Steak", quantity: 300, unit: "grams", added: false },
      { name: "Broccoli", quantity: 1, unit: "head", added: false },
      { name: "Soy Sauce", quantity: 3, unit: "tbsp", added: false },
      { name: "Ginger", quantity: 1, unit: "tsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Slice beef thinly against the grain." },
      { stepNumber: 2, text: "Stir-fry beef in a hot wok until browned." },
      { stepNumber: 3, text: "Add vegetables and sauce, cook for 3 more minutes." }
    ],
    rating: { average: 4.5, reviewCount: 230 },
    nutrition: [
      { label: "Fat", value: "28 g" },
      { label: "Carbs", value: "22 g" },
      { label: "Protein", value: "42 g" }
    ]
  },
  {
    title: "Sweet Potato Fries",
    description: "Oven-baked wedges seasoned with sea salt and rosemary.",
    imageUrl: "https://images.unsplash.com/photo-1526230427044-d092040d48ac",
    prepTime: "35 min",
    servings: 3,
    calories: 210,
    tags: ["Snacks", "Vegan", "Gluten-free"],
    ingredients: [
      { name: "Sweet Potato", quantity: 2, unit: "large", added: false },
      { name: "Olive Oil", quantity: 2, unit: "tbsp", added: false },
      { name: "Rosemary", quantity: 1, unit: "tsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Cut potatoes into thin wedges." },
      { stepNumber: 2, text: "Toss with oil and seasonings." },
      { stepNumber: 3, text: "Bake at 220°C for 25 minutes until crispy." }
    ],
    rating: { average: 4.4, reviewCount: 118 },
    nutrition: [
      { label: "Fat", value: "7 g" },
      { label: "Carbs", value: "36 g" },
      { label: "Protein", value: "3 g" }
    ]
  },
  {
    title: "Spinach & Feta Omelette",
    description: "A light and fluffy omelette stuffed with fresh baby spinach and tangy feta.",
    imageUrl: "https://images.unsplash.com/photo-1510693206972-df098062cb71",
    prepTime: "12 min",
    servings: 1,
    calories: 380,
    tags: ["Breakfast", "Vegetarian", "Keto"],
    ingredients: [
      { name: "Eggs", quantity: 3, unit: "pcs", added: false },
      { name: "Spinach", quantity: 1, unit: "cup", added: false },
      { name: "Feta", quantity: 30, unit: "grams", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Whisk eggs with salt and pepper." },
      { stepNumber: 2, text: "Sauté spinach in a pan until wilted." },
      { stepNumber: 3, text: "Pour eggs over spinach and cook until set." },
      { stepNumber: 4, text: "Sprinkle feta and fold the omelette." }
    ],
    rating: { average: 4.6, reviewCount: 142 },
    nutrition: [
      { label: "Fat", value: "28 g" },
      { label: "Carbs", value: "4 g" },
      { label: "Protein", value: "24 g" }
    ]
  },
  {
    title: "Falafel Wrap",
    description: "Crispy chickpea falafels with tahini, cucumber, and tomatoes in flatbread.",
    imageUrl: "https://images.unsplash.com/photo-1547050605-2f122ffad19a",
    prepTime: "25 min",
    servings: 1,
    calories: 460,
    tags: ["Lunch", "Vegetarian", "Nut-free"],
    ingredients: [
      { name: "Falafel Balls", quantity: 4, unit: "pcs", added: false },
      { name: "Flatbread", quantity: 1, unit: "pcs", added: false },
      { name: "Cucumber", quantity: 0.25, unit: "pcs", added: false },
      { name: "Tahini", quantity: 1, unit: "tbsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Warm the flatbread and falafels." },
      { stepNumber: 2, text: "Place falafels and veggies on the bread." },
      { stepNumber: 3, text: "Drizzle with tahini and roll up." }
    ],
    rating: { average: 4.7, reviewCount: 205 },
    nutrition: [
      { label: "Fat", value: "20 g" },
      { label: "Carbs", value: "55 g" },
      { label: "Protein", value: "15 g" }
    ]
  },
  {
    title: "Lemon Garlic Shrimp",
    description: "Succulent shrimp sautéed with garlic, lemon, and fresh parsley.",
    imageUrl: "https://images.unsplash.com/photo-1559748148-18e0018610ba",
    prepTime: "15 min",
    servings: 2,
    calories: 310,
    tags: ["Dinner", "Seafood", "Keto"],
    ingredients: [
      { name: "Shrimp", quantity: 300, unit: "grams", added: false },
      { name: "Garlic", quantity: 4, unit: "cloves", added: false },
      { name: "Lemon", quantity: 1, unit: "pcs", added: false },
      { name: "Butter", quantity: 2, unit: "tbsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Melt butter in a skillet over medium-high heat." },
      { stepNumber: 2, text: "Add shrimp and garlic, cook until pink (about 2-3 mins)." },
      { stepNumber: 3, text: "Stir in lemon juice and parsley." }
    ],
    rating: { average: 4.9, reviewCount: 310 },
    nutrition: [
      { label: "Fat", value: "18 g" },
      { label: "Carbs", value: "5 g" },
      { label: "Protein", value: "32 g" }
    ]
  },
  {
    title: "Brioche French Toast",
    description: "Thick brioche slices soaked in vanilla custard and griddled to golden perfection.",
    imageUrl: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
    prepTime: "25 min",
    servings: 2,
    calories: 620,
    tags: ["Breakfast", "Vegetarian", "Indulgent"],
    ingredients: [
      { name: "Brioche Bread", quantity: 4, unit: "slices", added: false },
      { name: "Eggs", quantity: 2, unit: "pcs", added: false },
      { name: "Milk", quantity: 0.5, unit: "cup", added: false },
      { name: "Cinnamon", quantity: 1, unit: "tsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Whisk eggs, milk, vanilla, and cinnamon." },
      { stepNumber: 2, text: "Soak bread slices in the mixture for 1 minute." },
      { stepNumber: 3, text: "Cook in a buttered skillet until golden on both sides." }
    ],
    rating: { average: 4.8, reviewCount: 520 },
    nutrition: [
      { label: "Fat", value: "24 g" },
      { label: "Carbs", value: "82 g" },
      { label: "Protein", value: "14 g" }
    ]
  },
  {
    title: "BBQ Chicken Pizza",
    description: "Tangy BBQ sauce base with chicken, red onions, and fresh cilantro.",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    prepTime: "30 min",
    servings: 4,
    calories: 780,
    tags: ["Dinner", "Meat Lovers", "Quick Easy"],
    ingredients: [
      { name: "Pizza Dough", quantity: 1, unit: "pcs", added: false },
      { name: "BBQ Sauce", quantity: 0.5, unit: "cup", added: false },
      { name: "Mozzarella", quantity: 200, unit: "grams", added: false },
      { name: "Cooked Chicken", quantity: 1, unit: "cup", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Roll out the dough and spread BBQ sauce." },
      { stepNumber: 2, text: "Top with cheese, chicken, and onions." },
      { stepNumber: 3, text: "Bake at 220°C for 12-15 minutes until bubbly." }
    ],
    rating: { average: 4.6, reviewCount: 890 },
    nutrition: [
      { label: "Fat", value: "32 g" },
      { label: "Carbs", value: "88 g" },
      { label: "Protein", value: "45 g" }
    ]
  }
];

module.exports = { data: recipesData };