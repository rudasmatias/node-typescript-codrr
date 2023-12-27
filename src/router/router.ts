import { Router } from "express";

export class BaseRouter<T> {
  public router: Router; //Te da el endpoint (declaro el tipo)
  public controller: T; //Te da la lógica de router
  //public middleware:U;

  constructor(Tcontroller: { new (): T }) {
    this.router = Router(); //declaro la lógica por dentro
    this.controller = new Tcontroller();
    this.routes();
  }

  routes() {}
}
