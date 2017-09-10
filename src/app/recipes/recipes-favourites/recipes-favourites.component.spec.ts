import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesFavouritesComponent } from './recipes-favourites.component';

describe('RecipesFavouritesComponent', () => {
  let component: RecipesFavouritesComponent;
  let fixture: ComponentFixture<RecipesFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
