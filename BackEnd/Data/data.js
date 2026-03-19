const recipesData = [
 {
    title: "Cheese Schezwan Masala Dosa",
    description: "#GA4 #week17 #cheese – A very famous street-food dosa loaded with schezwan-spiced veggies, mashed potato, and grated cheese. Quick Indian fusion at its best.",
    imageUrl: "https://img-global.cpcdn.com/recipes/378d352c4be24b08/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 2,
    calories: 487,
    tags: ["spicy dosa recipe", "cheesy breakfast", "quick Indian fusion"],
    ingredients: [
      { name: "Dosa Batter", quantity: 2, unit: "cup", added: false },
      { name: "Cheese Cubes (grated)", quantity: 2, unit: "pcs", added: false },
      { name: "Onion (big, sliced)", quantity: 1, unit: "pcs", added: false },
      { name: "Tomato (big, chopped)", quantity: 1, unit: "pcs", added: false },
      { name: "Cabbage (shredded)", quantity: 1, unit: "cup", added: false },
      { name: "Tomato Sauce", quantity: 4, unit: "tsp", added: false },
      { name: "Ginger Garlic Paste", quantity: 2, unit: "tsp", added: false },
      { name: "Red Chilli Powder", quantity: 1, unit: "tsp", added: false },
      { name: "Salt", quantity: 0.5, unit: "tsp", added: false },
      { name: "Butter / Oil", quantity: 2, unit: "tsp", added: false },
      { name: "Boiled Potato (mashed)", quantity: 1, unit: "pcs", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Chop all vegetables and keep aside." },
      { stepNumber: 2, text: "Heat dosa tawa. Spread butter, wipe out with cloth. Spread dosa batter. Put all veggies one by one. Mix tomato sauce and ginger garlic paste, spread over dosa. Mash with potato masher." },
      { stepNumber: 3, text: "Grate cheese over dosa. Roll the dosa and cut into pieces. Serve hot with sauce, decorated with cheese and coriander." }
    ],
    rating: { average: 4.5, reviewCount: 2 },
    nutrition: [
      { label: "Calories", value: "487 kcal" },
      { label: "Carbohydrates", value: "72 g" },
      { label: "Protein", value: "14 g" },
      { label: "Fat", value: "16 g" },
      { label: "Saturated Fat", value: "7 g" },
      { label: "Fiber", value: "4 g" },
      { label: "Calcium", value: "210 mg" },
      { label: "Sodium", value: "680 mg" }
    ],
    isFavorite: false
  },
 
  // ── 42 ──────────────────────────────────────────────────────────────────────
  {
    title: "Rava Upma",
    description: "One of the many things to do with sooji (rava) is upma — a healthy breakfast meal topped with veggies and peanuts, wholesome and rich in taste. #breakfast",
    imageUrl: "https://img-global.cpcdn.com/recipes/762792ad0c116a86/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 2,
    calories: 316,
    tags: ["easy breakfast", "semolina recipe", "quick savory dish"],
    ingredients: [
      { name: "Rava / Semolina (roasted)", quantity: 100, unit: "grams", added: false },
      { name: "Cumin Seeds", quantity: 2, unit: "tbsp", added: false },
      { name: "Black Mustard Seeds", quantity: 2, unit: "tbsp", added: false },
      { name: "Carrots (finely chopped)", quantity: 3, unit: "pcs", added: false },
      { name: "Onion (finely chopped)", quantity: 1, unit: "pcs", added: false },
      { name: "Curry Leaves", quantity: 6, unit: "pcs", added: false },
      { name: "Roasted Chana Dal (split chickpeas)", quantity: 4, unit: "tbsp", added: false },
      { name: "Peanuts", quantity: 1, unit: "cup", added: false },
      { name: "Green Chillies (slit)", quantity: 3, unit: "pcs", added: false },
      { name: "Ghee", quantity: 4, unit: "tbsp", added: false },
      { name: "Salt", quantity: 1, unit: "tsp", added: false },
      { name: "Water", quantity: 2, unit: "cup", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Roast the rava beforehand and keep aside. In a frying pan add the chopped onions, carrots, peanuts, and split chickpeas. Stir-fry until lightly cooked." },
      { stepNumber: 2, text: "Take ghee in a pan and let it melt. Add cumin and black mustard seeds, let them splutter. Add curry leaves and green chillies. Pour the roasted rava into the pan and mix well. Add the stir-fried veggies and continue stirring. Add water, adjust salt and sugar accordingly. Cover and cook until rava absorbs all water. Serve hot." }
    ],
    rating: { average: 4.5, reviewCount: 0 },
    nutrition: [
      { label: "Calories", value: "316 kcal" },
      { label: "Carbohydrates", value: "42 g" },
      { label: "Protein", value: "9 g" },
      { label: "Fat", value: "13 g" },
      { label: "Saturated Fat", value: "5 g" },
      { label: "Fiber", value: "5 g" },
      { label: "Iron", value: "2.8 mg" },
      { label: "Sodium", value: "420 mg" }
    ],
    isFavorite: false
  },
 
  // ── 43 ──────────────────────────────────────────────────────────────────────
  {
    title: "Kanda Poha (Bombay Style Onion Poha)",
    description: "Bombay-style onion poha (rice flakes) — one of the healthiest breakfasts ever for weight-loss. Light, flavourful and ready in minutes.",
    imageUrl: "https://img-global.cpcdn.com/recipes/e8a846176cbe5999/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 4,
    calories: 280,
    tags: ["quick breakfast", "easy Indian recipe", "savory snack"],
    ingredients: [
      { name: "Rice Flakes (Poha)", quantity: 2, unit: "cup", added: false },
      { name: "Onion (medium, finely chopped)", quantity: 1, unit: "pcs", added: false },
      { name: "Boiled Peas", quantity: 0.5, unit: "cup", added: false },
      { name: "Peanuts", quantity: 2, unit: "tbsp", added: false },
      { name: "Curry Leaves", quantity: 6, unit: "pcs", added: false },
      { name: "Sweet Corn (for kids, optional)", quantity: 0.33, unit: "cup", added: false },
      { name: "Green Chilli (finely chopped, optional)", quantity: 1, unit: "pcs", added: false },
      { name: "Salt", quantity: 1, unit: "tsp", added: false },
      { name: "Black Pepper", quantity: 0.5, unit: "tsp", added: false },
      { name: "Chaat Masala", quantity: 0.5, unit: "tsp", added: false },
      { name: "Turmeric", quantity: 1, unit: "tsp", added: false },
      { name: "Lemon Juice", quantity: 2, unit: "tbsp", added: false },
      { name: "Mustard Seeds (rai)", quantity: 1, unit: "tsp", added: false },
      { name: "Oil", quantity: 2, unit: "tbsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Gently wash rice flakes and rinse all water. Keep aside. Dry-roast peanuts until they crack. Remove from pan." },
      { stepNumber: 2, text: "Add 2 tbsp oil to the pan, add mustard seeds and let them pop. Then add all ingredients (curry leaves, onion, green chilli, turmeric, salt, pepper, chaat masala, peas, sweet corn) and sauté for 5 minutes." },
      { stepNumber: 3, text: "Add washed poha and lemon juice. Mix gently. Garnish with coriander (optional). Serve." }
    ],
    rating: { average: 4.5, reviewCount: 0 },
    nutrition: [
      { label: "Calories", value: "280 kcal" },
      { label: "Carbohydrates", value: "46 g" },
      { label: "Protein", value: "6 g" },
      { label: "Fat", value: "8 g" },
      { label: "Fiber", value: "4 g" },
      { label: "Iron", value: "2.2 mg" },
      { label: "Vitamin C", value: "18 mg" },
      { label: "Sodium", value: "380 mg" }
    ],
    isFavorite: false
  },
 
  // ── 44 ──────────────────────────────────────────────────────────────────────
  {
    title: "Aloo Paratha",
    description: "Aloo Paratha is a famous staple dish of India — spiced potato stuffing packed with fresh herbs stuffed into whole wheat flatbread. Step-by-step using pantry-friendly ingredients.",
    imageUrl: "https://og-image.cookpad.com/global/us/recipe/24551531?t=1741955903",
    prepTime: "30 min",
    servings: 4,
    calories: 518,
    tags: ["stuffed flatbread", "spiced potatoes", "homemade breakfast"],
    ingredients: [
      { name: "Boiled Potatoes (small)", quantity: 7, unit: "pcs", added: false },
      { name: "Ginger Paste / Grated Ginger", quantity: 1, unit: "tbsp", added: false },
      { name: "Green Chilli Paste / Chopped Chillies", quantity: 1, unit: "tbsp", added: false },
      { name: "Dry Roasted Coarse Coriander Seeds", quantity: 1.5, unit: "tsp", added: false },
      { name: "Red Chilli Powder", quantity: 1.5, unit: "tsp", added: false },
      { name: "Coriander Powder", quantity: 1.5, unit: "tsp", added: false },
      { name: "Carom Seeds (ajwain)", quantity: 0.5, unit: "tsp", added: false },
      { name: "Chaat Masala", quantity: 0.5, unit: "tsp", added: false },
      { name: "Garam Masala", quantity: 0.5, unit: "tsp", added: false },
      { name: "Dry Roasted Coarse Fennel Seeds", quantity: 0.5, unit: "tsp", added: false },
      { name: "Turmeric Powder", quantity: 0.25, unit: "tsp", added: false },
      { name: "Fresh Coriander (chopped)", quantity: 1, unit: "cup", added: false },
      { name: "Fresh Mint (chopped)", quantity: 0.25, unit: "cup", added: false },
      { name: "Red Onion (finely chopped)", quantity: 1, unit: "pcs", added: false },
      { name: "Salt", quantity: 1, unit: "tsp", added: false },
      { name: "Paratha Dough (whole wheat)", quantity: 2, unit: "cup", added: false },
      { name: "Ghee / Oil (for cooking)", quantity: 4, unit: "tbsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "In a mixing bowl, mash the boiled potatoes well." },
      { stepNumber: 2, text: "Add all the spices along with salt." },
      { stepNumber: 3, text: "Add chopped coriander, mint, and red onions." },
      { stepNumber: 4, text: "Mix everything well to form the stuffing." },
      { stepNumber: 5, text: "Make uniform balls from paratha dough. Take one ball, dust the rolling surface with flour, and roll to about 6 inches. Add aloo stuffing in the middle." },
      { stepNumber: 6, text: "Gather all sides together, making pleats, and join in the middle. Pinch off excess dough and flatten with hands." },
      { stepNumber: 7, text: "Keep dusting with flour as needed. Roll gently, rotating clockwise so stuffing doesn't spread out." },
      { stepNumber: 8, text: "Heat a roti tava or iron skillet. Gently transfer rolled paratha onto skillet." },
      { stepNumber: 9, text: "Flip after 2–3 minutes and cook the other side. Add oil or ghee and cook on both sides until golden brown." },
      { stepNumber: 10, text: "Apply ghee or butter and enjoy with chai, pickle, or chutney." }
    ],
    rating: { average: 4.5, reviewCount: 4 },
    nutrition: [
      { label: "Calories", value: "518 kcal" },
      { label: "Carbohydrates", value: "80 g" },
      { label: "Protein", value: "12 g" },
      { label: "Fat", value: "18 g" },
      { label: "Saturated Fat", value: "7 g" },
      { label: "Fiber", value: "8 g" },
      { label: "Potassium", value: "760 mg" },
      { label: "Iron", value: "3.6 mg" }
    ],
    isFavorite: false
  },
 
  // ── 45 ──────────────────────────────────────────────────────────────────────
  {
    title: "Nutritious Besan Cheela",
    description: "A healthy gram-flour savoury pancake loaded with vegetables and spices — a delicious change for your taste buds while staying healthy. #mommasrecipes #veggies",
    imageUrl: "https://img-global.cpcdn.com/recipes/07a5118f3b4a58a5/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 2,
    calories: 437,
    tags: ["healthy breakfast", "chickpea flour recipe", "quick savory pancake"],
    ingredients: [
      { name: "Green Onion (finely chopped)", quantity: 0.5, unit: "cup", added: false },
      { name: "Red Onion (finely chopped)", quantity: 0.5, unit: "cup", added: false },
      { name: "Green Chilli (chopped)", quantity: 1, unit: "pcs", added: false },
      { name: "Tomato (small, finely chopped)", quantity: 1, unit: "pcs", added: false },
      { name: "Coriander / Parsley Leaves", quantity: 2, unit: "tbsp", added: false },
      { name: "Gram Flour (besan)", quantity: 1, unit: "cup", added: false },
      { name: "Curd", quantity: 2, unit: "tsp", added: false },
      { name: "Salt", quantity: 1, unit: "tbsp", added: false },
      { name: "Red Chilli Powder", quantity: 1, unit: "tsp", added: false },
      { name: "Turmeric", quantity: 1, unit: "tsp", added: false },
      { name: "Chaat Masala (optional)", quantity: 1, unit: "tsp", added: false },
      { name: "Cumin Seeds", quantity: 1, unit: "tsp", added: false },
      { name: "Mustard Seeds", quantity: 1, unit: "tsp", added: false },
      { name: "Coriander Powder (optional)", quantity: 1, unit: "tsp", added: false },
      { name: "Garam Masala", quantity: 1, unit: "tsp", added: false },
      { name: "Asafetida (hing)", quantity: 1, unit: "pinch", added: false },
      { name: "Black Pepper", quantity: 0.5, unit: "tsp", added: false },
      { name: "Carom Seeds (ajwain)", quantity: 1, unit: "tsp", added: false },
      { name: "Oil (for roasting)", quantity: 2, unit: "tbsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Mix all the ingredients together. Slowly add water according to desired thickness of the batter." },
      { stepNumber: 2, text: "Make a smooth, thick batter without any lumps." },
      { stepNumber: 3, text: "Heat a non-stick pan with a little oil. Pour one spoon of batter and spread slightly with spatula." },
      { stepNumber: 4, text: "Keep on low flame; when it starts cooking, turn flame to medium." },
      { stepNumber: 5, text: "Roast from both sides until golden. Enjoy with homemade tamarind sauce." }
    ],
    rating: { average: 4.5, reviewCount: 0 },
    nutrition: [
      { label: "Calories", value: "437 kcal" },
      { label: "Carbohydrates", value: "58 g" },
      { label: "Protein", value: "18 g" },
      { label: "Fat", value: "14 g" },
      { label: "Fiber", value: "10 g" },
      { label: "Iron", value: "4.8 mg" },
      { label: "Folate", value: "180 µg" },
      { label: "Sodium", value: "520 mg" }
    ],
    isFavorite: false
  },
 
  // ── 46 ──────────────────────────────────────────────────────────────────────
  {
    title: "Healthy Idli Sambar",
    description: "A nutritious and yummy healthy brunch — steamed semolina idlis served with a hearty vegetable-lentil sambar. Made without an idli stand using small steel bowls! #mommasrecipes",
    imageUrl: "https://img-global.cpcdn.com/recipes/5619afb2ca327be1/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 5,
    calories: 589,
    tags: ["healthy breakfast", "steamed idli", "nutritious sambar"],
    ingredients: [
      // Sambar
      { name: "Arhar Dal / Split Lentil", quantity: 1, unit: "cup", added: false },
      { name: "Carrots (finely diced)", quantity: 1, unit: "cup", added: false },
      { name: "Beans (finely diced)", quantity: 1, unit: "cup", added: false },
      { name: "Potatoes (finely diced)", quantity: 1, unit: "cup", added: false },
      { name: "Cauliflower Florets", quantity: 1, unit: "cup", added: false },
      { name: "Peas", quantity: 0.5, unit: "cup", added: false },
      { name: "Onion (chopped)", quantity: 1, unit: "pcs", added: false },
      { name: "Tomatoes (chopped)", quantity: 2, unit: "pcs", added: false },
      { name: "Ginger Garlic (grated)", quantity: 2, unit: "tbsp", added: false },
      { name: "Jaggery Sauce", quantity: 2, unit: "tbsp", added: false },
      { name: "Salt", quantity: 1, unit: "tbsp", added: false },
      { name: "Red Chilli Powder", quantity: 1, unit: "tbsp", added: false },
      { name: "Turmeric", quantity: 1, unit: "tbsp", added: false },
      { name: "Chaat Masala", quantity: 1, unit: "tbsp", added: false },
      { name: "Garam Masala", quantity: 1, unit: "tbsp", added: false },
      { name: "Coriander Powder", quantity: 1, unit: "tbsp", added: false },
      { name: "Cumin Powder", quantity: 1, unit: "tbsp", added: false },
      { name: "Mustard Seeds", quantity: 1, unit: "tbsp", added: false },
      { name: "Cumin Seeds", quantity: 1, unit: "tbsp", added: false },
      // Idli
      { name: "Semolina (rava)", quantity: 2, unit: "cup", added: false },
      { name: "Curd", quantity: 1, unit: "cup", added: false },
      { name: "Salt (for idli)", quantity: 1, unit: "tbsp", added: false },
      { name: "Sugar (optional)", quantity: 1, unit: "tbsp", added: false },
      { name: "Black Pepper", quantity: 1, unit: "tsp", added: false },
      { name: "Fruit Salt / Baking Soda", quantity: 1, unit: "tsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "IDLI: Mix semolina, curd, salt, and pepper. If using baking powder, mix with all ingredients now. If using fruit salt, add just before steaming. Add water to reach a thick batter consistency. Rest for 15–20 minutes." },
      { stepNumber: 2, text: "SAMBAR: Soak lentils with salt, pepper, turmeric, and all vegetables. Add 2 glasses of water." },
      { stepNumber: 3, text: "Soak for 30 minutes, then pressure cook for 2 whistles. Open cooker and simmer on low flame." },
      { stepNumber: 4, text: "For tadka: roast mustard seeds and grated ginger-garlic, then add chopped onion." },
      { stepNumber: 5, text: "Cook tadka until golden. Add remaining sambar spices and tomatoes." },
      { stepNumber: 6, text: "Cook tadka for 10–15 minutes, then add to sambar. Sambar is ready." },
      { stepNumber: 7, text: "Take a broad pan, add water for steam, set a stand, and bring water to a boil. Grease small steel bowls with oil (or use idli stand)." },
      { stepNumber: 8, text: "If using fruit salt, quickly add to semolina batter and pour one scoop into each bowl. Place in steaming pan." },
      { stepNumber: 9, text: "Cover and steam for 7–8 minutes until idlis are cooked through." },
      { stepNumber: 10, text: "Transfer idlis to a plate and enjoy with sambar. Stay healthy!" }
    ],
    rating: { average: 4.5, reviewCount: 4 },
    nutrition: [
      { label: "Calories", value: "589 kcal" },
      { label: "Carbohydrates", value: "98 g" },
      { label: "Protein", value: "22 g" },
      { label: "Fat", value: "10 g" },
      { label: "Fiber", value: "14 g" },
      { label: "Iron", value: "5.2 mg" },
      { label: "Calcium", value: "180 mg" },
      { label: "Folate", value: "220 µg" }
    ],
    isFavorite: false
  },
 
  // ── 47 ──────────────────────────────────────────────────────────────────────
  {
    title: "Punjabi Thali – Chana Masala Curry with Methi Masala Puri",
    description: "#CA2025 #ThaliTradition – Authentic North Indian Punjabi-style Chole Masala (vegan, protein-packed) paired with crispy, herby Methi Masala Puris.",
    imageUrl: "https://img-global.cpcdn.com/recipes/223cbad3cd45e6bb/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 4,
    calories: 543,
    tags: ["homemade Punjabi food", "chickpea curry", "methi puri"],
    ingredients: [
      // Chana Masala
      { name: "White Chana (chickpeas)", quantity: 1, unit: "cup", added: false },
      { name: "Onion", quantity: 1, unit: "pcs", added: false },
      { name: "Ginger (1 inch piece)", quantity: 1, unit: "pcs", added: false },
      { name: "Garlic Pods", quantity: 5, unit: "pcs", added: false },
      { name: "Tomatoes", quantity: 4, unit: "pcs", added: false },
      { name: "Green Chilli", quantity: 2, unit: "pcs", added: false },
      { name: "Chopped Coriander Leaves", quantity: 2, unit: "tbsp", added: false },
      { name: "Salt", quantity: 0.5, unit: "tsp", added: false },
      { name: "Red Chilli Powder", quantity: 0.25, unit: "tsp", added: false },
      { name: "Turmeric Powder", quantity: 0.25, unit: "tsp", added: false },
      { name: "Coriander Seeds Powder", quantity: 0.5, unit: "tsp", added: false },
      { name: "Garam Masala", quantity: 0.25, unit: "tsp", added: false },
      { name: "Cumin Seeds", quantity: 0.5, unit: "tsp", added: false },
      { name: "Chana Masala Powder", quantity: 0.5, unit: "tsp", added: false },
      { name: "Cooking Oil", quantity: 2, unit: "tbsp", added: false },
      { name: "Tea Bags (for boiling chana)", quantity: 2, unit: "pcs", added: false },
      // Methi Masala Puri
      { name: "Wheat Flour", quantity: 1, unit: "cup", added: false },
      { name: "Semolina", quantity: 2, unit: "tbsp", added: false },
      { name: "Gram Flour", quantity: 2, unit: "tbsp", added: false },
      { name: "Kasuri Methi (dried fenugreek)", quantity: 2, unit: "tbsp", added: false },
      { name: "Oil (for moyan)", quantity: 2, unit: "tbsp", added: false },
      { name: "Carom Seeds (ajwain)", quantity: 0.5, unit: "tsp", added: false },
      { name: "Chilli Flakes", quantity: 0.5, unit: "tsp", added: false },
      { name: "Roasted Cumin Seeds Powder", quantity: 0.5, unit: "tsp", added: false },
      { name: "Chopped Coriander Leaves (for puri)", quantity: 2, unit: "tbsp", added: false },
      { name: "Oil (for deep frying)", quantity: 1, unit: "cup", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Wash and soak 1 cup white chana overnight. Boil in a pressure cooker with 2 tea bags for 10 minutes after first whistle. Let pressure release, then remove tea bags." },
      { stepNumber: 2, text: "Grind onion, ginger, tomatoes, and garlic in a mixer." },
      { stepNumber: 3, text: "Heat oil in a wok, add cumin seeds. When they splutter, add the ground onion-tomato paste and roast until oil separates." },
      { stepNumber: 4, text: "Add salt, red chilli powder, turmeric, coriander powder, garam masala, and chana masala. Cook for 2 minutes." },
      { stepNumber: 5, text: "Add boiled chana, adjust consistency with water. Add chopped coriander. Cook on low flame for 10 minutes." },
      { stepNumber: 6, text: "METHI MASALA PURI: Add wheat flour, oil, salt, carom seeds, chilli flakes, cumin powder, gram flour, kasuri methi, and coriander leaves. Mix well." },
      { stepNumber: 7, text: "Knead a dough for puri by slowly adding water. Rest for 15 minutes." },
      { stepNumber: 8, text: "Heat oil in a wok. Divide dough into 10 lemon-sized balls. Roll each and deep fry until golden." },
      { stepNumber: 9, text: "Serve hot with masala chana, sliced onion, and pickle." }
    ],
    rating: { average: 4.5, reviewCount: 14 },
    nutrition: [
      { label: "Calories", value: "543 kcal" },
      { label: "Carbohydrates", value: "82 g" },
      { label: "Protein", value: "18 g" },
      { label: "Fat", value: "16 g" },
      { label: "Fiber", value: "14 g" },
      { label: "Iron", value: "5.8 mg" },
      { label: "Folate", value: "240 µg" },
      { label: "Sodium", value: "560 mg" }
    ],
    isFavorite: false
  },
 
  // ── 48 ──────────────────────────────────────────────────────────────────────
  {
    title: "Creamy Kidney Beans Curry (Rajma) with Spinach and Potatoes",
    description: "A heart-warming rajma curry with spinach and baby potatoes. Can be eaten with rice, whole wheat tortillas, roti, or naan!",
    imageUrl: "https://img-global.cpcdn.com/recipes/67a6d781a77a707e/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 2,
    calories: 416,
    tags: ["kidney beans curry", "creamy rajma", "easy vegetarian dinner"],
    ingredients: [
      { name: "Onion (medium, chopped)", quantity: 1, unit: "pcs", added: false },
      { name: "Garlic Cloves (minced)", quantity: 4, unit: "pcs", added: false },
      { name: "Butter", quantity: 1, unit: "tbsp", added: false },
      { name: "Kidney Beans (canned)", quantity: 1, unit: "pcs", added: false },
      { name: "Yellow Potatoes (mini or medium, diced)", quantity: 8, unit: "pcs", added: false },
      { name: "Spinach (handful, chopped)", quantity: 1, unit: "cup", added: false },
      { name: "Cumin Powder", quantity: 1, unit: "tsp", added: false },
      { name: "Turmeric Powder", quantity: 0.5, unit: "tsp", added: false },
      { name: "Coriander Powder", quantity: 1, unit: "tsp", added: false },
      { name: "Garam Masala", quantity: 1, unit: "tsp", added: false },
      { name: "Chili Powder", quantity: 0.5, unit: "tsp", added: false },
      { name: "Nutritional Yeast", quantity: 2, unit: "tbsp", added: false },
      { name: "Water / Vegetable Broth", quantity: 250, unit: "ml", added: false },
      { name: "Salt", quantity: 1, unit: "tsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Sauté onions and garlic in butter until soft." },
      { stepNumber: 2, text: "Add cumin, turmeric, coriander, garam masala, and chili powder. Stir for 1 minute." },
      { stepNumber: 3, text: "Add potatoes and let cook for 3–4 minutes. Add kidney beans and leafy greens. Mix well." },
      { stepNumber: 4, text: "Pour in water or vegetable broth, add salt, and simmer until vegetables are tender." },
      { stepNumber: 5, text: "Stir in nutritional yeast for creaminess. Adjust seasoning and serve hot." }
    ],
    rating: { average: 4.5, reviewCount: 0 },
    nutrition: [
      { label: "Calories", value: "416 kcal" },
      { label: "Carbohydrates", value: "68 g" },
      { label: "Protein", value: "18 g" },
      { label: "Fat", value: "9 g" },
      { label: "Saturated Fat", value: "3 g" },
      { label: "Fiber", value: "16 g" },
      { label: "Iron", value: "6.4 mg" },
      { label: "Potassium", value: "1040 mg" }
    ],
    isFavorite: false
  },
 
  // ── 49 ──────────────────────────────────────────────────────────────────────
  {
    title: "Baingan Bharta (Smoky Eggplant Curry)",
    description: "Eggplant doesn't get much limelight — but the dishes that feature it are very special! Smoky charred eggplant blended into a fragrant onion-tomato masala. Serve with rice, roti, or naan.",
    imageUrl: "https://img-global.cpcdn.com/recipes/fb03b3b41b46f880/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 2,
    calories: 490,
    tags: ["smoky eggplant", "easy Indian curry", "quick vegetarian meal"],
    ingredients: [
      { name: "Eggplant (large)", quantity: 2, unit: "pcs", added: false },
      { name: "Onion (chopped)", quantity: 1, unit: "pcs", added: false },
      { name: "Tomatoes (chopped)", quantity: 2, unit: "pcs", added: false },
      { name: "Green Chillies (chopped, optional)", quantity: 2, unit: "pcs", added: false },
      { name: "Garlic (minced)", quantity: 1, unit: "tsp", added: false },
      { name: "Ginger (minced)", quantity: 1, unit: "tsp", added: false },
      { name: "Whole Cumin Seeds", quantity: 1, unit: "tsp", added: false },
      { name: "Turmeric Powder", quantity: 1, unit: "tsp", added: false },
      { name: "Coriander Powder", quantity: 1, unit: "tsp", added: false },
      { name: "Cumin Powder", quantity: 1, unit: "tsp", added: false },
      { name: "Dried Red Chillies", quantity: 2, unit: "pcs", added: false },
      { name: "Asafetida (hing)", quantity: 1, unit: "tsp", added: false },
      { name: "Salt", quantity: 1, unit: "tsp", added: false },
      { name: "Cilantro (handful, chopped)", quantity: 3, unit: "tbsp", added: false },
      { name: "Cooking Oil", quantity: 2, unit: "tbsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Coat eggplants with oil and grill on stovetop turning occasionally until fully charred on all sides. Or roast in oven at 400°F (200°C) for 30–40 minutes until skin is charred and flesh is tender." },
      { stepNumber: 2, text: "Once cooled, peel off charred skin and mash the flesh with a fork. Set aside." },
      { stepNumber: 3, text: "Heat oil in a pan. Add cumin seeds and let them crackle. Add dried red chillies, asafetida, green chillies, ginger, and garlic. Stir and sauté for 30 seconds, cover and cook on low for 1 minute. Add onions and sauté until translucent." },
      { stepNumber: 4, text: "Add chopped tomatoes, cover and cook until soft and oil separates (about 3 minutes). Stir in turmeric, coriander, cumin powder, and salt. Sauté for 2 minutes." },
      { stepNumber: 5, text: "Add mashed eggplant to the pan. Combine with the onion-tomato mixture. Cook a few minutes on medium, then cover on lowest heat for 5 minutes, stirring occasionally." },
      { stepNumber: 6, text: "Check seasoning, garnish with fresh coriander leaves, and serve hot." }
    ],
    rating: { average: 4.5, reviewCount: 0 },
    nutrition: [
      { label: "Calories", value: "490 kcal" },
      { label: "Carbohydrates", value: "62 g" },
      { label: "Protein", value: "10 g" },
      { label: "Fat", value: "24 g" },
      { label: "Fiber", value: "18 g" },
      { label: "Vitamin C", value: "22 mg" },
      { label: "Potassium", value: "880 mg" },
      { label: "Sodium", value: "480 mg" }
    ],
    isFavorite: false
  },
 
  // ── 50 ──────────────────────────────────────────────────────────────────────
  {
    title: "Kerala Style Coconut Milk Fish Curry",
    description: "A classic Kerala-style fish curry with tilapia simmered in creamy coconut milk infused with chilli, tamarind, and a fragrant fenugreek-curry leaf tempering.",
    imageUrl: "https://img-global.cpcdn.com/recipes/5581652110082048/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 1,
    calories: 542,
    tags: ["coconut milk curry", "fish curry recipe", "authentic Kerala flavors"],
    ingredients: [
      { name: "Chilli Powder", quantity: 2, unit: "tsp", added: false },
      { name: "Tilapia Fillets", quantity: 3, unit: "pcs", added: false },
      { name: "Coconut Milk", quantity: 2, unit: "cup", added: false },
      { name: "Turmeric Powder", quantity: 0.75, unit: "tsp", added: false },
      { name: "Tamarind Concentrate", quantity: 0.5, unit: "tsp", added: false },
      { name: "Salt", quantity: 2, unit: "tsp", added: false },
      { name: "Green Chilli (finely sliced)", quantity: 1, unit: "pcs", added: false },
      { name: "Shallots", quantity: 2, unit: "pcs", added: false },
      { name: "Garlic (finely minced)", quantity: 1, unit: "pcs", added: false },
      { name: "Fenugreek Seeds", quantity: 5, unit: "pcs", added: false },
      { name: "Vegetable Oil", quantity: 1, unit: "tbsp", added: false },
      { name: "Curry Leaves", quantity: 6, unit: "pcs", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Add coconut milk, chilli powder, and turmeric to a non-stick pot. Mix and heat to a simmer." },
      { stepNumber: 2, text: "Wash and cut tilapia into 1-inch cubes. Add fish gently. Bring back to a boil and add salt." },
      { stepNumber: 3, text: "Add tamarind concentrate and stir gently." },
      { stepNumber: 4, text: "After 1 minute, lower the flame and cook uncovered until curry thickens and fish is cooked through." },
      { stepNumber: 5, text: "Heat vegetable oil in a separate pan. Add fenugreek seeds and sauté until golden." },
      { stepNumber: 6, text: "Add garlic, shallots, green chilli, and curry leaves. Sauté until golden." },
      { stepNumber: 7, text: "Pour tempering over the curry. Do not stir. Cover and allow to sit 15–30 minutes before serving." }
    ],
    rating: { average: 4.5, reviewCount: 0 },
    nutrition: [
      { label: "Calories", value: "542 kcal" },
      { label: "Carbohydrates", value: "14 g" },
      { label: "Protein", value: "36 g" },
      { label: "Fat", value: "40 g" },
      { label: "Saturated Fat", value: "32 g" },
      { label: "Omega-3", value: "0.6 g" },
      { label: "Iron", value: "4.2 mg" },
      { label: "Potassium", value: "780 mg" }
    ],
    isFavorite: false
  },
 
  // ── 51 ──────────────────────────────────────────────────────────────────────
  {
    title: "Coconut Chicken with Rice",
    description: "A Chinese-inspired dinner — crispy egg-white battered fried chicken served over jasmine rice with a creamy coconut-honey sauce.",
    imageUrl: "https://img-global.cpcdn.com/recipes/e9d870a8575c92b6/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 2,
    calories: 487,
    tags: ["easy dinner recipe", "coconut chicken", "comforting meals"],
    ingredients: [
      { name: "Chicken Breast (cut into 1-inch cubes)", quantity: 900, unit: "grams", added: false },
      { name: "Egg Whites (large, whisked to foam)", quantity: 4, unit: "pcs", added: false },
      { name: "Water", quantity: 80, unit: "ml", added: false },
      { name: "Salt (for batter)", quantity: 1, unit: "pinch", added: false },
      { name: "Cornstarch (for batter)", quantity: 90, unit: "grams", added: false },
      { name: "Vegetable Oil (for frying)", quantity: 2, unit: "cup", added: false },
      // Sauce
      { name: "Coconut Milk (full fat, 1 can)", quantity: 400, unit: "ml", added: false },
      { name: "Granulated Sugar", quantity: 200, unit: "grams", added: false },
      { name: "Cornstarch (for sauce)", quantity: 2, unit: "tsp", added: false },
      { name: "Ginger Powder", quantity: 1, unit: "pinch", added: false },
      { name: "Vegetable Oil (for sauce)", quantity: 2, unit: "tsp", added: false },
      { name: "Mayonnaise", quantity: 2, unit: "tbsp", added: false },
      { name: "Honey", quantity: 2, unit: "tbsp", added: false },
      { name: "White Vinegar", quantity: 2, unit: "tsp", added: false },
      { name: "Heavy Cream", quantity: 2, unit: "tbsp", added: false },
      // Rice
      { name: "Jasmine Rice (uncooked)", quantity: 1, unit: "cup", added: false },
      { name: "Water (for rice)", quantity: 2, unit: "cup", added: false },
      { name: "Salt (for rice)", quantity: 1, unit: "pinch", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Whisk egg whites with a pinch of salt until foamy. Add cornstarch and water, mix well." },
      { stepNumber: 2, text: "Add chicken cubes to the batter, coat evenly, and set aside." },
      { stepNumber: 3, text: "Cook jasmine rice with a pinch of salt and water. Set aside." },
      { stepNumber: 4, text: "In a saucepan, combine all sauce ingredients (coconut milk, sugar, cornstarch, ginger powder, oil, mayonnaise, honey, vinegar, and heavy cream). Whisk well." },
      { stepNumber: 5, text: "Cover and cook on low-medium heat for a few minutes until thickened. Add a little water if too thick. Keep covered until chicken is ready." },
      { stepNumber: 6, text: "Heat vegetable oil in a pan. Fry battered chicken until golden and cooked through. Drain excess oil." },
      { stepNumber: 7, text: "Serve fried chicken over jasmine rice and pour coconut sauce generously on top." }
    ],
    rating: { average: 4.5, reviewCount: 0 },
    nutrition: [
      { label: "Calories", value: "487 kcal" },
      { label: "Carbohydrates", value: "52 g" },
      { label: "Protein", value: "32 g" },
      { label: "Fat", value: "18 g" },
      { label: "Saturated Fat", value: "10 g" },
      { label: "Sugar", value: "18 g" },
      { label: "Sodium", value: "420 mg" }
    ],
    isFavorite: false
  },
 
  // ── 52 ──────────────────────────────────────────────────────────────────────
  {
    title: "Chicken Biryani",
    description: "A simple and comforting home-style chicken biryani — spiced fried chicken layered with fragrant rice and cooked on low heat until perfectly done.",
    imageUrl: "https://img-global.cpcdn.com/recipes/2797dd61084cc3a0/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 1,
    calories: 540,
    tags: ["aromatic spices", "tender chicken", "homemade dinner"],
    ingredients: [
      { name: "Whole Chicken (cut into pieces)", quantity: 1, unit: "pcs", added: false },
      { name: "Tomatoes", quantity: 5, unit: "pcs", added: false },
      { name: "Basmati Rice", quantity: 2, unit: "cup", added: false },
      { name: "Garlic (chopped)", quantity: 6, unit: "pcs", added: false },
      { name: "Salt", quantity: 1.5, unit: "tsp", added: false },
      { name: "Oil", quantity: 3, unit: "tbsp", added: false },
      { name: "Biryani Spices (garam masala, cumin, coriander)", quantity: 2, unit: "tbsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Boil chicken and set chicken broth aside." },
      { stepNumber: 2, text: "Remove chicken from pot and keep in a bowl, reserving the broth." },
      { stepNumber: 3, text: "Add salt and rice to water and boil until parboiled. Drain and set aside." },
      { stepNumber: 4, text: "Fry chicken until brown. Add garlic and fry, then add tomatoes and spices. Mix and fry on medium heat. Add chicken back and fry for 10 minutes. Set aside." },
      { stepNumber: 5, text: "Layer the chicken mixture and parboiled rice in a heavy-bottomed pot. Keep on low heat for 5 minutes." },
      { stepNumber: 6, text: "Mix gently and cook on low heat for 10 more minutes. Serve!" }
    ],
    rating: { average: 4.5, reviewCount: 0 },
    nutrition: [
      { label: "Calories", value: "540 kcal" },
      { label: "Carbohydrates", value: "64 g" },
      { label: "Protein", value: "34 g" },
      { label: "Fat", value: "14 g" },
      { label: "Saturated Fat", value: "3 g" },
      { label: "Fiber", value: "3 g" },
      { label: "Iron", value: "3.2 mg" },
      { label: "Sodium", value: "580 mg" }
    ],
    isFavorite: false
  },
 
  // ── 53 ──────────────────────────────────────────────────────────────────────
  {
    title: "Tandoori Chicken Legs",
    description: "Juicy oven-baked tandoori drumsticks marinated in yogurt, lemon juice, and a blend of aromatic spices — charred to perfection under the broiler.",
    imageUrl: "https://og-image.cookpad.com/global/us/recipe/24746161?t=1750956646",
    prepTime: "30 min",
    servings: 4,
    calories: 509,
    tags: ["spiced chicken recipe", "easy dinner ideas", "homemade marinade"],
    ingredients: [
      { name: "Chicken Drumsticks", quantity: 12, unit: "pcs", added: false },
      { name: "Garlic Ginger Paste", quantity: 2, unit: "tbsp", added: false },
      { name: "Cilantro (blended)", quantity: 3, unit: "tbsp", added: false },
      { name: "Garam Masala", quantity: 1, unit: "tbsp", added: false },
      { name: "Paprika", quantity: 1, unit: "tbsp", added: false },
      { name: "Cumin", quantity: 1, unit: "tbsp", added: false },
      { name: "Tandoori Masala", quantity: 2, unit: "tsp", added: false },
      { name: "Garlic Salt", quantity: 2, unit: "tsp", added: false },
      { name: "Onion Powder", quantity: 1, unit: "tsp", added: false },
      { name: "Black Pepper", quantity: 0.5, unit: "tsp", added: false },
      { name: "Turmeric", quantity: 0.5, unit: "tsp", added: false },
      { name: "Cayenne Pepper", quantity: 0.5, unit: "tsp", added: false },
      { name: "Plain Greek Yogurt", quantity: 60, unit: "ml", added: false },
      { name: "Lemon Juice", quantity: 60, unit: "ml", added: false },
      { name: "Olive Oil", quantity: 2, unit: "tbsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Remove skin from drumsticks and score each with three lines." },
      { stepNumber: 2, text: "Add drumsticks to a bowl and season with yogurt, olive oil, lemon juice, garlic ginger paste, and all spices. Marinate for at least 1 hour." },
      { stepNumber: 3, text: "Preheat oven to 400°F. Place marinated chicken in a baking pan." },
      { stepNumber: 4, text: "Bake for about 30 minutes on each side until cooked through. Broil on high for about 5 minutes until charred." },
      { stepNumber: 5, text: "Serve over rice." }
    ],
    rating: { average: 4.5, reviewCount: 0 },
    nutrition: [
      { label: "Calories", value: "509 kcal" },
      { label: "Carbohydrates", value: "8 g" },
      { label: "Protein", value: "48 g" },
      { label: "Fat", value: "32 g" },
      { label: "Saturated Fat", value: "8 g" },
      { label: "Iron", value: "3.6 mg" },
      { label: "Calcium", value: "80 mg" },
      { label: "Sodium", value: "720 mg" }
    ],
    isFavorite: false
  },
 
  // ── 54 ──────────────────────────────────────────────────────────────────────
  {
    title: "Dal Khichdi",
    description: "The ultimate go-to comfort meal — a nourishing one-pot dish of rice and lentils pressure-cooked with spices and finished with a fragrant ghee tadka.",
    imageUrl: "https://img-global.cpcdn.com/recipes/2071003fa3f8efaf/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 4,
    calories: 520,
    tags: ["easy lentil recipe", "one-pot meal", "healthy comfort food"],
    ingredients: [
      { name: "Toor / Moong Dal", quantity: 1, unit: "cup", added: false },
      { name: "Basmati Rice", quantity: 1, unit: "cup", added: false },
      { name: "Dried Red Chillies / Kashmiri Red Chillies", quantity: 3, unit: "pcs", added: false },
      { name: "Coriander Leaves", quantity: 3, unit: "tbsp", added: false },
      { name: "Tamarind Juice", quantity: 2, unit: "tbsp", added: false },
      { name: "Ginger (minced)", quantity: 1, unit: "tsp", added: false },
      { name: "Garlic (minced)", quantity: 4, unit: "pcs", added: false },
      { name: "Onion", quantity: 1, unit: "pcs", added: false },
      { name: "Tomatoes", quantity: 2, unit: "pcs", added: false },
      { name: "Ghee", quantity: 2, unit: "tbsp", added: false },
      { name: "Mustard Seeds", quantity: 1, unit: "tsp", added: false },
      { name: "Cumin Seeds", quantity: 1, unit: "tsp", added: false },
      { name: "Bay Leaf (optional)", quantity: 1, unit: "pcs", added: false },
      { name: "Turmeric", quantity: 0.5, unit: "tsp", added: false },
      { name: "Red Chilli Powder", quantity: 0.5, unit: "tsp", added: false },
      { name: "Asafetida (hing)", quantity: 1, unit: "pinch", added: false },
      { name: "Salt", quantity: 1.5, unit: "tsp", added: false },
      { name: "Water", quantity: 8, unit: "cup", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Wash 1:1 rice and dal mix. Soak it. (For protein-rich khichdi, use 1 part rice to 2 parts dal.)" },
      { stepNumber: 2, text: "Heat ghee with mustard and cumin seeds. Add bay leaf. Add ginger, garlic, and red chilli. Let crackle." },
      { stepNumber: 3, text: "Add onion (keep some for later) and sauté well. Add tomatoes and cook down." },
      { stepNumber: 4, text: "Add turmeric, red chilli powder, hing, and salt." },
      { stepNumber: 5, text: "Add the soaked dal and rice. Sauté for 2 minutes. Add tamarind extract and mix." },
      { stepNumber: 6, text: "Add 8 cups of water (4× volume of rice+dal). Pressure cook for 3–4 whistles." },
      { stepNumber: 7, text: "Add chopped coriander. Optionally finish with a ghee tadka (mustard, jeera, dried red chilli, garlic, onion) or add crispy toppings like fried onion or baked okra." }
    ],
    rating: { average: 4.5, reviewCount: 0 },
    nutrition: [
      { label: "Calories", value: "520 kcal" },
      { label: "Carbohydrates", value: "88 g" },
      { label: "Protein", value: "20 g" },
      { label: "Fat", value: "10 g" },
      { label: "Saturated Fat", value: "5 g" },
      { label: "Fiber", value: "10 g" },
      { label: "Iron", value: "4.6 mg" },
      { label: "Folate", value: "196 µg" }
    ],
    isFavorite: false
  },
 
  // ── 55 ──────────────────────────────────────────────────────────────────────
  {
    title: "Vegetable Sabji (Palya)",
    description: "A versatile South Indian-style vegetable stir-fry (palya) that works with any boiled vegetables — beetroot, bhindi, bottle gourd — with a classic mustard-coconut tempering.",
    imageUrl: "https://img-global.cpcdn.com/recipes/44aaec8f833d79f4/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 2,
    calories: 306,
    tags: ["easy vegetable recipe", "healthy stir-fry", "quick homemade meal"],
    ingredients: [
      { name: "Any Boiled Vegetables (beetroot / bhindi / bottle gourd)", quantity: 250, unit: "grams", added: false },
      { name: "Green Chilli", quantity: 2, unit: "pcs", added: false },
      { name: "Shredded Coconut", quantity: 2, unit: "tsp", added: false },
      { name: "Coriander Leaves", quantity: 2, unit: "tbsp", added: false },
      { name: "Ghee", quantity: 1, unit: "tsp", added: false },
      { name: "Asafetida (hing)", quantity: 0.25, unit: "tsp", added: false },
      { name: "Salt", quantity: 1, unit: "tsp", added: false },
      { name: "Jaggery", quantity: 0.5, unit: "tsp", added: false },
      { name: "Mustard Seeds", quantity: 1, unit: "tsp", added: false },
      { name: "Urad Dal", quantity: 1, unit: "tsp", added: false },
      { name: "Chana Dal", quantity: 1, unit: "tsp", added: false },
      { name: "Curry Leaves", quantity: 8, unit: "pcs", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Add 1 tsp ghee to a pan. Add mustard seeds first and let them splutter, then add urad dal, chana dal, and curry leaves." },
      { stepNumber: 2, text: "Add boiled vegetables with a little water, green chilli, hing, salt, and jaggery. Sauté, then close the lid and cook for 5–6 minutes." },
      { stepNumber: 3, text: "Add shredded coconut and coriander leaves. Switch off the pan. Serve with roti or rice." }
    ],
    rating: { average: 4.5, reviewCount: 1 },
    nutrition: [
      { label: "Calories", value: "306 kcal" },
      { label: "Carbohydrates", value: "42 g" },
      { label: "Protein", value: "8 g" },
      { label: "Fat", value: "12 g" },
      { label: "Saturated Fat", value: "6 g" },
      { label: "Fiber", value: "8 g" },
      { label: "Iron", value: "2.4 mg" },
      { label: "Potassium", value: "520 mg" }
    ],
    isFavorite: false
  },
 
  // ── 56 ──────────────────────────────────────────────────────────────────────
  {
    title: "The Best Mumbai Street Style Pav Bhaji",
    description: "The iconic Mumbai street food — spiced mashed vegetables in a rich tomato base, made in both Instant Pot and stovetop pressure cooker. Perfect with dinner rolls!",
    imageUrl: "https://img-global.cpcdn.com/recipes/c89efa98cd26e66b/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 4,
    calories: 429,
    tags: ["spiced mashed vegetables", "Indian street food", "easy homemade recipe"],
    ingredients: [
      { name: "Cauliflower", quantity: 1, unit: "cup", added: false },
      { name: "Potatoes (medium)", quantity: 3, unit: "pcs", added: false },
      { name: "Ripe Tomatoes", quantity: 3, unit: "pcs", added: false },
      { name: "Onion (chopped)", quantity: 0.25, unit: "cup", added: false },
      { name: "Dry Red Chilli and Garlic Paste", quantity: 2, unit: "tbsp", added: false },
      { name: "Green Peas", quantity: 1, unit: "cup", added: false },
      { name: "Oil", quantity: 3, unit: "tbsp", added: false },
      { name: "Butter", quantity: 2, unit: "tbsp", added: false },
      { name: "Pav Bhaji Masala", quantity: 2, unit: "tbsp", added: false },
      { name: "Beetroot (small)", quantity: 1, unit: "pcs", added: false },
      { name: "Red Chilli Powder", quantity: 1, unit: "tsp", added: false },
      { name: "Lemon Juice", quantity: 1, unit: "tbsp", added: false },
      { name: "Turmeric", quantity: 0.5, unit: "tsp", added: false },
      { name: "Ginger Garlic Paste", quantity: 1, unit: "tbsp", added: false },
      { name: "Salt", quantity: 1.5, unit: "tsp", added: false },
      { name: "Dinner Rolls / Pav", quantity: 8, unit: "pcs", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "In pressure cooker, add cauliflower, potatoes, peas, and beetroot. Add salt and water. Pressure cook for 3 whistles. (Or use the one-pot instant method.)" },
      { stepNumber: 2, text: "In a pan, heat butter and oil. Add chopped onions and ginger-garlic paste. Sauté until raw taste is gone. Add finely chopped green pepper and sauté a few minutes." },
      { stepNumber: 3, text: "Add finely chopped tomatoes and cook with a little salt." },
      { stepNumber: 4, text: "Add Kashmiri red chilli powder, pav bhaji masala, cumin-coriander powder, and turmeric. Cook until oil separates." },
      { stepNumber: 5, text: "Add the cooked and mashed vegetables. Mix well. Add lemon juice. Garnish with cilantro and topped with onions." },
      { stepNumber: 6, text: "Serve bhaji with buttered, toasted dinner rolls." },
      { stepNumber: 7, text: "INSTANT POT: Sauté onions 3 min → add bell pepper 2 min → add tomatoes, pav bhaji masala, chilli paste, and vegetables → seal and pressure cook high for 8 minutes → natural release → mash and serve." }
    ],
    rating: { average: 4.5, reviewCount: 0 },
    nutrition: [
      { label: "Calories", value: "429 kcal" },
      { label: "Carbohydrates", value: "68 g" },
      { label: "Protein", value: "10 g" },
      { label: "Fat", value: "14 g" },
      { label: "Saturated Fat", value: "5 g" },
      { label: "Fiber", value: "10 g" },
      { label: "Vitamin C", value: "42 mg" },
      { label: "Potassium", value: "860 mg" }
    ],
    isFavorite: false
  },
 
  // ── 57 ──────────────────────────────────────────────────────────────────────
  {
    title: "Vada Pav",
    description: "#zing #son's favourite – Mumbai's iconic street snack: spiced mashed potato vadas dipped in crispy gram-flour batter and deep-fried, served with dry garlic chutney.",
    imageUrl: "https://img-global.cpcdn.com/recipes/09f74a3e907c7cfd/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 3,
    calories: 349,
    tags: ["Indian street food", "crispy potato snack", "quick savory bites"],
    ingredients: [
      { name: "Potatoes (medium)", quantity: 5, unit: "pcs", added: false },
      { name: "Green Chillies", quantity: 7, unit: "pcs", added: false },
      { name: "Garlic Cloves", quantity: 6, unit: "pcs", added: false },
      { name: "Ginger (inch pieces)", quantity: 2, unit: "pcs", added: false },
      { name: "Gram Flour (besan)", quantity: 1, unit: "cup", added: false },
      { name: "Salt", quantity: 1, unit: "tsp", added: false },
      { name: "Oil (for frying)", quantity: 2, unit: "cup", added: false },
      { name: "Hot Oil (for batter)", quantity: 1, unit: "tbsp", added: false },
      { name: "Turmeric", quantity: 0.5, unit: "tsp", added: false },
      { name: "Pav Bread Rolls", quantity: 6, unit: "pcs", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Boil potatoes. Make a fine paste of ginger, garlic, and green chillies." },
      { stepNumber: 2, text: "After cooling, mash the boiled potatoes. Add the ginger-garlic-chilli paste, salt, and turmeric." },
      { stepNumber: 3, text: "Make round vadas. In a large bowl, take gram flour. Add salt and 1 tbsp hot oil. Add water to make a dosa-consistency batter." },
      { stepNumber: 4, text: "Dip vadas in batter and deep-fry until golden brown. Serve hot with dry garlic chutney and fried green chillies." }
    ],
    rating: { average: 4.5, reviewCount: 3 },
    nutrition: [
      { label: "Calories", value: "349 kcal" },
      { label: "Carbohydrates", value: "54 g" },
      { label: "Protein", value: "9 g" },
      { label: "Fat", value: "12 g" },
      { label: "Saturated Fat", value: "2 g" },
      { label: "Fiber", value: "5 g" },
      { label: "Potassium", value: "680 mg" },
      { label: "Sodium", value: "440 mg" }
    ],
    isFavorite: false
  },
 
  // ── 58 ──────────────────────────────────────────────────────────────────────
  {
    title: "Street Style Bhelpuri Chaat",
    description: "Mumbai's favourite snack in a bowl! Crunchy murmura, zesty chutneys, juicy tomatoes, spicy green chilies, soft boiled potatoes, and golden nylon sev — a riot of flavours. #nofuss #nocook",
    imageUrl: "https://img-global.cpcdn.com/recipes/7a8284dd0c0b5e70/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 2,
    calories: 486,
    tags: ["quick snacks", "tangy chaat", "crunchy street food"],
    ingredients: [
      { name: "Boiled Potatoes (diced)", quantity: 0.25, unit: "cup", added: false },
      { name: "Onions (chopped)", quantity: 0.33, unit: "cup", added: false },
      { name: "Tomatoes (chopped)", quantity: 0.25, unit: "cup", added: false },
      { name: "Boiled Black Chana", quantity: 0.33, unit: "cup", added: false },
      { name: "Boiled Green Moong", quantity: 0.25, unit: "cup", added: false },
      { name: "Chaat Masala", quantity: 1, unit: "tsp", added: false },
      { name: "Red Chili Powder", quantity: 1, unit: "tsp", added: false },
      { name: "Namkeen / Puffed Rice", quantity: 1, unit: "cup", added: false },
      { name: "Green Chutney", quantity: 2, unit: "tbsp", added: false },
      { name: "Tamarind Chutney", quantity: 2, unit: "tbsp", added: false },
      { name: "Sev (thin noodles)", quantity: 0.5, unit: "cup", added: false },
      { name: "Chopped Cilantro", quantity: 0.25, unit: "cup", added: false },
      { name: "Lemon Juice", quantity: 2, unit: "tsp", added: false },
      { name: "Raw Mango (optional)", quantity: 0.25, unit: "cup", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "In a large mixing bowl, add puffed rice/namkeen, onions, tomatoes, boiled potatoes, raw mango (if using), black chana, and green moong." },
      { stepNumber: 2, text: "Add both chutneys, lemon juice, and mix well." },
      { stepNumber: 3, text: "Sprinkle salt, chaat masala, and red chili powder as preferred." },
      { stepNumber: 4, text: "Just before serving, toss in the sev and give a quick mix (to keep it crunchy)." },
      { stepNumber: 5, text: "Serve immediately in a paper cone or bowl for the full street food experience!" }
    ],
    rating: { average: 4.5, reviewCount: 0 },
    nutrition: [
      { label: "Calories", value: "486 kcal" },
      { label: "Carbohydrates", value: "82 g" },
      { label: "Protein", value: "14 g" },
      { label: "Fat", value: "12 g" },
      { label: "Fiber", value: "12 g" },
      { label: "Iron", value: "4.8 mg" },
      { label: "Vitamin C", value: "24 mg" },
      { label: "Sodium", value: "620 mg" }
    ],
    isFavorite: false
  },
 
  // ── 59 ──────────────────────────────────────────────────────────────────────
  {
    title: "Simple Paneer Tikka Curry",
    description: "A quick, cupboard-raid paneer curry — diced paneer pan-fried with mustard seeds in tikka masala paste, canned tomatoes, and a splash of coconut cream.",
    imageUrl: "https://img-global.cpcdn.com/recipes/2f7453ccd184fa32/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 2,
    calories: 323,
    tags: ["paneer curry", "easy Indian recipe", "quick dinner"],
    ingredients: [
      { name: "Paneer", quantity: 200, unit: "grams", added: false },
      { name: "Tikka Masala Paste (Sharwoods or similar)", quantity: 3, unit: "tbsp", added: false },
      { name: "Canned Bio Tomatoes (400g)", quantity: 1, unit: "pcs", added: false },
      { name: "Low Fat Coconut Cream", quantity: 50, unit: "ml", added: false },
      { name: "Mustard Seeds", quantity: 2, unit: "tbsp", added: false },
      { name: "Sugar", quantity: 1, unit: "tbsp", added: false },
      { name: "Garlic Paste", quantity: 1, unit: "tbsp", added: false },
      { name: "Oil / Ghee", quantity: 2, unit: "tbsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Dice the paneer. Heat oil in a pan and fry together with mustard seeds until the paneer is golden." },
      { stepNumber: 2, text: "Add garlic paste, tikka masala paste, canned tomatoes, coconut cream, and sugar. Cover and cook for at least 20 minutes." },
      { stepNumber: 3, text: "Serve with rice." }
    ],
    rating: { average: 4.5, reviewCount: 0 },
    nutrition: [
      { label: "Calories", value: "323 kcal" },
      { label: "Carbohydrates", value: "18 g" },
      { label: "Protein", value: "16 g" },
      { label: "Fat", value: "22 g" },
      { label: "Saturated Fat", value: "12 g" },
      { label: "Calcium", value: "380 mg" },
      { label: "Iron", value: "1.8 mg" },
      { label: "Sodium", value: "560 mg" }
    ],
    isFavorite: false
  },
 
  // ── 60 ──────────────────────────────────────────────────────────────────────
  {
    title: "Vati Dal Na Khaman",
    description: "A beloved Gujarati steamed lentil cake — my favourite because my mother-in-law used to make it so deliciously. Soft, spongy, and finished with a tangy mustard-curry leaf tadka.",
    imageUrl: "https://img-global.cpcdn.com/recipes/a67b92793176d67a/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 6,
    calories: 270,
    tags: ["steamed lentil cake", "easy Indian snack", "savory snack recipe"],
    ingredients: [
      { name: "Chana Dal", quantity: 2, unit: "cup", added: false },
      { name: "Rice", quantity: 2, unit: "tbsp", added: false },
      { name: "Yogurt", quantity: 1, unit: "cup", added: false },
      { name: "Turmeric", quantity: 0.5, unit: "tsp", added: false },
      { name: "Ginger (minced)", quantity: 1, unit: "tsp", added: false },
      { name: "Green Chilli Paste", quantity: 1, unit: "tsp", added: false },
      { name: "Salt", quantity: 1, unit: "tbsp", added: false },
      { name: "Citric Acid", quantity: 0.5, unit: "tsp", added: false },
      { name: "Sugar", quantity: 1, unit: "tsp", added: false },
      { name: "Eno (fruit salt)", quantity: 0.5, unit: "tsp", added: false },
      // Tadka
      { name: "Oil (for tadka)", quantity: 6, unit: "tbsp", added: false },
      { name: "Mustard Seeds", quantity: 1, unit: "tsp", added: false },
      { name: "Asafetida (hing)", quantity: 1, unit: "pinch", added: false },
      { name: "Green Chillies", quantity: 3, unit: "pcs", added: false },
      { name: "Curry Leaves", quantity: 8, unit: "pcs", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Soak chana dal and rice together in water for 6 hours." },
      { stepNumber: 2, text: "Drain and grind with yogurt until a thick batter forms." },
      { stepNumber: 3, text: "Add turmeric, ginger-chilli paste, salt, citric acid, and sugar. Mix well. Leave overnight to ferment." },
      { stepNumber: 4, text: "Next day: take 3 large spoons of batter in a small bowl, add ½ tsp eno, 1 tsp oil, and a splash of water. Mix quickly." },
      { stepNumber: 5, text: "Grease a small plate with oil. Pour batter onto plate. Steam for 10 minutes. Allow to cool before cutting." },
      { stepNumber: 6, text: "For tadka: heat 6 tbsp oil, add mustard seeds, hing, green chilli, and curry leaves. Pour over steamed khaman." },
      { stepNumber: 7, text: "Cut into pieces and enjoy!" }
    ],
    rating: { average: 4.5, reviewCount: 2 },
    nutrition: [
      { label: "Calories", value: "270 kcal" },
      { label: "Carbohydrates", value: "38 g" },
      { label: "Protein", value: "12 g" },
      { label: "Fat", value: "8 g" },
      { label: "Saturated Fat", value: "1 g" },
      { label: "Fiber", value: "8 g" },
      { label: "Iron", value: "3.2 mg" },
      { label: "Folate", value: "148 µg" }
    ],
    isFavorite: false
  },
 
  // ── 61 ──────────────────────────────────────────────────────────────────────
  {
    title: "Holiday Rasmalai Tres Leches Cake (Egg Free)",
    description: "Rasmalai is one of my very favourite Indian desserts and I love cake, so this fusion was born! A light eggless sponge soaked in saffron-cardamom tres leches, topped with whipped cream and pistachios. Perfect for Thanksgiving or any festive table.",
    imageUrl: "https://img-global.cpcdn.com/recipes/dcd92a01d1c64042/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 10,
    calories: 433,
    tags: ["milk-soaked cake", "festive dessert", "creamy layers"],
    ingredients: [
      { name: "All-Purpose Flour", quantity: 1.5, unit: "cup", added: false },
      { name: "Baking Soda", quantity: 1, unit: "tsp", added: false },
      { name: "Plain Unsweetened Yogurt", quantity: 1, unit: "cup", added: false },
      { name: "Sugar", quantity: 0.75, unit: "cup", added: false },
      { name: "Grapeseed / Avocado Oil", quantity: 0.5, unit: "cup", added: false },
      { name: "Vanilla Extract / Bean Paste", quantity: 1, unit: "tsp", added: false },
      // Tres Leches
      { name: "Milk (any kind)", quantity: 1.5, unit: "cup", added: false },
      { name: "Heavy Whipping Cream", quantity: 0.75, unit: "cup", added: false },
      { name: "Condensed Milk", quantity: 0.75, unit: "cup", added: false },
      { name: "Cardamom Powder", quantity: 0.5, unit: "tsp", added: false },
      { name: "Saffron Strands (good quality)", quantity: 10, unit: "pcs", added: false },
      // Frosting
      { name: "Whipping Cream (for frosting)", quantity: 1, unit: "cup", added: false },
      { name: "Icing Sugar", quantity: 0.25, unit: "cup", added: false },
      { name: "Chopped Pistachios", quantity: 3, unit: "tbsp", added: false },
      { name: "Gold Dust (optional garnish)", quantity: 1, unit: "pinch", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Preheat oven to 350°F. Line an 8-inch square pan with parchment paper. Mix flour and baking soda in a bowl and set aside." },
      { stepNumber: 2, text: "In a separate bowl, add yogurt and sprinkle baking soda, mix gently and set aside. In another bowl, whisk oil and sugar until incorporated." },
      { stepNumber: 3, text: "Combine yogurt mixture with the oil-sugar mixture." },
      { stepNumber: 4, text: "Gently fold in dry ingredients until no lumps remain. Add vanilla and stir." },
      { stepNumber: 5, text: "Pour batter into pan and bake for 30 minutes. Check with a skewer." },
      { stepNumber: 6, text: "While baking, make tres leches: warm the milk briefly, add heavy cream, condensed milk, cardamom powder, and saffron strands. Mix well." },
      { stepNumber: 7, text: "Once cake is baked, poke holes all over with a skewer. Pour ¾ of the tres leches mixture over the cake. Reserve the rest for serving. Tip pan gently to distribute evenly." },
      { stepNumber: 8, text: "Cool for 1 hour, then refrigerate for a couple of hours or overnight." },
      { stepNumber: 9, text: "Whip cream with icing sugar to stiff peaks. Spread over the soaked cake." },
      { stepNumber: 10, text: "Garnish with chopped pistachios and optional gold glitter. Serve with reserved saffron tres leches milk on the side." }
    ],
    rating: { average: 4.5, reviewCount: 9 },
    nutrition: [
      { label: "Calories", value: "433 kcal" },
      { label: "Carbohydrates", value: "56 g" },
      { label: "Protein", value: "7 g" },
      { label: "Fat", value: "21 g" },
      { label: "Saturated Fat", value: "12 g" },
      { label: "Sugar", value: "40 g" },
      { label: "Calcium", value: "180 mg" },
      { label: "Sodium", value: "180 mg" }
    ],
    isFavorite: false
  },
 
  // ── 62 ──────────────────────────────────────────────────────────────────────
  {
    title: "Mango Lassi",
    description: "Mango is my favourite fruit for as long as I can remember — paired with whole milk yogurt, rose water, and cardamom. Fun fact: Mango is the national fruit of India.",
    imageUrl: "https://img-global.cpcdn.com/recipes/76fcfcd1bf27c701/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 2,
    calories: 536,
    tags: ["refreshing drink", "quick beverage", "creamy mango smoothie"],
    ingredients: [
      { name: "Plain Yogurt (whole milk)", quantity: 1, unit: "cup", added: false },
      { name: "Ripe Mango (about 1 cup, cubed)", quantity: 1, unit: "pcs", added: false },
      { name: "Rose Water", quantity: 1, unit: "tsp", added: false },
      { name: "Honey / Sugar", quantity: 2, unit: "tbsp", added: false },
      { name: "Ground Cardamom", quantity: 0.25, unit: "tsp", added: false },
      { name: "Ice (optional)", quantity: 1, unit: "cup", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Peel and cut mango into chunks." },
      { stepNumber: 2, text: "Add all ingredients into a blender and blend until smooth. Serve chilled." }
    ],
    rating: { average: 4.5, reviewCount: 0 },
    nutrition: [
      { label: "Calories", value: "536 kcal" },
      { label: "Carbohydrates", value: "96 g" },
      { label: "Protein", value: "16 g" },
      { label: "Fat", value: "12 g" },
      { label: "Saturated Fat", value: "6 g" },
      { label: "Sugar", value: "86 g" },
      { label: "Vitamin C", value: "60 mg" },
      { label: "Calcium", value: "320 mg" }
    ],
    isFavorite: false
  },
 
  // ── 63 ──────────────────────────────────────────────────────────────────────
  {
    title: "Golden Turmeric Milk",
    description: "A soothing, anti-inflammatory golden milk made with turmeric, cinnamon, ginger, and black pepper — optional flavours like cardamom and vanilla make it your own.",
    imageUrl: "https://img-global.cpcdn.com/recipes/85f131c6880a7d45/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 2,
    calories: 208,
    tags: ["turmeric latte", "healthy drink", "soothing beverage"],
    ingredients: [
      { name: "Milk (dairy or dairy-free)", quantity: 480, unit: "ml", added: false },
      { name: "Ground Turmeric", quantity: 1, unit: "tsp", added: false },
      { name: "Ground Cinnamon", quantity: 0.25, unit: "tsp", added: false },
      { name: "Dried Ginger", quantity: 0.25, unit: "tsp", added: false },
      { name: "Black Pepper", quantity: 1, unit: "pinch", added: false },
      { name: "Maple Syrup / Honey", quantity: 1, unit: "tbsp", added: false },
      { name: "Coconut Oil", quantity: 0.5, unit: "tbsp", added: false },
      { name: "Cardamom / Vanilla (optional)", quantity: 0.25, unit: "tsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Add all ingredients to a saucepan over medium heat. Bring to a simmer and simmer for 10 minutes so flavours meld." },
      { stepNumber: 2, text: "Pour into cups and serve warm." },
      { stepNumber: 3, text: "MICROWAVE OPTION: Mix all ingredients in cups and microwave for 1.5 minutes. Stir, then microwave for another 1.5 minutes." }
    ],
    rating: { average: 4.5, reviewCount: 0 },
    nutrition: [
      { label: "Calories", value: "208 kcal" },
      { label: "Carbohydrates", value: "26 g" },
      { label: "Protein", value: "8 g" },
      { label: "Fat", value: "9 g" },
      { label: "Saturated Fat", value: "7 g" },
      { label: "Calcium", value: "290 mg" },
      { label: "Curcumin (approx.)", value: "120 mg" },
      { label: "Sodium", value: "95 mg" }
    ],
    isFavorite: false
  },
 
  // ── 64 ──────────────────────────────────────────────────────────────────────
  {
    title: "Dates and Dry Fruits Ladoo",
    description: "#cookpadturns4 – Guilt-free, no-sugar, no-jaggery laddoos made with dates paste and dry-roasted mixed nuts. Perfect for winter immunity boosting.",
    imageUrl: "https://og-image.cookpad.com/global/us/recipe/14218091?t=1607794592",
    prepTime: "30 min",
    servings: 1,
    calories: 383,
    tags: ["healthy snacks", "natural sweetness", "homemade sweets"],
    ingredients: [
      { name: "Dates (deseeded)", quantity: 250, unit: "grams", added: false },
      { name: "Almonds", quantity: 250, unit: "grams", added: false },
      { name: "Cashews", quantity: 250, unit: "grams", added: false },
      { name: "Walnuts", quantity: 250, unit: "grams", added: false },
      { name: "Desiccated Coconut", quantity: 2.5, unit: "tbsp", added: false },
      { name: "Shredded Pistachio", quantity: 3, unit: "tbsp", added: false },
      { name: "Melon Seeds", quantity: 2, unit: "tbsp", added: false },
      { name: "Chironji", quantity: 2, unit: "tbsp", added: false },
      { name: "Sesame Seeds", quantity: 2, unit: "tbsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Take a pan and heat it up. Dry-roast all dry fruits one by one." },
      { stepNumber: 2, text: "Dry-roast sesame seeds until slightly brown and crispy. Dry-roast coconut powder too." },
      { stepNumber: 3, text: "Remove all roasted dry fruits and sesame seeds to a dry plate." },
      { stepNumber: 4, text: "Deseed dates and blend with ½ cup water in a blender until a fine paste forms." },
      { stepNumber: 5, text: "Heat the dates paste in the same pan, stirring continuously to let the water dry out." },
      { stepNumber: 6, text: "Keep stirring to prevent burning. Once a thick lump forms, switch off the gas." },
      { stepNumber: 7, text: "Add roasted nuts and mix with a spatula until everything is well incorporated." },
      { stepNumber: 8, text: "Allow the mixture to cool until it can be handled." },
      { stepNumber: 9, text: "Pinch small portions and roll between palms to form laddoos." },
      { stepNumber: 10, text: "Optionally keep some sesame aside and roll finished laddoos in sesame." },
      { stepNumber: 11, text: "Enjoy these guilt-free, no-sugar laddoos!" }
    ],
    rating: { average: 4.5, reviewCount: 30 },
    nutrition: [
      { label: "Calories", value: "383 kcal" },
      { label: "Carbohydrates", value: "38 g" },
      { label: "Protein", value: "9 g" },
      { label: "Fat", value: "24 g" },
      { label: "Saturated Fat", value: "4 g" },
      { label: "Fiber", value: "6 g" },
      { label: "Iron", value: "2.8 mg" },
      { label: "Magnesium", value: "72 mg" }
    ],
    isFavorite: false
  },
 
  // ── 65 ──────────────────────────────────────────────────────────────────────
  {
    title: "Crispy Ivy Gourd Fry (Fried Tindora)",
    description: "Thinly sliced ivy gourd and onion coated in a spiced gram-flour and rice-flour batter and deep-fried to irresistible crispiness.",
    imageUrl: "https://img-global.cpcdn.com/recipes/f7eaa8c4992d37c3/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 1,
    calories: 281,
    tags: ["crispy vegetable fry", "quick side dish", "easy Indian recipe"],
    ingredients: [
      { name: "Ivy Gourd (tindora)", quantity: 250, unit: "grams", added: false },
      { name: "Onion", quantity: 1, unit: "pcs", added: false },
      { name: "Ginger Garlic Paste", quantity: 0.5, unit: "tbsp", added: false },
      { name: "Curry Leaves", quantity: 12, unit: "pcs", added: false },
      { name: "Chilli Powder", quantity: 1, unit: "tbsp", added: false },
      { name: "Cumin Powder", quantity: 1, unit: "tbsp", added: false },
      { name: "Turmeric Powder", quantity: 0.25, unit: "tbsp", added: false },
      { name: "Rice Flour", quantity: 1, unit: "tbsp", added: false },
      { name: "Gram Flour (besan)", quantity: 2, unit: "tbsp", added: false },
      { name: "Salt", quantity: 1, unit: "tsp", added: false },
      { name: "Oil (for deep frying)", quantity: 1.5, unit: "cup", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Rinse ivy gourd, remove edges, and cut lengthwise into thin pieces." },
      { stepNumber: 2, text: "Cut the onion lengthwise into thin pieces." },
      { stepNumber: 3, text: "Mix ivy gourd and onion in a bowl. Add salt and squeeze until soft." },
      { stepNumber: 4, text: "Add ginger garlic paste, curry leaves, chilli powder, cumin powder, turmeric, rice flour, and gram flour. Mix well — do not add water. Rest 5 minutes." },
      { stepNumber: 5, text: "Deep-fry in hot oil until golden and crispy. Serve immediately." }
    ],
    rating: { average: 4.5, reviewCount: 0 },
    nutrition: [
      { label: "Calories", value: "281 kcal" },
      { label: "Carbohydrates", value: "28 g" },
      { label: "Protein", value: "6 g" },
      { label: "Fat", value: "16 g" },
      { label: "Saturated Fat", value: "2 g" },
      { label: "Fiber", value: "5 g" },
      { label: "Iron", value: "2.6 mg" },
      { label: "Vitamin C", value: "14 mg" }
    ],
    isFavorite: false
  },
 
  // ── 66 ──────────────────────────────────────────────────────────────────────
  {
    title: "Puranpoli (Sweet Stuffed Rotis)",
    description: "A traditional Maharashtrian festive flatbread — whole wheat rotis stuffed with a fragrant chana dal and jaggery filling (puran), spiced with cardamom and nutmeg, and roasted in ghee until golden.",
    imageUrl: "https://img-global.cpcdn.com/recipes/7dd4640afe70ef2b/1200x630cq80/photo.jpg",
    prepTime: "30 min",
    servings: 4,
    calories: 435,
    tags: ["sweet stuffed flatbread", "jaggery recipe", "Indian dessert"],
    ingredients: [
      // Puran (filling)
      { name: "Chana Dal (split chickpeas)", quantity: 1, unit: "cup", added: false },
      { name: "Jaggery (finely cut or powdered)", quantity: 1, unit: "cup", added: false },
      { name: "Water (for pressure cooking)", quantity: 3, unit: "cup", added: false },
      { name: "Cardamom Powder", quantity: 0.25, unit: "tsp", added: false },
      { name: "Nutmeg Powder", quantity: 0.25, unit: "tsp", added: false },
      { name: "Turmeric (pinch)", quantity: 1, unit: "pinch", added: false },
      { name: "Ghee (for puran)", quantity: 0.5, unit: "tsp", added: false },
      // Poli (dough)
      { name: "Wheat Flour", quantity: 2, unit: "cup", added: false },
      { name: "Refined Flour (maida)", quantity: 2, unit: "tbsp", added: false },
      { name: "Oil (for dough)", quantity: 2, unit: "tbsp", added: false },
      { name: "Salt", quantity: 0.25, unit: "tsp", added: false },
      { name: "Water (for dough)", quantity: 1.25, unit: "cup", added: false },
      { name: "Ghee (for roasting and serving)", quantity: 4, unit: "tbsp", added: false }
    ],
    instructions: [
      { stepNumber: 1, text: "Wash and soak chana dal for 2–3 hours." },
      { stepNumber: 2, text: "Place dal with 3 cups water in a pressure cooker. Cook for 3 whistles on medium, then slow for 2–3 minutes." },
      { stepNumber: 3, text: "Let cooker cool, then open and drain excess water using a strainer (this water can be used for curry)." },
      { stepNumber: 4, text: "Mash the dal with a ladle in the cooking pan." },
      { stepNumber: 5, text: "Add jaggery and mix well. Cook on low until water evaporates (about 10 minutes). Stir regularly." },
      { stepNumber: 6, text: "Pass the sweet mixture through a strainer into a bowl below. This is the puran. Add cardamom and nutmeg powder. Mix well. Puran is ready." },
      { stepNumber: 7, text: "DOUGH: Knead wheat flour, maida, oil, and salt with water to make a very soft dough. Rest for 30 minutes." },
      { stepNumber: 8, text: "Make a small thick roti from dough. Make a slightly bigger ball of puran. Stuff the puran into the roti using palm and fingers, enclosing it fully." },
      { stepNumber: 9, text: "Roll the puranpoli gently with a rolling pin, dusting with maida as needed." },
      { stepNumber: 10, text: "Roast on medium flame using ghee until golden on both sides." },
      { stepNumber: 11, text: "Make all puranpolis similarly. Serve with ghee and milk." }
    ],
    rating: { average: 4.5, reviewCount: 0 },
    nutrition: [
      { label: "Calories", value: "435 kcal" },
      { label: "Carbohydrates", value: "72 g" },
      { label: "Protein", value: "10 g" },
      { label: "Fat", value: "14 g" },
      { label: "Saturated Fat", value: "7 g" },
      { label: "Fiber", value: "8 g" },
      { label: "Iron", value: "3.8 mg" },
      { label: "Calcium", value: "80 mg" }
    ],
    isFavorite: false
  }
];

module.exports = { data: recipesData }; 