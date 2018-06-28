/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import ClrDragHandleSpecs from "./drag-handle.spec";
import ClrDraggableGhostSpecs from "./draggable-ghost.spec";
import ClrDraggableWithCustomGhostSpecs from "./draggable-with-custom-ghost.spec";
import ClrDraggableWithDragHandleSpecs from "./draggable-with-drag-handle.spec";
import ClrDraggableWithGhostAndHandleSpecs from "./draggable-with-ghost-and-handle.spec";
import ClrDraggableSpecs from "./draggable.spec";
import ClrIfDraggedSpecs from "./if-dragged.spec";
import ClrDragAndDropEventBusSpecs from "./providers/drag-and-drop-event-bus.spec";
import ClrDragEventListenerSpecs from "./providers/drag-event-listener.spec";
import ClrDragHandleRegistrarSpecs from "./providers/drag-handle-registrar.spec";
import ClrDraggableSnapshotSpecs from "./providers/draggable-snapshot.spec";
import ClrGlobalDragModeSpecs from "./providers/global-drag-mode.spec";

fdescribe("Drag And Drop", function() {
    describe("Providers", function() {
        ClrDragAndDropEventBusSpecs();
        ClrDragEventListenerSpecs();
        ClrDragHandleRegistrarSpecs();
        ClrDraggableSnapshotSpecs();
    });
    describe("Components And Directives", function() {
        ClrIfDraggedSpecs();
        ClrDragHandleSpecs();
        describe("ClrDraggable", function() {
            ClrDraggableSpecs();
            ClrDraggableWithCustomGhostSpecs();
            ClrDraggableWithDragHandleSpecs();
            ClrDraggableWithGhostAndHandleSpecs();
        });
        ClrDraggableGhostSpecs();
        ClrGlobalDragModeSpecs();
    });
});
