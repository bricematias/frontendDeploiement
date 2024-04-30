import { Tutorial } from './tutorial.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { AppComponent } from "../app.component";

describe('Tutorial', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  it('should create an instance', () => {
    expect(new Tutorial()).toBeTruthy();
  });
});
