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

  it('deve atualizar as variáveis num1 e num2 ao digitar no input', () => {
    const compiled = fixture.nativeElement;
    const input1 = compiled.querySelector('input[placeholder="Número 1"]');
    const input2 = compiled.querySelector('input[placeholder="Número 2"]');
  
    input1.value = '7';
    input1.dispatchEvent(new Event('input'));
    input2.value = '9';
    input2.dispatchEvent(new Event('input'));
  
    fixture.detectChanges();
  
    expect(component.num1).toBe(7);
    expect(component.num2).toBe(9);
  });
});
