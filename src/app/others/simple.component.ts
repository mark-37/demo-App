import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-simple',
    template: 'you entered: {{simpleInput}}'
})

export class SimpleComponent implements OnChanges {
        @Input()
        simpleInput: string;

        ngOnChanges(changes: SimpleChanges) {


            // tslint:disable-next-line:forin
            for (const propertyName in changes) {

                    const change = changes[propertyName];
                    const current = JSON.stringify(change.currentValue);
                    const previous = JSON.stringify(change.previousValue);
                    console.log(propertyName + ': CurrentValue ' + current + ' : Previous Value ' + previous);

            }
        }
}
