import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  titre: string = "Apprendre Le Data Binding En Angular";

  status: boolean = true;

  nom: string = "Ahmed Mayara";

  changerTitre() {
    this.titre = "Mon Nouveau Titre";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
