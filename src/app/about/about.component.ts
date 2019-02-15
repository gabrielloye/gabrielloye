import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, fromEvent } from 'rxjs';
import { map, auditTime, distinctUntilChanged } from 'rxjs/operators';
import { textAnimation } from '../animations/aboutanimations'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    textAnimation()
  ]
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
  triggerAnimation: boolean = false
  

  constructor(private breakpointObserver: BreakpointObserver,
    private elemRef: ElementRef) { }

  ngOnInit() {
    fromEvent(this.overlay.nativeElement, "scroll")
    .pipe(auditTime(500), distinctUntilChanged())
    .subscribe((event)=>{
      this.currentScroll = this.overlay.nativeElement.scrollTop;
      this.navlink['_results'].forEach(link => {
        var navclass = link.nativeElement.textContent.toLowerCase();
        this.sections['_results'].forEach(sect => {
          let breakpoint = sect.nativeElement.offsetTop+this.offset.nativeElement.offsetTop;
          let height = sect.nativeElement.offsetHeight;
          if (this.currentScroll >= breakpoint-1 &&
            this.currentScroll < breakpoint + height) {
              if (navclass===sect.nativeElement.classList[1]) {
                link.nativeElement.classList.add('nav-highlight')
              } else {
                link.nativeElement.classList.remove('nav-highlight')
              }
            }
        })
      })
    });
    setTimeout(()=>{
      this.triggerAnimation = true;
    }, 500)
  }

  scroll(target) {
    if(target){
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

}
