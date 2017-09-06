import { Component, Output, EventEmitter } from "@angular/core";
import { ThoughtsService } from "services";
import { Thought } from "classes";

@Component({
  selector: "thoughts-timeline",
  templateUrl: "./thoughts-timeline.component.html",
  styleUrls: ["./thoughts-timeline.component.scss"]
})
export class ThoughtsTimelineComponent {
  thoughts;
  isLoading: boolean = true;
  shouldUpdate: boolean = true;
  thoughtsLiked = {};

  @Output() thoughtsLoaded = new EventEmitter();

  constructor(private thoughtsService: ThoughtsService) {
    this.thoughtsLoaded.emit(this.isLoading);

    this.thoughtsLiked =
      JSON.parse(localStorage.getItem("thoughts-liked")) || {};

    thoughtsService.getThoughts().subscribe(snapshots => {
      if (this.shouldUpdate) {
        setTimeout(() => {
          this.thoughts = snapshots;
        }, 600);

        setTimeout(() => {
          this.isLoading = false;
          this.thoughtsLoaded.emit(this.isLoading);
        }, 2000);
      }
      this.shouldUpdate = true;
    });
  }

  sendLike(thought, index: number) {
    if (this.thoughtsLiked[thought.$key]) {
      return;
    }

    const likes = thought.likes;

    this.shouldUpdate = false;
    this.thoughtsService.sendLike(thought.$key, likes);
    this.thoughts[index].likes = likes > 0 ? likes + 1 : 1;

    // this should be definitely improved...:grimacing:
    this.thoughtsLiked[thought.$key] = true;
    localStorage.setItem("thoughts-liked", JSON.stringify(this.thoughtsLiked));
  }
}
