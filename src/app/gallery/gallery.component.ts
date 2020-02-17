import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public _albums: Array<any> = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 6; i++) {
      const src = 'assets/img/is' + (i) + '.jpg';
      const caption = ''; //'Image ' + i + ' caption here';
      const thumb = 'assets/img/is' + (i) + '.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
 
      this._albums.push(album);
   }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  ngOnInit() {
   // baguetteBox.run('.gallery');
  }

  // ngAfterViewInit(){
  //   baguetteBox.run('.gallery');
  // }

}
