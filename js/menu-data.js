/* Demo cafe menu (sample items and prices).
   This is only the starting data. Once the admin edits the menu,
   the saved copy in the browser is used instead. */
window.CAFE_DEFAULT_MENU = (function () {
  const S4 = ['Small 6"', 'Medium 10"', 'Large 12"', 'XL 15"'];
  const S3 = ['Medium 10"', 'Large 12"', 'XL 15"'];

  // [name, description, price or [sizes prices], popular?]
  const cats = [
    { id: 'pizza-deals', name: 'Pizza Deals', group: 'food', icon: 'pizzadeal', items: [
      ['3 Small Pizzas Deal', '3 small pizzas + 1.5 litre drink', 1800],
      ['2 Medium Pizzas Deal', '2 medium pizzas + 1.5 litre drink', 2550],
      ['2 Large Pizzas Deal', '2 large pizzas + 1.5 litre drink', 3750, 1],
      ['2 XL Pizzas Deal', '2 XL pizzas + 1.5 litre drink', 5000],
      ['Family Pizza Deal', '1 XL pizza + 1 large pizza + 1 medium pizza + 2 x 1.5 litre drinks', 5200],
      ['Party Pizza Deal', '2 XL pizzas + 2 large pizzas + 2 medium pizzas + 3 x 1.5 litre drinks', 11000],
      ['Birthday Deal', '2 large pizzas + 3 zinger burgers + 2 roll parathas + 2 fries + 1.5 litre drink', 6500, 1],
    ]},
    { id: 'burger-deals', name: 'Burger Deals', group: 'food', icon: 'combo', items: [
      ['Deal 1', 'Zinger burger + 4 wings + 300ml drink', 750, 1],
      ['Deal 2', '5 zinger burgers + 1.5 litre drink', 2400],
      ['Deal 3', '3 grill burgers + roll paratha + 1.5 litre drink', 2050],
      ['Deal 4', '12 zinger burgers + 3 fries + 1.5 litre drink', 6000],
      ['Deal 5', '1 large pizza + 1 zinger burger + 1 fries + 1.5 litre drink', 2600],
      ['Deal 6', '2 zinger burgers + 2 shawarmas + 2 fries + 1.5 litre drink', 1650],
      ['Deal 7', '3 roll parathas + 2 shawarmas + 1.5 litre drink', 1500],
      ['Deal 8', '2 zinger burgers + 2 shawarmas + 2 fries + 1.5 litre drink', 2100],
      ['Deal 9', '10 zinger burgers + 3 roll parathas + 3 fries + 1.5 litre drink', 5700],
      ['Deal 10', '4 grill burgers + 2 fries + 1.5 litre drink', 2800],
      ['Student Deal', '1 large pizza + 1 zinger burger + 1 fries + 1.5 litre drink', 2300, 1],
    ]},
    { id: 'pizzas', name: 'Pizzas', group: 'food', icon: 'pizza', items: [
      ['Chicken Tikka Pizza', 'Tikka chicken, cheese, onion, capsicum, black olives', [600, 1300, 1800, 2500], 1],
      ['Chicken Fajita Pizza', 'Chicken, cheese, onion, capsicum', [600, 1300, 1800, 2500], 1],
      ['BBQ Pizza', 'BBQ sauce, onion, black olives', [600, 1300, 1800, 2500]],
      ['Vegetarian Pizza', 'Cheese, onion, tomato, capsicum, black olives, mushroom, green olives', [600, 1300, 1800, 2500]],
      ['Cheese Lover Pizza', 'Loaded with cheese only', [600, 1300, 1800, 2500]],
      ['Wing White Pizza', 'Saucy chicken with jalapeno', [600, 1300, 1800, 2500]],
      ['Chicken Pepperoni Pizza', 'Chicken, pepperoni, onion, capsicum', [600, 1300, 1800, 2500]],
      ['Beef Pepperoni Pizza', 'Beef, pepperoni, onion, capsicum', [700, 1400, 1900, 2600]],
    ]},
    { id: 'special-pizzas', name: 'Special Pizzas', group: 'food', icon: 'pizza', items: [
      ['House Special Pizza', 'Special chicken, cheese, veg and meat toppings with our special sauce', [700, 1400, 1950, 2600], 1],
      ['Crown Crust Pizza', 'Chicken, cheese, mushroom, olives, onion, capsicum', [700, 1400, 1950, 2600]],
      ['Stuffed Crust Pizza', 'Cheese, chicken, olives, mushroom, onion, capsicum', [700, 1400, 1950, 2600]],
      ['Thin Crust Pizza', 'Chicken, cheese and special meat and veg topping with sauce', [700, 1400, 1950, 2600]],
      ['Special Chicken Pepperoni', 'Cheese, chicken pepperoni', [700, 1400, 1950, 2600]],
      ['Special Beef Pepperoni', 'Beef pepperoni, cheese', [700, 1400, 1950, 2600]],
    ]},
    { id: 'bbq-pizzas', name: 'BBQ Pizzas', group: 'food', icon: 'pizza', items: [
      ['Malai Boti Pizza', 'Malai boti, cheese, mushroom, olives, capsicum', [1500, 2000, 2600]],
      ['Kebab Crust Pizza', 'Seekh kebab, cheese, olives, capsicum, onion, chicken', [1500, 2000, 2600]],
      ['Kebab Stuffed Pizza', 'Seekh kebab, cheese, olives, capsicum, onion, chicken', [1500, 2000, 2600]],
      ['Kebab Stuffed Cheesy Bite', 'Seekh kebab, cheese, chicken, olives, capsicum, onion', [1500, 2000, 2600]],
    ]},
    { id: 'zinger-burgers', name: 'Zinger Burgers', group: 'food', icon: 'burger', items: [
      ['Zinger Burger', 'Fried chicken burger served with lettuce and dressing', 500, 1],
      ['Zinger Cheese Burger', 'Fried chicken burger with lettuce, cheese and dressing', 550],
      ['Mayo Zinger Burger', 'Fried chicken burger with lettuce, mayo and dressing', 500],
      ['Hot Zinger Burger', 'Fried chicken burger glazed with hot sauce, lettuce and dressing', 700],
      ['BBQ Zinger Burger', 'Fried chicken burger glazed with sauce, lettuce and BBQ sauce', 600],
      ['Zingerella Burger', 'Fried chicken burger served with lettuce and dressing', 850],
    ]},
    { id: 'grill-burgers', name: 'Grill Burgers', group: 'food', icon: 'burger', items: [
      ['Chicken Grill Burger', 'Grilled chicken breast with lettuce and dressing', 600],
      ['Jalapeno Grill Burger', 'Grilled chicken breast with lettuce, jalapeno and dressing', 650],
      ['Mushroom Grill Burger', 'Grilled chicken breast with toasted mushroom, lettuce and dressing', 650],
      ['House Special Grill Burger', 'Our signature grilled chicken burger', 1000],
    ]},
    { id: 'beef-burgers', name: 'Beef Burgers', group: 'food', icon: 'burger', items: [
      ['Smash Burger Single', 'Ground beef, cheese, bun, onion, tomato, dressing', 950, 1],
      ['Double Smash Burger', 'Double ground beef, cheese, bun, onion, tomato, dressing', 1350],
    ]},
    { id: 'zinger-meals', name: 'Burger Meals', group: 'food', icon: 'combo', items: [
      ['Zinger Meal', 'Zinger + fries + soft drink', 800, 1],
      ['Zinger with Cheese Meal', 'Zinger + cheese + fries + soft drink', 900],
      ['Mayo Burger Meal', 'Mayo burger + fries + soft drink', 800],
      ['Chicken Burger Meal', 'Chicken burger + fries + soft drink', 650],
      ['Hot Zinger Meal', 'Hot zinger burger + fries + soft drink', 950],
      ['BBQ Zinger Meal', 'BBQ zinger burger + fries + soft drink', 900],
      ['Zingerella Meal', 'Zingerella burger + fries + soft drink', 1150],
      ['Chicken Grill Burger Meal', 'Grilled chicken burger + fries + soft drink', 950],
      ['Jalapeno Grill Burger Meal', 'Jalapeno grill burger + fries + soft drink', 950],
      ['Mushroom Grill Burger Meal', 'Mushroom grill burger + fries + soft drink', 950],
      ['House Special Grill Burger Meal', 'House special grill burger + fries + soft drink', 1300],
    ]},
    { id: 'broast', name: 'Broast', group: 'food', icon: 'chickenmeal', items: [
      ['Broast Meal 1', '2 chicken pieces + fries + half litre drink', 950],
      ['Broast Meal 2', '4 chicken pieces + fries + 1 litre drink', 1600],
      ['Broast Family Meal', '8 chicken pieces + fries + 1.5 litre drink', 2700, 1],
    ]},
    { id: 'fried-chicken', name: 'Fried Chicken', group: 'food', icon: 'chicken', items: [
      ['Fried Chicken Meal 1', '2 chicken pieces + fries + half litre drink', 850],
      ['Fried Chicken Meal 2', '4 chicken pieces + fries + 1 litre drink', 1450],
      ['Fried Chicken Family Meal', '8 chicken pieces + fries + 1.5 litre drink', 2700],
      ['Fried Chicken Piece', 'One crispy fried chicken piece', 350],
      ['Fried Nuggets', 'Crispy golden chicken nuggets', 400],
    ]},
    { id: 'wings', name: 'Wings', group: 'food', icon: 'wings', items: [
      ['Plain Wings', 'Marinated, seasoned deep fried wings (10 pcs)', 900],
      ['Hot Wings', 'Seasoned wings glazed in hot sauce (10 pcs)', 1000, 1],
      ['Honey Glazed Wings', 'Seasoned wings glazed in special honey (10 pcs)', 1000],
      ['BBQ Wings', 'Seasoned wings glazed in BBQ sauce (10 pcs)', 1000],
      ['Dynamite Wings', 'Fried wings glazed in dynamite sauce (10 pcs)', 1000],
    ]},
    { id: 'shawarmas', name: 'Shawarmas', group: 'food', icon: 'shawarma', items: [
      ['Chicken Shawarma', 'Marinated chicken, vegetables and sauce wrapped in pita bread', 300],
      ['Chicken Cheese Shawarma', 'Chicken, vegetables, sauce, cheese, pita bread', 350],
      ['Zinger Shawarma', 'Fried chicken, vegetables, sauce and pita bread', 450],
      ['Zinger Cheese Shawarma', 'Fried chicken, vegetables, sauce, cheese, pita bread', 500],
    ]},
    { id: 'wraps', name: 'Wraps', group: 'food', icon: 'shawarma', items: [
      ['Beef Cheesy Fiesta Wrap', 'Juicy beef, vegetables, cheese, tortilla bread, dressing and fries', 900],
      ['Peri Chicken Wrap', 'Spicy chicken, vegetables, tortilla bread, dressing and fries', 700],
    ]},
    { id: 'fries', name: 'Fries', group: 'food', icon: 'fries', items: [
      ['Simple Fries', 'Classic salted fries', 300],
      ['Masala Fries', 'Fries glazed in spices', 300],
      ['Mayo Garlic Fries', 'Fries glazed in mayo garlic sauce', 400],
      ['Dynamite Fries', 'Fries topped with dynamite sauce', 500],
      ['Loaded Pizza Fries', 'Fries topped with pizza sauce, vegetables, chicken and cheese', 900, 1],
      ['Loaded Mayo Fries', 'Fries topped with chicken and mayo garlic sauce', 700],
      ['Large Fries', 'A big portion of classic fries', 600],
    ]},
    { id: 'appetizers', name: 'Appetizers', group: 'food', icon: 'chicken', items: [
      ['Chicken Crisper (5 pcs)', 'Crispy tender chicken served with honey mustard sauce', 700],
      ['Crispy Fish and Chips (4 pcs)', 'Coated fish with bread crumbs and seasoning, served with tangy sauce', 1400],
      ['Dynamite Chicken (12-15 pcs)', 'Crispy bite sized fried chicken coated in special dynamite sauce', 950, 1],
      ['Peri Peri Bites (5 pcs)', 'Green chillies stuffed with tender grilled chicken and cheese', 650],
    ]},
    { id: 'salads', name: 'Salads', group: 'food', icon: 'salad', items: [
      ['Russian Salad', 'A rich creamy salad made with mixed vegetables and fruit', 500],
      ['Cocktail Salad', 'A rich creamy salad made with mixed fruit and cream', 600],
    ]},
    { id: 'soups', name: 'Soups', group: 'food', icon: 'soup', items: [
      ['Hot & Sour Soup', 'Carrot, egg, chicken, cabbage', 450],
      ['Chicken Corn Soup', 'A flavourful broth with sweet corn and chicken', 450],
      ['Thai Clear Soup', 'A traditional Thai soup made with chicken broth', 450],
      ['House Special Soup', 'Made with special ingredients: beef, shrimp and black mushroom', 550],
    ]},
    { id: 'chinese', name: 'Chinese', group: 'food', icon: 'chinese', items: [
      ['Chicken Cashew Nut with Rice', 'Stir-fried chicken and crispy cashew nuts in a savoury sauce, with rice', 1300],
      ['Kung Pao Chicken with Rice', 'Balance of sweet, sour and savoury stir-fry chicken', 1300],
      ['Mongolian Chicken with Rice', 'Sweet and savoury chicken', 1250],
      ['Crunchy Beef with Rice', 'Sweet and crispy beef tossed with sticky sauce', 1500],
      ['Fish Chilli Dry with Rice', 'A famous dish with flavourful hot sauces and hot chilli', 1500],
      ['Beef Chilli Dry with Rice', 'Sliced tender beef in flavourful hot sauce', 1500],
      ['Chicken Chilli Dry with Rice', 'Famous recipe in hot and flavourful sauce', 1200],
      ['Szechuan Chicken with Rice', 'Bold flavour and tangy sauce', 1200],
      ['Chicken Manchurian with Rice', 'Chicken in a sweet and sour sauce', 1200],
      ['Joha Fish with Rice', 'Crispy coated fish in a flavourful sauce', 1600],
      ['Sweet and Sour Fish with Rice', 'Fish in mouth watering sweet and sour sauce', 1600],
    ]},
    { id: 'noodles', name: 'Noodles', group: 'food', icon: 'noodles', items: [
      ['Chicken Chowmein', 'Chinese stir noodles, vegetables and chicken', 950],
      ['Special Chowmein', 'Chinese stir noodles, vegetables, mixed proteins, shrimp and beef', 1300],
    ]},
    { id: 'rice', name: 'Rice', group: 'food', icon: 'rice', items: [
      ['Egg Fried Rice', 'Egg, rice and vegetables', 500],
      ['Garlic Butter Rice', 'Buttery rice cooked with sauteed garlic', 500],
      ['Steam Rice', 'Steamed or boiled rice', 300],
      ['Chicken Fried Rice', 'Chicken, rice and vegetables', 600],
    ]},
    { id: 'steaks', name: 'Steaks', group: 'food', icon: 'steak', items: [
      ['Tarragon Steak', 'Char grilled with special tarragon sauce', 1500],
      ['Mushroom Steak', 'Char grilled and served with mushroom sauce', 1500],
      ['Moroccan Steak', 'Grilled chicken served with Moroccan sauce', 1500],
      ['Jalapeno Steak', 'Grilled chicken served with special jalapeno sauce', 1650],
      ['Black Pepper Steak', 'Grilled chicken served with black pepper sauce', 1600],
      ['Stuffed Chicken', 'Chicken breast filled with cheese, spinach and herbs', 1600],
      ['Chateaubriand Steak', 'Premium beef steak', 2895],
      ['Beef Filet Steak', 'Tender beef filet steak', 2895],
      ['Docked Beef Steak', 'Classic beef steak', 2895],
    ]},
    { id: 'pasta', name: 'Pasta', group: 'food', icon: 'pasta', items: [
      ['Penne Arrabiata Pasta', 'Spicy sauce made with tomatoes and garlic', 550],
      ['Penne Alfredo Pasta', 'Penne pasta, chicken, mushroom, white sauce', 950],
      ['Lasagna Pasta', 'Layered baked lasagna', 1250],
    ]},
    { id: 'sandwiches', name: 'Sandwiches', group: 'food', icon: 'sandwich', items: [
      ['Panini Sandwich (Toasted)', 'Sandwich bread, grilled chicken, lettuce, cheese, tomato', 750],
      ['Club Sandwich', 'Three layer toasted sandwich with chicken, veg and egg', 750],
    ]},
    { id: 'dips', name: 'Dip Sauces', group: 'food', icon: 'sauce', items: [
      ['Mayonnaise Dip', 'Creamy mayo dip', 100],
      ['Mayo Garlic Dip', 'Mayo garlic dip', 100],
      ['Thousand Island Dip', 'Thousand island dip', 100],
    ]},

    { id: 'hot-coffee', name: 'Hot Coffee', group: 'bar', icon: 'coffee', items: [
      ['Cappuccino', '', 650, 1], ['Cafe Latte', '', 675], ['Flat White', '', 750], ['Cortado', '', 550],
      ['Macchiato', '', 550], ['Espresso Shot', '', 500], ['Doppio', '', 800], ['Americano', '', 550],
      ['Espresso Martini', 'Non-alcoholic coffee mocktail', 750],
      ['Spanish Latte', '', 750], ['Hazelnut Latte', '', 850], ['Caramel Latte', '', 750], ['Vanilla Latte', '', 750],
      ['Salted Caramel Latte', '', 750], ['Irish Nut Latte', '', 750], ['Rose Latte', '', 750], ['Cafe Mocha', '', 750],
      ['White Mocha', '', 750], ['Extra Syrup', 'Add a flavour shot to any coffee', 300],
    ]},
    { id: 'tea-chocolate', name: 'Tea & Hot Chocolate', group: 'bar', icon: 'tea', items: [
      ['Classic Hot Chocolate', '', 800, 0, 'cocoa'], ['White Hot Chocolate', '', 850, 0, 'cocoa'],
      ['Special Tea', '', 200], ['Green Tea', '', 150], ['Cardamom Tea', '', 250],
    ]},
    { id: 'iced-coffee', name: 'Iced & Cold Coffee', group: 'bar', icon: 'icedcoffee', items: [
      ['Iced Caffe', '', 690], ['Iced Caramel', '', 690], ['Iced Vanilla', '', 690], ['Iced Hazelnut', '', 690],
      ['Iced Rose Latte', '', 690], ['Iced Coconut', '', 700], ['Iced Spanish Latte', '', 750, 1], ['Iced Mocha', '', 750],
      ['Biscoff Iced Latte', '', 750], ['White Iced Mocha', '', 750], ['Iced Americano', '', 650],
      ['Cold Coffee', '', 650, 1], ['Caramel Frappe', '', 650], ['Chocolate Frappe', '', 650], ['Vanilla Frappe', '', 650],
    ]},
    { id: 'frappes', name: 'Frappes & Smoothies', group: 'bar', icon: 'frappe', items: [
      ['Cookies N Cream Frappe', 'Non coffee', 590], ['Lotus Frappe', 'Non coffee', 650], ['Caramel Frappe (Non Coffee)', '', 590],
      ['Vanilla Frappe (Non Coffee)', '', 590], ['Chocolate Frappe (Non Coffee)', '', 590],
      ['Peach Smoothie', 'Chiller', 650, 0, 'smoothie'], ['Mango Smoothie', 'Chiller', 650, 0, 'smoothie'], ['Strawberry Smoothie', 'Chiller', 650, 0, 'smoothie'],
    ]},
    { id: 'shakes', name: 'Shakes', group: 'bar', icon: 'shake', items: [
      ['Mango Shake', '', 400], ['Banana Shake', '', 350], ['Apple Shake', '', 350], ['Banana Dates Shake', '', 350],
      ['KitKat Shake', '', 600, 1], ['Snickers Shake', '', 600], ['Oreo N Cream Shake', '', 450],
    ]},
    { id: 'juices', name: 'Fresh Juices', group: 'bar', icon: 'juice', items: [
      ['Mango Juice', 'Seasonal', 500], ['Musambi Juice', 'Seasonal', 500], ['Apple Juice', 'Seasonal', 650],
      ['Anaar Juice', 'Seasonal pomegranate', 850], ['Carrot Juice', 'Seasonal', 600], ['Orange Juice', 'Seasonal', 450],
      ['Watermelon Juice', 'Seasonal', 450],
    ]},
    { id: 'mocktails', name: 'Mocktails & Margaritas', group: 'bar', icon: 'mocktail', items: [
      ['Passion Fruit Mojito', '', 600, 1], ['Raspberry Mojito', '', 600], ['Virgin Mojito', '', 550], ['Moscow Mule Mojito', '', 450],
      ['Strawberry Shrub', '', 600], ['Pineapple Spritzer', '', 590], ['Orange Lemonade', '', 600], ['Ginger Mor', '', 590],
      ['Blue Lagoon', '', 700], ['Brew Mojito', '', 550],
      ['Mint Margarita', '', 400, 0, 'margarita'], ['Spanish Margarita', '', 250, 0, 'margarita'],
      ['Peach Margarita', '', 470, 0, 'margarita'], ['Pina Colada', '', 450, 0, 'margarita'],
    ]},
    { id: 'boba', name: 'Boba Tea', group: 'bar', icon: 'boba', items: [
      ['Strawberry Boba', '', 550], ['Green Apple Boba', '', 550], ['Mango Boba', '', 550], ['Passion Fruit Boba', '', 550],
    ]},
    { id: 'iced-tea-soda', name: 'Iced Tea & Soda', group: 'bar', icon: 'soda', items: [
      ['Lemon Iced Tea', '', 475, 0, 'juice'], ['Ginger Iced Tea', '', 475, 0, 'juice'], ['Green Apple Iced Tea', '', 500, 0, 'juice'],
      ['Lemon Soda', '', 250], ['Green Apple Soda', '', 250], ['Pomme Soda', '', 250],
    ]},
    { id: 'ice-cream', name: 'Ice Cream Scoops', group: 'bar', icon: 'icecream', items: [
      ['Pista Scoop', '', 250], ['Vanilla Scoop', '', 250], ['Mango Scoop', '', 250], ['Strawberry Scoop', '', 250], ['Kulfa Scoop', '', 250],
    ]},

    { id: 'cakes', name: 'Cakes & Slices', group: 'desserts', icon: 'cake', items: [
      ['Nutella Chocolate Cheese Cake Slice', '', 650], ['Lotus Cheese Cake Slice', '', 650], ['German Chocolate Slice', '', 550],
      ['Coffee Caramel Slice', '', 550], ['Red Velvet Slice', '', 550], ['Locker Chocolate Slice', '', 550], ['Lotus Cake Slice', '', 550],
      ['Dairy Milk Cake Slice', '', 550], ['Nutella Cake Slice', '', 550], ['Caramel Cake Slice', '', 550],
      ['Chocolate Fudge Cake Slice', '', 550], ['Dream Cake Slice', '', 550], ['Three Milks Cake Slice', '', 550],
      ['Lotus Eclair', '', 350], ['Chocolate Eclair', '', 350], ['Chocolate Mousse', '', 450],
    ]},
    { id: 'cupcakes', name: 'Cupcakes', group: 'desserts', icon: 'cupcake', items: [
      ['Lotus Cup Cake', '', 280], ['Red Velvet Cup Cake', '', 280], ['Caramel Cup Cake', '', 280], ['KitKat Cup Cake', '', 280],
      ['Oreo Cup Cake', '', 280], ['Chocolate Cup Cake', '', 280],
    ]},
    { id: 'sundaes', name: 'Sundaes & Tres Leches', group: 'desserts', icon: 'icecream', items: [
      ['Lotus Tres Leches Sundae', '', 650], ['Locker Chocolate Sundae', '', 650], ['Dubai Gold Sundae', '', 650],
      ['Strawberry Puree Sundae', '', 650],
      ['Chocolate Tres Leches Tub', '', 750, 0, 'cake'], ['Lotus Tres Leches Tub', '', 750, 0, 'cake'],
      ['Pistachio Tres Leches Tub', '', 750, 0, 'cake'], ['Three Milk Tub', '', 750, 0, 'cake'],
    ]},
    { id: 'brownies', name: 'Brownies & Cookies', group: 'desserts', icon: 'brownie', items: [
      ['Oreo Brownie', '', 400], ['Triple Chocolate Brownie', '', 400], ['Nutella Brownie', '', 400],
      ['Oreo Brownie with Ice Cream', '', 550], ['Triple Chocolate Brownie with Ice Cream', '', 550],
      ['Nutella Brownie with Ice Cream', '', 550], ['Chocolate Chip Cookies', '', 180, 0, 'cookie'],
    ]},
    { id: 'kunafa', name: 'Kunafa', group: 'desserts', icon: 'kunafa', items: [
      ['Pistachio Kunafa', '', 950], ['Arabian Kunafa', '', 950],
    ]},
  ];

  const categories = [];
  const products = [];
  const slug = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const used = {};
  cats.forEach(c => {
    categories.push({ id: c.id, name: c.name, group: c.group, icon: c.icon });
    c.items.forEach(it => {
      const [name, desc, price, popular, icon] = it;
      let id = slug(name);
      if (used[id]) id = id + '-' + c.id;
      used[id] = 1;
      const p = { id, cat: c.id, name, desc: desc || '', price: null, sizes: [], icon: icon || '', img: '', available: true, popular: !!popular };
      if (Array.isArray(price)) {
        const labels = price.length === 4 ? S4 : S3;
        p.sizes = price.map((v, i) => ({ label: labels[i], price: v }));
      } else {
        p.price = price;
      }
      products.push(p);
    });
  });
  // Product photos: free licence photos from Pexels (Pexels licence / CC0).
  // Items not listed keep their drawn icon. The admin can replace any photo.
  const P = {
    // pizza deals
    '3-small-pizzas-deal': 'pizzas2', '2-medium-pizzas-deal': 'pizzas', '2-large-pizzas-deal': 'fajita', '2-xl-pizzas-deal': 'pizzas2',
    'family-pizza-deal': 'fajita', 'party-pizza-deal': 'pizzas', 'birthday-deal': 'fajita',
    // burger deals
    'deal-1': 'meal', 'deal-2': 'zinger2', 'deal-3': 'grill2', 'deal-4': 'zinger', 'deal-5': 'meal', 'deal-6': 'wrap2',
    'deal-7': 'shawarma', 'deal-8': 'wrap2', 'deal-9': 'zinger', 'deal-10': 'grill', 'student-deal': 'meal',
    // pizzas
    'chicken-tikka-pizza': 'tikka', 'chicken-fajita-pizza': 'cheesepull', 'bbq-pizza': 'bbqpizza', 'vegetarian-pizza': 'vegpizza',
    'cheese-lover-pizza': 'cheesepizza', 'wing-white-pizza': 'pizzas2', 'chicken-pepperoni-pizza': 'pepperoni', 'beef-pepperoni-pizza': 'pepperoni2',
    'house-special-pizza': 'tikka', 'crown-crust-pizza': 'vegpizza', 'stuffed-crust-pizza': 'cheesepull', 'thin-crust-pizza': 'cheesepizza',
    'special-chicken-pepperoni': 'pepperoni2', 'special-beef-pepperoni': 'pepperoni',
    'malai-boti-pizza': 'bbqpizza', 'kebab-crust-pizza': 'tikka', 'kebab-stuffed-pizza': 'cheesepull', 'kebab-stuffed-cheesy-bite': 'pizzas2',
    // burgers
    'zinger-burger': 'zinger2', 'zinger-cheese-burger': 'zinger', 'mayo-zinger-burger': 'zinger2', 'hot-zinger-burger': 'zinger',
    'bbq-zinger-burger': 'zinger2', 'zingerella-burger': 'zinger',
    'chicken-grill-burger': 'grill2', 'jalapeno-grill-burger': 'grill', 'mushroom-grill-burger': 'grill2', 'house-special-grill-burger': 'grill',
    'smash-burger-single': 'smash', 'double-smash-burger': 'smash',
    'zinger-meal': 'zinger', 'zinger-with-cheese-meal': 'meal', 'mayo-burger-meal': 'zinger', 'chicken-burger-meal': 'meal', 'hot-zinger-meal': 'zinger',
    'bbq-zinger-meal': 'meal', 'zingerella-meal': 'zinger', 'chicken-grill-burger-meal': 'meal', 'jalapeno-grill-burger-meal': 'meal',
    'mushroom-grill-burger-meal': 'meal', 'house-special-grill-burger-meal': 'meal',
    // chicken
    'broast-meal-1': 'friedchicken', 'broast-meal-2': 'friedchicken', 'broast-family-meal': 'friedchicken',
    'fried-chicken-meal-1': 'friedchicken', 'fried-chicken-meal-2': 'friedchicken', 'fried-chicken-family-meal': 'friedchicken',
    'fried-chicken-piece': 'friedchicken', 'fried-nuggets': 'nuggets',
    'plain-wings': 'wings', 'hot-wings': 'hotwings', 'honey-glazed-wings': 'honeywings', 'bbq-wings': 'bbqwings', 'dynamite-wings': 'hotwings',
    'chicken-shawarma': 'shawarma', 'chicken-cheese-shawarma': 'shawarma', 'zinger-shawarma': 'shawarma', 'zinger-cheese-shawarma': 'shawarma',
    'beef-cheesy-fiesta-wrap': 'wrap2', 'peri-chicken-wrap': 'wrap',
    // fries & starters
    'simple-fries': 'fries2', 'masala-fries': 'fries', 'mayo-garlic-fries': 'fries2', 'dynamite-fries': 'fries', 'loaded-pizza-fries': 'fries',
    'loaded-mayo-fries': 'fries2', 'large-fries': 'fries',
    'chicken-crisper-5-pcs': 'popcorn', 'crispy-fish-and-chips-4-pcs': 'fishchips', 'dynamite-chicken-12-15-pcs': 'chilli', 'peri-peri-bites-5-pcs': 'poppers',
    'russian-salad': 'russian', 'cocktail-salad': 'fruitsalad',
    'hot-and-sour-soup': 'hotsour', 'chicken-corn-soup': 'cornsoup', 'thai-clear-soup': 'clearsoup', 'house-special-soup': 'hotsour',
    // chinese, rice, noodles
    'chicken-cashew-nut-with-rice': 'cashew', 'kung-pao-chicken-with-rice': 'kungpao', 'mongolian-chicken-with-rice': 'chilli',
    'crunchy-beef-with-rice': 'beefstir', 'fish-chilli-dry-with-rice': 'sweetsourfish', 'beef-chilli-dry-with-rice': 'beefstir',
    'chicken-chilli-dry-with-rice': 'chilli', 'szechuan-chicken-with-rice': 'kungpao', 'chicken-manchurian-with-rice': 'chilli',
    'joha-fish-with-rice': 'sweetsourfish', 'sweet-and-sour-fish-with-rice': 'sweetsourfish',
    'chicken-chowmein': 'chowmein', 'special-chowmein': 'chowmein',
    'egg-fried-rice': 'eggrice', 'garlic-butter-rice': 'garlicrice', 'steam-rice': 'steamrice', 'chicken-fried-rice': 'eggrice',
    // continental
    'tarragon-steak': 'chickensteak', 'mushroom-steak': 'mushroomsteak', 'moroccan-steak': 'chickensteak', 'jalapeno-steak': 'chickensteak',
    'black-pepper-steak': 'mushroomsteak', 'stuffed-chicken': 'chickensteak',
    'chateaubriand-steak': 'beefsteak', 'beef-filet-steak': 'beefsteak', 'docked-beef-steak': 'beefsteak',
    'penne-alfredo-pasta': 'alfredo', 'panini-sandwich-toasted': 'panini', 'club-sandwich': 'club',
    'mayonnaise-dip': 'dips', 'mayo-garlic-dip': 'dips', 'thousand-island-dip': 'dips',
    // coffee & tea
    'cappuccino': 'cappuccino', 'cafe-latte': 'latte', 'flat-white': 'flatwhite', 'cortado': 'macchiato', 'macchiato': 'macchiato',
    'espresso-shot': 'espresso', 'doppio': 'espresso', 'americano': 'americano', 'espresso-martini': 'mocha',
    'spanish-latte': 'latte', 'hazelnut-latte': 'caramellatte', 'caramel-latte': 'caramellatte', 'vanilla-latte': 'latte',
    'salted-caramel-latte': 'caramellatte', 'irish-nut-latte': 'latte', 'rose-latte': 'latte', 'cafe-mocha': 'mocha', 'white-mocha': 'mocha',
    'classic-hot-chocolate': 'hotchoc', 'white-hot-chocolate': 'hotchoc', 'special-tea': 'chai', 'cardamom-tea': 'masalachai',
    'iced-caffe': 'icedcoffee', 'iced-caramel': 'icedlatte', 'iced-vanilla': 'icedlatte', 'iced-hazelnut': 'icedcoffee', 'iced-rose-latte': 'icedlatte',
    'iced-coconut': 'icedcoffee', 'iced-spanish-latte': 'icedlatte', 'iced-mocha': 'icedcoffee', 'biscoff-iced-latte': 'icedlatte',
    'white-iced-mocha': 'icedcoffee', 'iced-americano': 'icedamericano',
    'cold-coffee': 'frappe', 'caramel-frappe': 'frappe', 'chocolate-frappe': 'chocshake', 'vanilla-frappe': 'frappe',
    // frappes, shakes, juices
    'cookies-n-cream-frappe': 'oreo', 'lotus-frappe': 'frappe', 'caramel-frappe-non-coffee': 'frappe', 'vanilla-frappe-non-coffee': 'frappe',
    'chocolate-frappe-non-coffee': 'chocshake', 'peach-smoothie': 'peachsmoothie', 'mango-smoothie': 'mangosmoothie', 'strawberry-smoothie': 'strawsmoothie',
    'mango-shake': 'mangoshake', 'banana-shake': 'bananashake', 'banana-dates-shake': 'bananashake', 'kitkat-shake': 'chocshake',
    'snickers-shake': 'chocshake', 'oreo-n-cream-shake': 'oreo',
    'mango-juice': 'mangojuice', 'musambi-juice': 'orange', 'apple-juice': 'apple', 'anaar-juice': 'pomegranate', 'carrot-juice': 'carrot',
    'orange-juice': 'orange', 'watermelon-juice': 'watermelon',
    // mocktails, boba, soda
    'passion-fruit-mojito': 'passion', 'raspberry-mojito': 'strawshrub', 'virgin-mojito': 'mojito2', 'moscow-mule-mojito': 'mojito',
    'pineapple-spritzer': 'passion', 'blue-lagoon': 'bluelagoon', 'brew-mojito': 'mojito', 'mint-margarita': 'mintmargarita', 'pina-colada': 'pinacolada',
    'strawberry-boba': 'strawmilk', 'green-apple-boba': 'boba', 'mango-boba': 'boba', 'passion-fruit-boba': 'boba',
    'lemon-iced-tea': 'icedtea', 'ginger-iced-tea': 'icedtea', 'green-apple-iced-tea': 'icedtea',
    'lemon-soda': 'soda', 'green-apple-soda': 'soda', 'pomme-soda': 'soda',
    'pista-scoop': 'pistachioice', 'vanilla-scoop': 'kulfi', 'kulfa-scoop': 'kulfi',
    // desserts
    'nutella-chocolate-cheese-cake-slice': 'cheesecake', 'lotus-cheese-cake-slice': 'cheesecake', 'german-chocolate-slice': 'chococake',
    'coffee-caramel-slice': 'caramelcake', 'red-velvet-slice': 'redvelvet', 'locker-chocolate-slice': 'chococake', 'lotus-cake-slice': 'caramelcake',
    'dairy-milk-cake-slice': 'chococake', 'nutella-cake-slice': 'chococake', 'caramel-cake-slice': 'caramelcake',
    'chocolate-fudge-cake-slice': 'chococake', 'dream-cake-slice': 'chococake', 'three-milks-cake-slice': 'tresleches',
    'lotus-eclair': 'eclair', 'chocolate-eclair': 'eclair', 'chocolate-mousse': 'mousse',
    'lotus-cup-cake': 'cupcake', 'red-velvet-cup-cake': 'rvcupcake', 'caramel-cup-cake': 'cupcake', 'kitkat-cup-cake': 'choccupcake',
    'oreo-cup-cake': 'choccupcake', 'chocolate-cup-cake': 'choccupcake',
    'lotus-tres-leches-sundae': 'sundae', 'locker-chocolate-sundae': 'sundae', 'dubai-gold-sundae': 'sundae', 'strawberry-puree-sundae': 'sundae',
    'chocolate-tres-leches-tub': 'tresleches', 'lotus-tres-leches-tub': 'tresleches', 'pistachio-tres-leches-tub': 'tresleches', 'three-milk-tub': 'tresleches',
    'oreo-brownie': 'brownie', 'triple-chocolate-brownie': 'brownie', 'nutella-brownie': 'brownie',
    'oreo-brownie-with-ice-cream': 'brownieice', 'triple-chocolate-brownie-with-ice-cream': 'brownieice', 'nutella-brownie-with-ice-cream': 'brownieice',
    'chocolate-chip-cookies': 'cookies', 'pistachio-kunafa': 'kunafa', 'arabian-kunafa': 'kunafa',
    // second round
    'penne-arrabiata-pasta': 'arrabbiata', 'lasagna-pasta': 'lasagna', 'green-tea': 'greentea', 'apple-shake': 'appleshake',
    'mango-scoop': 'mangoice', 'strawberry-scoop': 'strawice', 'ginger-mor': 'gingermor', 'spanish-margarita': 'citrusdrink',
    'peach-margarita': 'peachdrink', 'strawberry-shrub': 'strawshrub', 'orange-lemonade': 'orangemock',
  };
  const missing = [];
  Object.keys(P).forEach(id => {
    const p = products.find(x => x.id === id);
    if (p) p.img = 'images/menu/' + P[id] + '.jpg'; else missing.push(id);
  });
  if (missing.length && window.console) console.warn('Photo map ids not found:', missing);

  return { categories, products, photosV1: true };
})();
