import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MagicBytesData } from '../MagicBytesData';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MagicByte } from '../magic-byte';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-magic-byte-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  template: `
  <div class="flex-container">
    <div class="mat-elevation-z8">
      <table mat-table [dataSource]="dataSource">
        <ng-container matColumnDef="file_extension">
          <th mat-header-cell *matHeaderCellDef>File Extension</th>
          <td mat-cell *matCellDef="let element">{{element.file_extension}}</td>
        </ng-container>
        <ng-container matColumnDef="hex">
          <th mat-header-cell *matHeaderCellDef>Hexadecimal Number</th>
          <td mat-cell *matCellDef="let element">{{element.hex}}</td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr
              mat-row
              (click)="updateClickedRow(row)"
              [class.row-selected]="clickedRow == row"
              *matRowDef="let row; columns: displayedColumns"
            ></tr>
      </table>
      <mat-paginator
          [pageSizeOptions]="[10, 25, 50]"
          showFirstLastButtons
          aria-label="More file signatures">
        </mat-paginator>
    </div>
  </div>
  `,
  styleUrl: './magic-byte-table.component.css'
})
export class MagicByteTableComponent implements AfterViewInit{
  magicBytesData = new MagicBytesData();
  magicBytesTableData = this.magicBytesData.getMagicBytesData();
  dataSource = new MatTableDataSource<MagicByte>(this.magicBytesTableData);

  displayedColumns = ['file_extension', 'hex'];
  clickedRow: MagicByte = {}

  updateClickedRow(row: MagicByte): void {
    if(this.clickedRow == row){
      this.clickedRow = {};
      console.log(this.clickedRow);
    } else {
      this.clickedRow = row;
      console.log(this.clickedRow);
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
