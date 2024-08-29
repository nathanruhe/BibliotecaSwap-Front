import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { BookService } from 'src/app/shared/book.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>;
  index = 0;

  books1: Libro[];
  books2: Libro[];
  books3: Libro[];

  constructor(public bookService: BookService) {}

  ngOnInit(): void {
    
    this.bookService.landing().subscribe((respuesta: Respuesta) => {
      
      this.books1 = respuesta.dataBook.slice(0,3);
      this.books2 = respuesta.dataBook.slice(3,6);
      this.books3 = respuesta.dataBook.slice(6,9);
      
    });
  }

  // Swiper
  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    navigation: true,
  };

  swiperThumbsConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  };

  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.activeIndex = this.index;
    this.swiperThumbs.nativeElement.swiper.activeIndex = this.index;
  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }
}
