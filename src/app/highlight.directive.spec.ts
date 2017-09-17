import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighLightDirective } from './highlight.directive';

@Component({
    template: `
        <p appHighLight="cyan">First</p>
        <p appHighLight>Second</p>
    `
})
class DirectiveHostComponent {

}

describe('HighLightDirective', () => {
    let fixture: ComponentFixture<DirectiveHostComponent>;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [
                DirectiveHostComponent,
                HighLightDirective
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DirectiveHostComponent);
        fixture.detectChanges();
    });

    it('should highlight the first element with cyan', () => {
        const debugElement = fixture.debugElement.queryAll(By.css('p'))[0];
        expect(debugElement.nativeElement.style.backgroundColor).toBe('cyan');
    });

    it('should highlight the second element with yellow', () => {
        const debugElement = fixture.debugElement.queryAll(By.css('p'))[1];
        expect(debugElement.nativeElement.style.backgroundColor).toBe('yellow');
    });

    it('should highlight the second element with default color', () => {
        const debugElement = fixture.debugElement.queryAll(By.css('p'))[1];
        const directive = debugElement.injector.get(HighLightDirective);
        expect(debugElement.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
    });

});
