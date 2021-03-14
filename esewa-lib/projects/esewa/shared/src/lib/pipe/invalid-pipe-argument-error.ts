import {Type} from '@angular/core';
import {stringify} from 'querystring';

// tslint:disable-next-line:typedef
export function invalidPipeArgumentError(type: Type<any>, value: object) {
  // @ts-ignore
    return Error(`InvalidPipeArgument: '${value}' for pipe '${stringify(type)}'`);
}
