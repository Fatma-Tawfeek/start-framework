import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  displayLabel(event: any) {
    const target = event.target as HTMLInputElement;
    const label = target.previousElementSibling as HTMLElement;
    label.classList.remove('__top');
  }

  hideLabel(event: any) {
    const target = event.target as HTMLInputElement;
    const label = target.previousElementSibling as HTMLElement;
    if (target.value === '') {
      label.classList.add('__top');
    }
  }
}
