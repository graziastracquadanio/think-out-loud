import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  snackbarMessage: string;
  isSnackbarVisible: boolean = false;
  isLoading: boolean = true;
  title = "app";
  thoughtsCreatorIsOpen = false;

  @HostListener("window:keydown", ["$event"])
  handleKeydown(event) {
    const shoudlToggle =
      (event.keyCode === 78 && !this.thoughtsCreatorIsOpen) ||
      (event.keyCode === 27 && this.thoughtsCreatorIsOpen);
    if (shoudlToggle) {
      event.preventDefault();
      this.toggleThoughtsCreator();
    }
  }

  thoughtsLoaded(value) {
    this.isLoading = value;
  }

  toggleThoughtsCreator() {
    this.thoughtsCreatorIsOpen = !this.thoughtsCreatorIsOpen;
  }

  thoughtSaved() {
    this.snackbarMessage = "Your thought has been sent for approval :)";
    this.toggleThoughtsCreator();
    this.showMessage();
  }

  showMessage() {
    this.isSnackbarVisible = true;
  }

  hideMessage() {
    this.isSnackbarVisible = false;
  }
}
