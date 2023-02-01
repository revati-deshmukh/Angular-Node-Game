import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent {

  prevState: string;

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.prevState = params['prevState'];
    });
  }
}
