import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div><h1>{{pageTitle}}</h1>
            <div>My First Component2</div>
        </div>
    `
    
})

export class AppComponent { 
    pageTitle: string = 'Acmd Product Management';
}
