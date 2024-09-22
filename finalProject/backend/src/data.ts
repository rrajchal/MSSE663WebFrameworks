
export const sample_data: any[] = [
  { id: 1, name: 'Laptop', category: 'Hardware', price: 1200, stock: 50, description: 'High-performance laptop', image: 'assets/laptop.jpg' },
  { id: 2, name: 'Desktop', category: 'Hardware', price: 800, stock: 30, description: 'Powerful desktop computer', image: 'assets/desktop.jpg' },
  { id: 3, name: 'Printer', category: 'Hardware', price: 150, stock: 20, description: 'All-in-one printer', image: 'assets/printer.jpg' },
  { id: 4, name: 'Router', category: 'Hardware', price: 100, stock: 40, description: 'High-speed wireless router', image: 'assets/router.jpg' },
  { id: 5, name: 'Monitor', category: 'Hardware', price: 200, stock: 25, description: '24-inch HD monitor', image: 'assets/monitor.jpg' },
  { id: 6, name: 'OS Installation', category: 'Software', price: 100, description: 'Operating System Installation', image: 'assets/os_installation.jpg' },
  { id: 7, name: 'Virus Removal', category: 'Software', price: 80, description: 'Remove viruses and malware', image: 'assets/virus_removal.jpg' },
  { id: 8, name: 'Data Recovery', category: 'Software', price: 150, description: 'Recover lost data', image: 'assets/data_recovery.jpg' },
  { id: 9, name: 'Network Setup', category: 'Software', price: 120, description: 'Setup and configure network', image: 'assets/network_setup.jpg' },
  { id: 10, name: 'Hardware Repair', category: 'Software', price: 200, description: 'Repair hardware issues', image: 'assets/hardware_repair.jpg' },
];

export const generateCategories = (products: any[]): any[] => {
  const categoryMap: { [key: string]: number } = {};

  products.forEach(product => {
    Object.keys(categoryMap).forEach(category => {
      if (product.name.toLowerCase().includes(category.toLowerCase())) {
        categoryMap[category]++;
      }
    });
    
    if (categoryMap[product.category]) {
      categoryMap[product.category]++;
    } else {
      categoryMap[product.category] = 1;
    }
  });

  return Object.keys(categoryMap).map(category => ({
    name: category,
    count: categoryMap[category]
  }));
};

export const sample_categories: any[] = generateCategories(sample_data);

export const sample_users: any[] = [
  {
    name: "Donald Duck",
    email: "dd@gmail.com",
    password: "12345",
    address: "Colorado",
    isAdmin: true,
  },
  {
    name: "Mickey Mouse",
    email: "mm@gmail.com",
    password: "12345",
    address: "Nework",
    isAdmin: false,
  },
];

