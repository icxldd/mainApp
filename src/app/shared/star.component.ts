import { Component } from "@angular/core";
import { OnChanges } from "@angular/core";
import { Input } from "@angular/core";
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component ({

    selector:   'pm-star',
    templateUrl:    './star.component.html',
    styleUrls: ['./star.component.html']



})

export class StarComponent implements OnChanges{ 

    @Input() rating: number = 0;


    cropWidth: number = 75;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>;

    ngOnChanges(): void{
        this.cropWidth = this.rating * 75/5;
        console.log('rating:', this.rating);
    }

    OnClick(): void{

        console.log(`Console The Rating  ${this.rating} was clicked`);
        this.ratingClicked.emit(`Emit The Rating  ${this.rating} was clicked`);
    }

}


