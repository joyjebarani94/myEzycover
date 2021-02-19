import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';


@Directive({
    selector: '[ntech-alphabetsonly]',
  })

export class NtechAlphabetsOnlyDirective {

    private regex: RegExp = new RegExp('^[a-zA-Z ]*$')
    private allowkey : Array<String> = ['Backspace','ArrowLeft','ArrowRight','Tab']

    constructor(private elementRef: ElementRef) {

    }

    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
        const inputValue: string = this.elementRef.nativeElement.value.concat(event.key);
         if(this.allowkey.indexOf(event.key) !== -1){
            return;
        }

        if (inputValue && !String(inputValue).match(this.regex)) {
            event.preventDefault();
        }
        return;
    }

    @HostListener('paste', ['$event']) onPaste(event) {
        const clipboardData = (event.originalEvent || event).clipboardData.getData('text/plain');
        if (clipboardData) {
            if (!this.regex.test(clipboardData)) {
                event.preventDefault();
            }
        }
        return;
    }
    
}
