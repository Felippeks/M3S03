import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('deve retornar o valor correto ao subtrair dois números', () => {
    const resultado = service.subtrair(10, 5);
    expect(resultado).toBe(5);
  });

  it('deve retornar o valor correto ao multiplicar dois números', () => {
    const resultado = service.multiplicar(4, 5);
    expect(resultado).toBe(20);
  });
  
  it('deve retornar o valor correto ao dividir dois números', () => {
    const resultado = service.dividir(10, 2);
    expect(resultado).toBe(5);
  });
  
});
