import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { ActivatedRoute, Params } from '@angular/router';
import { DishService } from '../services/dish.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dish: Dish;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private dishService: DishService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.dishService.getDish(id)
      .then(dish => this.dish = dish);
  }

  goBack() {
    this.location.back();
  }

}
