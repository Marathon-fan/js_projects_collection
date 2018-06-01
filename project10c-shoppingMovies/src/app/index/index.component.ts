import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// yourwebsite.com/cart
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  public recentMovie = 'None';
  public movieList = ['american Made', 'dunkirk', 'war for planet of apes'];
  public cart = [];

  selectedMovie(movie) {
    this.recentMovie = movie;
    this.cart.push(movie);
    alert(movie + ' was selected');
  }

  constructor() { }

  ngOnInit() {
  }

}
