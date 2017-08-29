import { TestBed, inject } from '@angular/core/testing';

import { RecipesResolver } from './recipe-resolver';

describe('RecipeResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipesResolver]
    });
  });

  it('should be created', inject([RecipesResolver], (service: RecipesResolver) => {
    expect(service).toBeTruthy();
  }));
});
