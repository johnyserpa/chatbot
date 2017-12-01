import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * App Class
 */
export class AppComponent implements Skeleton {
  /**
   * Fields
   */
  title = 'Solitaire';
  version = '0.0.1';
  subtitle = 'Feelign lonely? I\'m here to help!';
}

/**
 * Defining interface for AppComponent
 */
interface Skeleton {
  title: string,
  version: string,
  subtitle: string
}
