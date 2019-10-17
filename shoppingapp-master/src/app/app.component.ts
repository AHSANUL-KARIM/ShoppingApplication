import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Shopping';
  results = [];
  products = [];
  cart = [];
  addtoCart = function(item){
    alert(item.name + " was added to cart for $" + item.price);
    this.cart.push(item);
  }

  constructor(private http: HttpClient){

  }

  

  ngOnInit() : void {
    interface Product {
      name: string;
      category: string;
      price: number;
    }

    this.http.get<Product>('http://localhost:51276/api/Products').subscribe(data => {
      for(let i in data) this.results.push(data[i]);
    });
  }
}
