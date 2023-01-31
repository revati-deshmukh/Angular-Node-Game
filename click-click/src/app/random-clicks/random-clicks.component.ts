import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameOverComponent } from '../game-over/game-over.component';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NextLevelComponent } from '../next-level/next-level.component';
import { CountupTimerService, countUpTimerConfigModel, timerTexts } from 'ngx-timer';
import { ElementRef } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-random-clicks',
  templateUrl: './random-clicks.component.html',
  styleUrls: ['./random-clicks.component.scss']
})
export class RandomClicksComponent {
  color: string;
  colorCode: string;
  value: string;
  level: number;
  counter: number;
  someSubscription: any;
  testConfig: countUpTimerConfigModel;

  container = document.querySelector(".container");

  colors = ["Blue", "Red", "Green"];
  colorCodes = ["#0000FF", "#FF0000", "#008000"];

  constructor(private route: ActivatedRoute, public dialog: MatDialog, public router: Router,
    private countupTimerService: CountupTimerService, private elementRef: ElementRef) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.someSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  public ngOnInit(): void {
    this.counter = 0;
    this.route.params.subscribe((params) => {
      this.level = Number(params['level']);
      console.log(this.level);
    });
    if (this.level > 5) {
      this.router.navigate(['/thank-you']);
    }
    // this.changePosition();
    // Calling this function to get first color
    this.generateRandomColor();

    // NGX Timer
    //countUpTimerConfigModel
    this.testConfig = new countUpTimerConfigModel();

    //custom class
    this.testConfig.timerClass = 'test_Timer_class';

    //timer text values  
    this.testConfig.timerTexts = new timerTexts();
    this.testConfig.timerTexts.hourText = "Hours"; //default - hh
    this.testConfig.timerTexts.minuteText = "Minutes"; //default - mm
    this.testConfig.timerTexts.secondsText = "Seconds"; //default - ss
    this.countupTimerService.startTimer();
  }

  // Using same component for each level so whenever level is completed destroying component 
  // to restart timer or to change button size
  ngOnDestroy() {
    if (this.someSubscription) {
      this.someSubscription.unsubscribe();
    }
  }

  // Radom function to generate colors
  generateRandomColor(): void {
    var max = 2, min = 0;
    var index = Math.floor(Math.random() * (max - min + 1) + min);
    this.color = this.colors[index];
    this.colorCode = this.colorCodes[index];
    this.counter += 1;
    // this.changePosition();
  }

  // Get value of a selected button
  onClick(colorValue) {
    if (this.counter != 3) {
      if (this.color.toLowerCase() == colorValue.toLowerCase()) {
        console.log(colorValue);
        this.generateRandomColor();
      } else {
        // Stop timer
        this.stopTimer();
        // Game over
        this.openDialog();
      }
    } else {
      this.stopTimer();
      if (this.level != 5) {
        this.nextLevelDialog();
      } else {
        this.router.navigate(['/thank-you']);
      }
    }
  }

  // Open game over dialog
  openDialog(): void {
    let dialogRef = this.dialog.open(GameOverComponent, {
      width: '250px',
      height: '230px',
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog is closed ${result}`);
      if (result) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/thank-you']);
      }
    });
  }

  // Open next level dialog
  nextLevelDialog(): void {
    let dialogRef = this.dialog.open(NextLevelComponent, {
      width: '250px',
      height: '250px',
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog is closed ${result}`);
      if (result) {
        this.router.navigate(['/random-clicks', this.level + 1]);
      } else {
        this.router.navigate(['/thank-you']);
      }
    });
  }

  // Stop timer if level is finished or game is over
  stopTimer(): void {
    this.countupTimerService.stopTimer();
  }

  // Adding event listener
  /* changePosition(): void {

    const
      { width: cWidth, height: cHeight } = $(".container").getBoundingClientRect(),
      { width: bWidth, height: bHeight } = $("#red").getBoundingClientRect(),
      i = Math.floor(Math.random() * (cWidth - bWidth)) + 1,
      j = Math.floor(Math.random() * (cHeight - bHeight)) + 1;

    //var redTop = Math.floor(Math.random() * 400) + 1;
    //var redLeft = Math.floor(Math.random() * 400) + 1;
    $("#red").css("margin-top", i + "px");
    $("#red").css("margin-left", j + "px");

    var blueTop = Math.floor(Math.random() * 500) + 1;
    var blueLeft = Math.floor(Math.random() * 500) + 1;
    $("#blue").css("margin-top", blueTop + "px");
    $("#blue").css("margin-left", blueLeft + "px");

    var greenTop = Math.floor(Math.random() * 500) + 1;
    var greenLeft = Math.floor(Math.random() * 500) + 1;
    $("#green").css("margin-top", greenTop + "px");
    $("#green").css("margin-left", greenLeft + "px");
  } */
}
