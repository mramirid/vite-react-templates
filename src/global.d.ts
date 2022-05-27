type Product = {
  title: string;
  price: number;
  description: string;
};

type ProductData = Omit<Product, "id">;

type Cart = {
  id: string;
  title: string;
  quantity: number;
  total: number;
  price: number;
};

type CartData = Omit<Cart, "id">;
