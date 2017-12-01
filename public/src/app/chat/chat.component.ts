import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  /**
   * Fields.
   */
  title: string = "Your friend chat bot";
  message = "";
  answers = [];
  isBot:boolean;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  /**
   * Methods.
   */
  send() {
    /**
     * Prepend user message to chat.
     */
    this.answers.unshift({
      datetime: new Date(),
      body: this.message,
      bot: false
    });

    /**
     * Create request.
     */
    var req = this.http.post('http://localhost:3000/message', {
      message: this.message
    });

    /**
     * Make the reques.
     */
    req.subscribe( (data) => {
      console.log(data);
      this.answers.unshift({
        datetime: new Date(),
        body: JSON.parse(data['_body']).message.body,
        bot: true
      });
    });

    /**
     * Clear the message.
     */
    this.message = "";
  }

}


interface Message {
  datetime: Date,
  body: string
}