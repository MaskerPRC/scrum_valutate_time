import {Component, OnInit, ViewChild} from '@angular/core';
import {PlayerService} from '../../services/player.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  single: any[];

  // options
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;
  legendPosition = 'below';

  colorScheme = {
    domain: ['#ffeded', '#ff6868', '#ff0000', '#c40000'
      , '#be0000', '#8e0000', '#4e0000', '#000000']
  };
  @ViewChild('echart') echart;

  constructor(public playerService: PlayerService) {

  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    let self = this
    setTimeout(()=>{self.echart.update();}, 100);

  }
}
