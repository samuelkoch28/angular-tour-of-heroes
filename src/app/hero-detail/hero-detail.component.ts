import { Component, Input } from '@angular/core';
import {Hero} from '../hero';
import {FormsModule} from "@angular/forms";
import {UpperCasePipe} from "@angular/common";
@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  imports: [
    FormsModule,
    UpperCasePipe
  ],
  styleUrls: ['./hero-detail.component.scss']
})


export class HeroDetailComponent {
  @Input({required:true}) hero!: Hero;
}
