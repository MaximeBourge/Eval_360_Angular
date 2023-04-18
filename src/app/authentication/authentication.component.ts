import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSignIn() {
    // TODO: Vérifier le type de compte de l'utilisateur et rediriger vers la page appropriée
    // Dans cet exemple, on redirige toujours vers la page d'accueil pour les élèves
    this.router.navigate(['/homestudent']);
  }

}
