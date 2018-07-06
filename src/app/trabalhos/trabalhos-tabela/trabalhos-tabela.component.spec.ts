import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhosTabelaComponent } from './trabalhos-tabela.component';

describe('TrabalhosTabelaComponent', () => {
  let component: TrabalhosTabelaComponent;
  let fixture: ComponentFixture<TrabalhosTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabalhosTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhosTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
