import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-my-nav',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, FontAwesomeModule],
  templateUrl: './my-nav.component.html',
  styleUrl: './my-nav.component.scss'
})
export class MyNavComponent {

  navmenu: any = [
    {
      name: "HOME",
      path: ""
    },
    {
      name: "Products",
      path: "products"
    },
    {
      name: "STORE",
      path: "productAdd"
    },
    {
      name: "ABOUT",
      path: "about"
    },
  ]
  sun: any = faSun
  moon: any = faMoon
  modeicon: any
  ngOnInit(): void {


    if (localStorage.getItem("theme") == "dark") {
      let body = document.documentElement
      body.classList.add("dark")
      this.modeicon = this.sun
    } else {
      let body = document.documentElement
      body.classList.remove("dark")
      this.modeicon = this.moon
    }

  } 
  dark() {

    if (localStorage.getItem("theme") == "light") {
      let body = document.documentElement
      body.classList.add("dark")

      this.modeicon = this.sun
      localStorage.setItem("theme", "dark")
    } else {
      let body = document.documentElement
      body.classList.remove("dark")
      this.modeicon = this.moon


      localStorage.setItem("theme", "light")

    }
  }
}
