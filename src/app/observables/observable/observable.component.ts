import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  imageObservable: Observable<string>;
  path = 'as.jpg';
  pathImages = [
    '404.png',
    'cv.png',
    'as.jpg'
  ];
  constructor() {
  }
  ngOnInit() {
    this.imageObservable = new Observable<string>((observer) => {
      let i = 0 ;
      setInterval(() => {
        if (i === this.pathImages.length) {
          i = 0;
        }
        observer.next(this.pathImages[i++]);
      }, 1000);
    });
    this.imageObservable.subscribe(
      (path) => this.path = path
    );
    // observable.subscribe((val) => {
    //   console.log(val);
    // });
    // observable.subscribe(
    //   (valeur) => console.log(2 * valeur),
    //   (erreur) => console.log(erreur),
    //   () => console.log('END :D')
    // );
  }
}
