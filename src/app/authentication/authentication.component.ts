import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/compat';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  username: string = "";
  email: string = "";
  password: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  /*onSignIn() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then(() => {
      // L'utilisateur est connecté
      const user = firebase.auth().currentUser;
      console.log(user.uid); // Affiche l'ID de l'utilisateur
      console.log(user.displayName); // Affiche le nom de l'utilisateur
      console.log(user.email); // Affiche l'e-mail de l'utilisateur
      console.log(user.photoURL); // Affiche l'URL de la photo de l'utilisateur
    })
    .catch((error) => {
      // Une erreur est survenue
      console.log(error);
    });
  }*/


  /*onSignIn() {
    // TODO: Vérifier le type de compte de l'utilisateur et rediriger vers la page appropriée
    // Dans cet exemple, on redirige toujours vers la page d'accueil pour les élèves
    this.router.navigate(['/homestudent']);
  }
  */

}
