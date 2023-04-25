import { Injectable } from '@angular/core';
import { Pill } from '../shared/model/Pill';
import { sample_pills } from 'src/data';
@Injectable({
  providedIn: 'root',
})
export class PillService {
  constructor() {}
  getAll(): Pill[] {
    return sample_pills;
  }
}
