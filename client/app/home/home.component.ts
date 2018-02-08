import { Component, ViewChild, ViewChildren, OnInit } from '@angular/core';
import { LoanApplicationModel } from '../models/loan-application.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('hardwareVideo') hardwareVideo: any;
  @ViewChild('canvasser') canvasVideo: any;
  
  loanApplication: LoanApplicationModel;

  occupation: String = "";

  constructor() {
    this.loanApplication = new LoanApplicationModel();
  }

  ngOnInit() {

  }

  // occupationSelfEmployed() {
  //   console.log(this.occupation);
  //   if (this.occupation == "self-employed") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  get isOccupationSelfEmployed() {
    return this.occupation == "self-employed";
  }

  test() {
    console.log(this.occupation);
    console.log(this.occupation == "self-employed");
    // console.log(this.occupationSelfEmployed());
  }

  videoStart(){
    let video = this.hardwareVideo.nativeElement;

    var n = <any>navigator;

    n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );

    n.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    });
    
    // NOTE: For Video + Audio
    // n.mediaDevices.getUserMedia({video: true, audio: true}).then(function(stream) {
    //     video.src = window.URL.createObjectURL(stream);
    //     video.play();
    // });
  }

  snapshot() {
    let canvas = this.canvasVideo.nativeElement;
    let video = this.hardwareVideo.nativeElement;
    let context = canvas.getContext("2d");

    context.drawImage(video, 0, 0, 640, 480);
  }

}