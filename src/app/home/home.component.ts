import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faPhone = faPhone;
  menus = [
    {image:'../assets/nigiri sushi.png',title:'nigiri sushi',text:'It is a long established fact that <br> a reader will be distracted read.',amount:'55'},
    {image:'../assets/maki sushi.png',title:'maki sushi',text:'It is a long established fact that <br> a reader will be distracted by read.',amount:'40'},
    {image:'../assets/chirashi.png',title:'chirashi',text:'It is a long established fact that <br> a reader will be distracted by read.',amount:'36'},
    {image:'../assets/uramaki.png',title:'uramaki',text:'It is a long established fact that <br> a reader will be distracted by read.',amount:'54'},
    {image:'../assets/sashumi.png',title:'sashimi',text:'It is a long established fact that <br> a reader will be distracted by read.',amount:'34'},
    {image:'../assets/nigiri sushi.png',title:'nigiri',text:'It is a long established fact that <br> a reader will be distracted by read.',amount:'64'},
    {image:'../assets/futomaki.png',title:'futomaki',text:'It is a long established fact that <br> a reader will be distracted by read.',amount:'43'},
    {image:'../assets/sushi.png',title:'temaki',text:'It is a long established fact that <br> a reader will be distracted by read.',amount:'35'},
  ]
  
}




