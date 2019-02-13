import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, fromEvent, interval } from 'rxjs';
import { map, throttle } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  @ViewChildren('navlink') navlink: QueryList<ElementRef>;
  @ViewChild('overlay') overlay: ElementRef;
  @ViewChild('mainbody') offset: ElementRef;
  @ViewChildren('section') sections: QueryList<ElementRef>;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  onScreen: boolean = false
  currentScroll: number = 0
  

  constructor(private breakpointObserver: BreakpointObserver,
    private elemRef: ElementRef) { }

  ngOnInit() {
    fromEvent(this.overlay.nativeElement, "scroll")
    .subscribe((event)=>{
      this.currentScroll = this.overlay.nativeElement.scrollTop;
      this.navlink['_results'].forEach(link => {
        var navclass = link.nativeElement.textContent.toLowerCase(); //link.nativeElement.classList[1];
        this.sections['_results'].forEach(sect => {
          let breakpoint = sect.nativeElement.offsetTop+this.offset.nativeElement.offsetTop;
          let height = sect.nativeElement.offsetHeight;
          if (this.currentScroll >= breakpoint&&
            this.currentScroll <= breakpoint + height) {
              if (navclass===sect.nativeElement.classList[1]) {
                link.nativeElement.classList.add('nav-highlight')
                console.log('changed')
              } else {
                link.nativeElement.classList.remove('nav-highlight')
              }
            }
        })
      })
    });
  }


  scroll(target) {
    target.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

}
