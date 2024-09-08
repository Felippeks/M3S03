import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '../service/calculator.service';
import { FormsModule } from '@angular/forms';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let calculatorService: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CalculatorComponent],
      providers: [CalculatorService]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    calculatorService = TestBed.inject(CalculatorService);
    fixture.detectChanges();
  });

  it('deve atualizar o resultado corretamente ao somar dois números', () => {
    component.num1 = 5;
    component.num2 = 3;
    component.somar();
    expect(component.resultado).toBe(8);
  });
});
