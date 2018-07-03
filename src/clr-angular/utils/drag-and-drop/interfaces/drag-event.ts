/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export enum ClrDragEventType {
    DRAG_START,
    DRAG_MOVE,
    DRAG_END,
    DRAG_ENTER,
    DRAG_LEAVE,
    DROP
}

export interface ClrDragEvent<T> {
    type: ClrDragEventType;
    group?: string|string[];
    draggableElement: Node;
    ghostElement?: Node;
    dragPosition: {pageX: number; pageY: number};
    dragDataTransfer?: T;
    dropPointPosition?: {pageX: number; pageY: number};
}
