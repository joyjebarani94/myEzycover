import { OnInit, Input, Component, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

declare var $ :any;
@Component({

    providers: [     
        {       provide: NG_VALUE_ACCESSOR, 
                useExisting: forwardRef(() => NtechCoreTagClass),
                multi: true     
        }   
    ]
})

export abstract class NtechCoreTagClass implements OnInit, ControlValueAccessor {

             
    constructor (){}

    // Required Methods
        onChange: any = () => {}   
        onTouch: any = () => {}

    // Property Declaration   
        inputLabel : string;
        mandatorysymb : boolean;
        private _placeholder;
        private _inputvalue: any;
        private _attrclass: any;
        private _tablefunction: any;
        private _datatabcondi: any;
        private _name: string;
        private _validationtype: string;
    
   
    //Input
    @Input() disabled: boolean;

    //Implementaions
        ngOnInit(): void {
      
        }
        

        public get inputvalue(): any {
            return this._inputvalue;
        }
        public set inputvalue(value: any) {
            this._inputvalue = value;
            this.onChange(value);
            this.onTouch(value);

        }

        writeValue(value: any){     
            this.inputvalue = value        
        }
                
        registerOnChange(fn: any){
             this.onChange = fn    
        }
        registerOnTouched(fn: any){
            this.onTouch = fn
        }
        setDisabledState?(isDisabled: boolean): void {
            this.disabled=isDisabled;
        }
    
        @Input() public get label(): any 
        {
            return this.inputLabel;
        }
        public set label( value: any ) {
            if ( value != null ) {
                this.inputLabel = value;
            }
        }
    
        @Input() public get mandatory(): any {
            return this.mandatorysymb;
        }
        public set mandatory( value: any ) {
            if ( value != null ) {
                this.mandatorysymb = value;
            }
        }

        @Input() public get placeholder() {
            return this._placeholder;
        }
        public set placeholder(value) {
            this._placeholder = value;
        }

        @Input() public get attrclass() {
            return this._attrclass;
        }
        public set attrclass(value) {
            this._attrclass = value;
        }

        @Input() public get tablefunction() {
            return this._tablefunction;
        }
        public set tablefunction(value) {
            this._tablefunction = value;
        }

        @Input() public get name() {
            return this._name;
        }
        public set name(value) {
            this._name = value;
        }

        @Input()  public get validationtype(): string {
            return this._validationtype;
        }
        public set validationtype(value: string) {
            this._validationtype = value;
        }


    // OutPut Property
    @Output() public blur: EventEmitter<any> = new EventEmitter();
    @Output() public focus: EventEmitter<any> = new EventEmitter();
    @Output() public keydown: EventEmitter<any> = new EventEmitter();
    @Output() public keyup: EventEmitter<any> = new EventEmitter();
    @Output() public click: EventEmitter<any> = new EventEmitter();

    
    
    
    onBlur( value ) {
        this.blur.emit( value );
    }
    onFocus( value ) {
        this.focus.emit( value );
    }
    onKeyDown( value ) {
        this.keydown.emit( value );
    }
    onKeyUp( value ) {       
        this.keyup.emit( value );
    }
    onClick( value ) {       
        this.keyup.emit( value );
    }

 

}