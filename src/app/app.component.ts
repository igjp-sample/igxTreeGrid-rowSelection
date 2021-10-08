import { Component, ViewChild } from '@angular/core';
import { IActiveNodeChangeEventArgs, IGridKeydownEventArgs, IgxTreeGridComponent } from 'igniteui-angular';
import { EMPLOYEE_DATA } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'treegrid-selection';
  @ViewChild('grid1', { read: IgxTreeGridComponent, static: true })
  public grid1!: IgxTreeGridComponent;
  public localData!: any[];

  public ngOnInit() {
    this.localData = EMPLOYEE_DATA;
  }

  public customKeydown(args: IActiveNodeChangeEventArgs) {
    let targetRowID = this.grid1.getRowByIndex(args.row).data.ID;
    this.grid1.selectRows([targetRowID],true);
  }

}
