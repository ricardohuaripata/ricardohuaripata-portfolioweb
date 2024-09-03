import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    @Inject(DOCUMENT) private _document: Document,
    public title: Title,
    public meta: Meta
  ) {}

  setCanonicalURL(url: string) {
    const CANONICAL_URL = url == undefined ? this._document.URL : url;
    const HEAD = this._document.getElementsByTagName('head')[0];

    let element: HTMLLinkElement | null = this._document.querySelector('link[rel="canonical"]') || null;
    if (!element) {
      element = this._document.createElement('link') as HTMLLinkElement;
      HEAD.appendChild(element);
    }
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', CANONICAL_URL);
  }

  setIndexFollow(state: boolean = true) {
    this.meta.updateTag({ name: 'robots', content: state ? 'index, follow' : 'noindex, nofollow'});
  }

  addPreloadImage(imageUrl: string): void {
    const HEAD = this._document.getElementsByTagName('head')[0];
    const element = this._document.createElement('link') as HTMLLinkElement;
    element.setAttribute('rel', 'preload');
    element.setAttribute('as', 'image');
    element.setAttribute('href', imageUrl);
    HEAD.appendChild(element);
  }
  
}
