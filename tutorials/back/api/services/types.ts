import { Request } from "express";

interface AuthenticatedRequest extends Request {
  user?: User;
}

interface JwtPayload {
  username: string;
  exp: number; // Expiration time (in seconds since the epoch)
  iat: number; // Issued at time (in seconds since the epoch)
}

interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;

interface Drink {
  id: number;
  title: string;
  image: string;
  volume: number;
  price: number;
}

interface AuthenticatedUser {
  username: string;
  token: string;
}

interface User {
  id: number;
  username: string;
  password: string;
}

type NewDrink = Omit<Drink, "id">;

type PotentialUser = Omit<User, "id">;

export type { Pizza, NewPizza, PizzaToUpdate, Drink, NewDrink, AuthenticatedUser, User, PotentialUser, AuthenticatedRequest, JwtPayload, };
