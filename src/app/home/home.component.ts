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
  
  deliveries = [
    { image: '../assets/healthy.jpeg', title: 'healthy food', paragraph: ' It is a long established fact that a reader will be distracte.' },
    { image: '../assets/best chef.jpeg', title: 'best chef', paragraph: ' It is a long established fact that a reader will be distracte.' },
    { image: '../assets/fast delivery.jpeg', title:'fast delivery', paragraph:' It is a long established fact that a reader will be distracte.'},
  ]

  items = [
    { image: '../assets/sashumi.png', title:'sashimi sushi', text: 'Ingredients: Potatoes, Vegetable Oil <br> (canola Oil, Corn Oil, Soybean <br> Oil, Hydrogenated Soybean Oil, <br> Natural Beef Flavor wheat And Milk <br> Derivatives, Dextrose, <br> Sodium Acid Pyrophosphate (maintain Color)' },
    { image: '../assets/uramaki.png', title:'uramaki sushi', text: 'Ingredients: Potatoes, Vegetable Oil <br> (canola Oil, Corn Oil, Soybean <br> Oil, Hydrogenated Soybean Oil, <br> Natural Beef Flavor wheat And Milk <br> Derivatives, Dextrose, <br> Sodium Acid Pyrophosphate (maintain Color)' },
    {image:'../assets/nigiri sushi.png', title:'nigiri sushi', text:'Ingredients: Potatoes, Vegetable Oil <br> (canola Oil, Corn Oil, Soybean <br> Oil, Hydrogenated Soybean Oil, <br> Natural Beef Flavor wheat And Milk <br> Derivatives, Dextrose, <br> Sodium Acid Pyrophosphate (maintain Color)'}
  ]

  recipes = [
    {image:'../assets/recipe1.png',title:'Fat Rolled Sushi With <br> Vegetables',paragraph:'Protein aroma first-class dish sour cookie. The course meal is lovely.',button:'<button>read more<button>'},
    {image:'../assets/recipe2.png',title:'Fat Rolled Sushi With <br> Vegetables',paragraph:'Protein aroma first-class dish sour cookie. The course meal is lovely.',button:'<button>read more<button>'},
    {image:'../assets/recipe3.png',title:'Fat Rolled Sushi With <br> Vegetables',paragraph:'Protein aroma first-class dish sour cookie. The course meal is lovely.',button:'<button>read more<button>'}
  ]
}




