import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector : 'ntech-app-vid-dash',
    templateUrl : './ntech-app-video-dashboard.component.html'
})
export class NtechAppVideoDashboardComponent
{
    @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;

    toggleVideo(event: any) {
        this.videoplayer.nativeElement.play();
      }
}