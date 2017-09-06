import { Component, Input } from "@angular/core";

@Component({
  selector: "snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.scss"]
})
export class SnackbarComponent {
  constructor() {}

  @Input() public closeSnackbar: Function;
  @Input() message: string;
}
