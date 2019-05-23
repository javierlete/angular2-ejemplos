import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoggerService {
    log(msg: any) { console.log('LOG', msg); }
    error(msg: any) { console.error('ERROR', msg); }
    warn(msg: any) { console.warn('WARN', msg); }
}
