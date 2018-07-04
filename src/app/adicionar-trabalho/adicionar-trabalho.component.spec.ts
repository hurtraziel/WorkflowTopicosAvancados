import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarTrabalhoComponent } from './adicionar-trabalho.component';

describe('AdicionarTrabalhoComponent', () => {
  let component: AdicionarTrabalhoComponent;
  let fixture: ComponentFixture<AdicionarTrabalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarTrabalhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
