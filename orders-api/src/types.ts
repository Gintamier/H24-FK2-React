export type Provision = {
  id: string;
  name: string;
  description: string;
  imageSource: string;
  price: number;
  category: string;
};

export type Dish = Provision & {
  cousine: string;
};

export interface Drink {
  id: string;
  name: string;
  description: string;
  price: number;
  qty: number;
  imageSource: string;
  category: string;
  brewer: string;
}

export type Order = {
  id: number;
  email: string;
  dish: Dish;
  drinks: Drink[];
  count: number;
  date: Date;
  time: string;
};
