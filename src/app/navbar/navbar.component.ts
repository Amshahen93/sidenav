import { Component, OnInit } from '@angular/core';
import { navbar } from './navbarData';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarTitlesAndPats = [];
  isOpenNavbar = false;
  constructor() { }

  ngOnInit() {
    this.navbarTitlesAndPats = navbar;
  }
  openNavbar() {
    this.isOpenNavbar = !this.isOpenNavbar;
  }
  clickOnButton(index: number, buttonData) {
    this.openOrCloseSubmenu(index);
    this.navigateToPath(buttonData);
    this.openPopup(buttonData);
  }

  openOrCloseSubmenu(index: number) {
    if (index !== null && this.navbarTitlesAndPats[index].subManue) {
      this.navbarTitlesAndPats[index].subMenuIsOpen = !this.navbarTitlesAndPats[index].subMenuIsOpen;
    }
  }
  navigateToPath(buttonData) {
    if (buttonData.path) {
      console.log(buttonData.path);
    }
  }
  openPopup(buttonData) {
    if (buttonData.popup) {
      console.log(buttonData.popup);
    }
  }
}
