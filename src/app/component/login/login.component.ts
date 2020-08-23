import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user-service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: [],
})
export class LoginComponent {
  public form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public userService: UserService
  ) {
    this.form = fb.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  public login() {
    console.log(this.form);
    if (this.form.valid) {
      console.log("q pasa");
      this.router.navigate(["rush/products"]);
    }
    console.log(this.form.valid);
    ///implementar  alerta de error
  }
}
