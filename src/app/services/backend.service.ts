import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  updateProduct(arg0: string, formData: any) {
    throw new Error('Method not implemented.');
  }
  setProduct(arg0: string, formData: any) {
    throw new Error('Method not implemented.');
  }
  constructor() { }

  getConfig() {
    return environment.social;
  }
  getCartTotal() {
    const fakeresponse = '10';
    // tslint:disable-next-line: deprecation
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse);
        }, 2000);
      }
    );
  }
  getUserStatus() {
    const fakeresponse1 = true;
    // tslint:disable-next-line: deprecation
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse1);
        }, 2000);
      }
    );
  }
  getProducts(collType) {
    const fakeresponse2 = [{
      category: 'test',
      scategory: 'Test',
      name: 'Product name',
      price: '300',
      _id: '123'
    }];
    // tslint:disable-next-line: deprecation
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse2);
        }, 2000);
      }
    );
  }

  getFilterProducts(collType, filters) {
    const fakeresponse2 = [{
      category: 'test',
      scategory: 'Test',
      name: 'Product name',
      price: '300',
      _id: '123'
    }];
    // tslint:disable-next-line: deprecation
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse2);
        }, 2000);
      }
    );
  }


  setProducts(collType, filters) {
    const fakeresponse1 = true;
    // tslint:disable-next-line: deprecation
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse1);
        }, 2000);
      }
    );
  }
  updateProducts(collType, filters) {
    const fakeresponse1 = true;
    // tslint:disable-next-line: deprecation
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse1);
        }, 2000);
      }
    );
  }
  getOneProductDoc(collType, docId) {
    const fakeresponse2 = {
      category: 'test',
      scategory: 'Test',
      name: 'Product name',
      price: '300',
      _id: '123'
    };
    // tslint:disable-next-line: deprecation
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse2);
        }, 2000);
      }
    );
  }
  delOneProduct(collType, docId) {
    const fakeresponse1 = true;
    // tslint:disable-next-line: deprecation
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse1);
        }, 2000);
      }
    );
  }
  updateShoppingInterest(collType, data) {
    const fakeresponse1 = true;
    // tslint:disable-next-line: deprecation
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse1);
        }, 2000);
      }
    );
  }
  updateShoppingCart(collType, data) {
    const fakeresponse1 = true;
    // tslint:disable-next-line: deprecation
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse1);
        }, 2000);
      }
    );
  }
}
