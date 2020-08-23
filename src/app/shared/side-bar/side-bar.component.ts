import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./side-bar.component.html",
  styleUrls: [],
})
export class SidebarComponent {
  constructor(public router: Router) {}

  public logout() {
    this.router.navigate([""]);
  }
}
