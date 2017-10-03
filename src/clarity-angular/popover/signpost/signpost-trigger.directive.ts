/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ElementRef, HostListener, OnDestroy, Renderer2} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {IfOpenService} from "../../utils/conditional/if-open.service";

@Directive({
    selector: "[clrSignpostTrigger]",
    host: {"[class.signpost-trigger]": "true", "[attr.tabindex]": "0", "role": "button"}
})  // role button or other roles

/*********
 *
 * @class SignpostTriggerDirective
 *
 * @Description
 * A Directive added to the Signpost Trigger button that will call the Signpost.toggle() function to hide/show the
 * SignpostContent.
 *
 */
export class SignpostTriggerDirective implements OnDestroy {
    private subscriptions: Subscription[] = [];

    constructor(private ifOpenService: IfOpenService, private renderer: Renderer2, private el: ElementRef) {
        this.subscriptions.push(this.ifOpenService.openChange.subscribe((isOpen: boolean) => {
            if (isOpen) {
                this.renderer.addClass(this.el.nativeElement, "active");
            } else {
                this.renderer.removeClass(this.el.nativeElement, "active");
            }
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }

    /**********
     * @function onSignpostTriggerClick
     *
     * @description
     * Enter and nnpclick handler for the Signpost trigger button used to hide/show SignpostContent.
     *
     * The enter HostListener handles the case when the directive is on a non-standard elemnent e.g clr-icon without
     * a button wrapper
     */
    @HostListener("keydown.enter", ["$event"])  // Works with the clr-icon trigger
    @HostListener("keydown.space", ["$event"])
    // Works with the clr-icon trigger needs preventDeault to keep page from scrolling.
    @HostListener("click", ["$event"])
    onSignpostTriggerClick(event: KeyboardEvent|MouseEvent): void {
        console.log(event);
        this.ifOpenService.toggleWithEvent(event);
        event.preventDefault();  // Keeps the page from scrolling down when the signpost is triggered with space
    }
}
