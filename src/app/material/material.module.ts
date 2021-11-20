import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const materials: any[] | Type<any> | ModuleWithProviders<{}> = [
  MatProgressSpinnerModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, materials],
  exports: [materials],
})
export class MaterialModule {}
