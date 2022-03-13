/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PalestrantesComponent } from './palestrantes.component';

let component: PalestrantesComponent;
let fixture: ComponentFixture<PalestrantesComponent>;

describe('palestrantes component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PalestrantesComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PalestrantesComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});