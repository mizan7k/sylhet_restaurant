export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
}

export const MENU_DATA: MenuItem[] = [
  // Starters
  { id: 's1', name: 'Onion Bhaji', description: 'Deep fried onion balls with spices', price: 3.95, category: 'Starters', isVegetarian: true },
  { id: 's2', name: 'Samosa (Meat or Veg)', description: 'Pastry triangles with savory filling', price: 3.95, category: 'Starters' },
  { id: 's3', name: 'Chicken Tikka Starter', description: 'Marinated chicken grilled in tandoor', price: 4.50, category: 'Starters' },
  { id: 's4', name: 'Sheek Kebab', description: 'Minced lamb with herbs and spices', price: 4.50, category: 'Starters' },
  
  // Tandoori Specialties
  { id: 't1', name: 'Chicken Tikka Main', description: 'Succulent pieces of chicken marinated in yogurt and spices', price: 8.95, category: 'Tandoori' },
  { id: 't2', name: 'Lamb Tikka Main', description: 'Tender lamb marinated and grilled', price: 9.95, category: 'Tandoori' },
  { id: 't3', name: 'Tandoori Mixed Grill', description: 'Assortment of tandoori chicken, tikka, and kebab', price: 12.95, category: 'Tandoori' },

  // House Specials
  { id: 'h1', name: 'Sylhet Special Chicken', description: 'Chef\'s special recipe with aromatic spices', price: 10.95, category: 'House Specials', isSpicy: true },
  { id: 'h2', name: 'Chicken Tikka Masala', description: 'The classic creamy tomato-based curry', price: 9.50, category: 'House Specials' },
  { id: 'h3', name: 'Lamb Pasanda', description: 'Mild and creamy with almond and yogurt', price: 10.50, category: 'House Specials' },

  // Traditional Curries
  { id: 'c1', name: 'Chicken Korma', description: 'Very mild and creamy', price: 8.50, category: 'Traditional Curries' },
  { id: 'c2', name: 'Lamb Madras', description: 'Fairly hot and spicy', price: 9.50, category: 'Traditional Curries', isSpicy: true },
  { id: 'c3', name: 'Chicken Jalfrezi', description: 'Hot with green chilies and peppers', price: 9.50, category: 'Traditional Curries', isSpicy: true },

  // Rice & Breads
  { id: 'r1', name: 'Pilau Rice', description: 'Fragrant basmati rice', price: 3.25, category: 'Rice & Breads' },
  { id: 'r2', name: 'Garlic Naan', description: 'Freshly baked with garlic', price: 3.50, category: 'Rice & Breads' },
  { id: 'r3', name: 'Peshwari Naan', description: 'Sweet naan with nuts and raisins', price: 3.75, category: 'Rice & Breads' },
];

export const FAQ_DATA = [
  { question: 'Do you offer takeaway?', answer: 'Yes, we offer both collection and delivery services.' },
  { question: 'What are your opening hours?', answer: 'We are open Monday to Sunday, 5:00 PM to 11:00 PM (Closed on Tuesdays).' },
  { question: 'Do you cater for large parties?', answer: 'Absolutely! Please contact us in advance for bookings over 10 people.' },
  { question: 'Are there vegetarian options?', answer: 'Yes, we have a wide range of vegetarian starters and main courses.' },
];
