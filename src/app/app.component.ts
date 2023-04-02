import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OddEvenProject';
  oddNumberArray : number[] = [];
  evenNumberArray : number[] = []

  onIntervalFired(FiredNumber: number){
    console.log(FiredNumber)

    if(FiredNumber % 2 ===0 ){
      this.evenNumberArray.push(FiredNumber)
    }else{
      this.oddNumberArray.push(FiredNumber);
    }
  }
}
