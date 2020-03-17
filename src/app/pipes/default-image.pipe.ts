import { Pipe, PipeTransform } from '@angular/core';
const DEFAULT_IMAGE = 'cv.png';
@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    // si la chaine est vide ou ne contient que des blancs on retourne defaultimage
    if (! path.trim().length) {
      return DEFAULT_IMAGE;
    }
    // sinon on retourne le meme path
    return path;
  }

}
