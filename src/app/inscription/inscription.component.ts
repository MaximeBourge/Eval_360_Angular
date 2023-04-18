import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  username = '';
  email = '';
  password = '';
  passwordVerification = '';
  passwordFilled: boolean = false; // Ajout de la propriété passwordFilled
  signupForm: any;
  authService: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSignUp() {
    // TODO: Vérifier le type de compte de l'utilisateur et rediriger vers la page appropriée
    // Dans cet exemple, on redirige toujours vers la page d'accueil pour les élèves
    this.router.navigate(['/homestudent']);
  }



  onPasswordInput(): void {
    if (this.password && this.password.length > 0) {
      this.passwordFilled = true;
    } else {
      this.passwordFilled = false;
    }
  }

  onPasswordVerificationInput(): void {
    // Vérifie si les deux mots de passe sont identiques
  }


}
