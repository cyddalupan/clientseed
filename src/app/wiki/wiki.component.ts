import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  allwiki = this.wikiService.getAll();

  constructor(private wikiService: WikiService) { }

  ngOnInit(): void {
  }

  insert() {
    this.wikiService.insert().subscribe(() => {
      console.log("Saved");
    });
  }

}
