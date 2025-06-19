import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() collapsed = false;
  @Output() toggleSidebar: EventEmitter<void> = new EventEmitter<void>();

  onToggle() {
    this.toggleSidebar.emit();
  }
}
