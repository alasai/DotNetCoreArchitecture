import { Input } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

export abstract class AppBaseComponent implements ControlValueAccessor {
    @Input() disabled: boolean;
    @Input() name: string;
    @Input() required: boolean;
    private model: any;

    get ngModel(): any {
        return this.model;
    }

    set ngModel(model: any) {
        if (model !== this.model) {
            this.model = model;
            this.onChange(model);
        }
    }

    // tslint:disable-next-line:no-empty
    onChange = (_: any) => { };

    // tslint:disable-next-line:no-empty
    onTouched = () => { };

    registerOnChange(fn: any): void { this.onChange = fn; }

    registerOnTouched(fn: any): void { this.onTouched = fn; }

    // tslint:disable-next-line:no-empty
    setDisabledState(_: boolean): void { }

    writeValue(model: any): void { this.model = model; }
}
