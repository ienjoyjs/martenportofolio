import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core'

declare var data: any

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./works.component.css'],
})
export class WorksComponent implements OnInit {
  public worksData = data['Works']
  public darkTheme: boolean = true

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    changeDetectorRef.detach()
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges()
    setInterval(() => {
      this.darkTheme = !this.darkTheme
      this.changeDetectorRef.detectChanges()
    }, 7100)
  }
}
