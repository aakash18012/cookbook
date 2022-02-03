import { Injectable } from '@angular/core';
import { Toast } from 'src/app/models/toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: Toast[] = [];
  delay = 6000;
  
  constructor() { }
  
  add(toast: Toast) {
    this.toasts = [toast, ...this.toasts];

    setTimeout(() => {
      this.toasts = this.toasts.filter(v => v !== toast);
    }, this.delay);
  }
  remove(index: number) {
    this.toasts = this.toasts.filter((toast, i) => i !== index);
  }
}
