import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { AppComponent } from './app.component';

xdescribe('AppComponent', () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [
            AppComponent
          ],
          imports: [
              RouterTestingModule.withRoutes([])
          ]
      }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should have a router-outlet', () => {
        const de = fixture.debugElement.query(By.directive(RouterOutlet));
        expect(de).not.toBeNull();
    });

    it('should have a link to the todos page', () => {
        const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
        const index = debugElements.find(de => de.properties['href'] === '/todos');
        expect(index).toBeGreaterThan(-1);
    });
});
