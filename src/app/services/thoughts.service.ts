import { Injectable } from "@angular/core";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database";
import { Thought } from "classes";

@Injectable()
export class ThoughtsService {
  private thoughtsPath = "/their-thoughts";
  thoughts: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase) {
    this.thoughts = db.list(this.thoughtsPath);
  }

  getThoughts() {
    return this.db.list(this.thoughtsPath, {
      query: {
        orderByChild: "approved",
        equalTo: true
      }
    });
  }

  sendApprovalEmail(id: string, newThought: Thought) {
    return emailjs.send("default_service", "think_out_loud", {
      id,
      author: newThought.author || "Anonymous",
      body: newThought.body,
      creationDate: new Date(newThought.creationDate).toLocaleString(),
      email: newThought.email
    });
  }

  sendThought(newThought: Thought) {
    return this.db
      .list(`${this.thoughtsPath}-unapproved`)
      .push(newThought)
      .then(data => this.sendApprovalEmail(data.key, newThought));
  }

  sendLike(id: string, previouslikes: number = 0) {
    const likes = previouslikes > 0 ? previouslikes + 1 : 1;
    this.db.object(`${this.thoughtsPath}/${id}`).update({
      likes
    });
  }
}
