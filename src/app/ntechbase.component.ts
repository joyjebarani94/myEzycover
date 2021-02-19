import { Component, OnInit, LOCALE_ID, Inject, ViewChild } from '@angular/core';
import { NtechAuthService } from './ntech-services/ntech-auth.service';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';






@Component({
  selector: 'ntech-base',
  templateUrl: './ntechbase.component.html',
  styleUrls: ['./ntechbase.component.css'],
  
})
export class NtechBaseComponent implements OnInit {
  
  title = 'ntechbasetest';
  external : string;
  localData : any;
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  public modalRef: BsModalRef;
  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
  constructor(private idle: Idle, private keepalive: Keepalive, private router: Router, private modalService: BsModalService) {
    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(1000);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => { 
      this.idleState = 'No longer idle.'
      console.log(this.idleState);
      this.reset();
    });
    
    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      console.log(this.idleState);
      
      localStorage.clear() 
      //window.location.reload(true);
      this.router.navigate(['/ntechlogin']);

    });
    
    idle.onIdleStart.subscribe(() => {
        this.idleState = 'You\'ve gone idle!'
        console.log(this.idleState);
        this.childModal.show();
    });
    
    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!'
      console.log(this.idleState);
    });

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

   

     this.reset();
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }
  

  
  
  
  
  //constructor(private authservice : NtechAuthService){}

  ngOnInit(){
    
    
  //   window.onbeforeunload = (ev) => {
  //     var dialogText = 'Changes that you made may not be saved.';
  //     ev.returnValue = dialogText;
  //     return dialogText;
  // };
}


}
