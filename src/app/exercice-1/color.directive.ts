import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  constructor(private el: ElementRef<any>) {
    el.nativeElement.style.backgroundColor = "red";
  }
  @HostListener("window:keyup", ["$event"]) windowClick($event) {
    this.uniKeyCode($event);
  }

  uniKeyCode(eventCode) {
    var key = eventCode.keyCode;
    console.log(key);

    if (key == 37) {
      //fleche gauche
      this.el.nativeElement.style.backgroundColor = "blue";
    }
    if (key == 38) {
      //fleche haut
      this.el.nativeElement.style.backgroundColor = "green";
    }
    if (key == 39) {
      //fleche droitedf
      this.el.nativeElement.style.backgroundColor = "grey";
    }
    if (key == 40) {
      //fleche bas
      this.el.nativeElement.style.backgroundColor = "purple";
    }
    // document.getElementById("demo2").innerHTML = "The Unicode KEY code is: " + key;
  }
}
