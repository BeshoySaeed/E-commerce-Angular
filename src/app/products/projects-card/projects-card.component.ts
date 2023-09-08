import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.scss'],
})
export class ProjectsCardComponent {
  @Input() card: any;

  constructor(private router: Router) {}

  clickLink(id: number) {
    this.router.navigate(['router', id]);
  }
}
