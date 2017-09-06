import { Component, Output, EventEmitter } from "@angular/core";
import { ThoughtsService } from "services";
import { Thought } from "classes";
import { NgForm } from "@angular/forms";

@Component({
  selector: "new-thought",
  templateUrl: "./new-thought.component.html",
  styleUrls: ["./new-thought.component.scss"]
})
export class NewThoughtComponent {
  canSend: boolean = false;
  constructor(private thoughtsService: ThoughtsService) {}

  @Output() thoughtSaved = new EventEmitter();

  formChanged(newThought: NgForm) {
    this.canSend = newThought.valid;
  }

  saveThought(newThought: NgForm) {
    if (newThought.invalid) {
      return;
    }
    this.canSend = false;
    const thought = new Thought(newThought.value);
    this.thoughtsService.sendThought(thought).then(data => {
      this.thoughtSaved.emit();
      newThought.reset();
    });
  }
}
