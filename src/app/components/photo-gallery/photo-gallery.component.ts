import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { Image } from '../../interfaces/image';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  standalone: true,
  imports: [],
  styleUrl: './photo-gallery.component.scss',
})
export class PhotoGalleryComponent implements OnInit {
  @Input() images: Image[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const lightbox = new PhotoSwipeLightbox({
        gallery: '#pswp-gallery',
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      lightbox.init();
    }
  }
}
