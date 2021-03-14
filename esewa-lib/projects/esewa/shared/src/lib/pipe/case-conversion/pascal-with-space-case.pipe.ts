import { Pipe, PipeTransform } from '@angular/core';
import {invalidPipeArgumentError} from '../invalid-pipe-argument-error';

@Pipe({
  name: 'pascalWithSpaceCase'
})
export class PascalWithSpaceCasePipe implements PipeTransform {

  transform(value: string, separator?: string): string {
    if (!value) {
      return value;
    }
    if (typeof value !== 'string') {
      throw invalidPipeArgumentError(PascalWithSpaceCasePipe, value);
    }
    const words = value.split(separator ? separator : ' ');
    const lowerCaseWords = words.map((word) => word.toLowerCase());
    const firstLetterUpperCaseWords = lowerCaseWords.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return firstLetterUpperCaseWords.join(' ');
  }

}
