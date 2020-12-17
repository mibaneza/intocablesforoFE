import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFeComponent } from './article-fe.component';

describe('ArticleFeComponent', () => {
  let component: ArticleFeComponent;
  let fixture: ComponentFixture<ArticleFeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
