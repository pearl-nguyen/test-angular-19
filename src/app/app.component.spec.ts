import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter, RouterModule } from '@angular/router';
import { AppModule } from './app.module';

describe('AppComponent', () => {

    beforeEach(() => TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), AppModule],
      declarations: [AppComponent],
    }).compileComponents());

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'test-angular-19' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test-angular-19');
  });
});
