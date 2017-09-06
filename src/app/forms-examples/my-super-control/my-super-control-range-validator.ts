import { FormControl } from '@angular/forms';
import { MySuperControlValue } from './my-super-control.component';
import { numberRangeValidator } from '../shared-validators/number-range-validator.directive';

export function MySuperConrolRangeValidator(maxValue, minValue) {
  return function validateNumberRange(c: FormControl) {
    let v = <MySuperControlValue>c.value;
    return numberRangeValidator(v.value2, maxValue, minValue);
  }
}
