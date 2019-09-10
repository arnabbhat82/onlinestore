import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  toggle = true;
  savedChanges = false;
  errorMessage = '';
  dataLoading = false;
  private querySubscription;
  // profileUrl: Observable<string | null>;
  profileUrl: string;
  members: Observable<any>;
  error = false;
  counter = 0;
  myDocData;

  // tslint:disable-next-line: variable-name
  constructor(private _backendService: BackendService) { }

  ngOnInit() {
    this.getData();
  }

  getFilterData(filters) {
    this.dataLoading = true;
    this.querySubscription = this._backendService
      .getFilterProducts('product', filters)
      .subscribe(
        members => {
          this.members = members;
        },
        error => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {
          this.error = false;
          this.dataLoading = false;
        }
      );
  }

  getData() {
    this.dataLoading = true;
    this.querySubscription = this._backendService
      .getProducts('product')
      .subscribe(
        members => {
          this.members = members;
        },
        error => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {
          this.error = false;
          this.dataLoading = false;
        }
      );
  }

  getPic(picId) {
    this.profileUrl = '';
  }

  showDetails(item) {
    this.counter = 0;
    this.myDocData = item;
    this.getPic(item.path);
    // capture user interest event, user has looked into product details
    this.dataLoading = true;
    const data = item;

    this.querySubscription =
    this._backendService
      .updateShoppingInterest('interests', data)
      .subscribe(
        members => {
          this.dataLoading = false;
          this.counter = 0;
          this.savedChanges = true;
        },
        error => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {
          this.error = false;
          this.dataLoading = false;
        }
      );
  }
  countProd(filter) {
    if (filter === 'add') {
      this.counter = this.counter + 1;
    } else {
      if (this.counter > 0 ) {
        this.counter = this.counter - 1;
      }
    }
  }
  addToCart(item, counter) {
    this.dataLoading = true;
    const data = item;
    data.qty = counter;
    this.querySubscription =
    this._backendService
      .updateShoppingCart('cart', data)
      .subscribe(
        members => {
          this.dataLoading = false;
          this.counter = 0;
          this.savedChanges = true;
        },
        error => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {
          this.error = false;
          this.dataLoading = false;
        }
      );
  }

}
