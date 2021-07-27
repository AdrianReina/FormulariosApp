import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  noPuedeSerStrider(argumento: FormControl): ValidationErrors | null {
    const valor: string = argumento.value?.trim().toLowerCase();
    if (valor === 'strider') {
      return { noStrider: true };
    }

    return null;
  }

  campoIguales(campo1: string, campo2: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const pass1 = control.get('password')?.value;
      const pass2 = control.get('password2')?.value;
      //console.log(pass1, pass2);
      if (pass1 !== pass2) {
        control.get(campo2)?.setErrors({ noIguales: true });
        return { noIguales: true };
      }
      return null;
    };
  }
}
