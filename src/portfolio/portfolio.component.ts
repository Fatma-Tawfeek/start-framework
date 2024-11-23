import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  @ViewChild('lightbox') lightbox!: ElementRef;
  @ViewChild('lightboxImg') lightboxImg!: ElementRef;

  closeLightbox(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    if (targetElement.classList.contains('lightbox')) {
      this.lightbox.nativeElement.classList.add('d-none');
    }
  }

  openLightbox(event: MouseEvent): void {
    const targetElement = event.currentTarget as HTMLElement;
    const imageElement = targetElement.firstElementChild as HTMLImageElement;
    this.lightbox.nativeElement.classList.remove('d-none');
    this.lightboxImg.nativeElement.src = imageElement.src;
  }
}
