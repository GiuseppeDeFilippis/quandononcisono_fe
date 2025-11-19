import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminAuth {

  isLoggedIn(): boolean {
    // Implementa la logica di autenticazione
    // Ad esempio, verifica se esiste un token in localStorage
    return !!localStorage.getItem('adminToken');
  }
}
