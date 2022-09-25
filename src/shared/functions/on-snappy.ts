import { KeyboardEvent, MouseEvent, UIEvent } from "react";

/**
 * A replacement for `onClick` which will trigger on mouse/key down instead of when letting go.
 * Makes for a snappier experience. Should only be used for things that don't change the state of any backend system,
 * like a POST or DELETE request. Users are used to moving the mouse away if they click down by accident.
 * Since the P+ website has no such backend as the time of writing, i might use this a lot.
 * 
 * Usage: Spread call as props `<a {...onSnappy(e => console.log(e))}>`
 */
export const onSnappy = (handler: (event: UIEvent) => void, preventDefault = false) => ({
  onClick: (event: MouseEvent) => {
    if (preventDefault) {
      event.preventDefault();
    }
  },
  onMouseDown: (event: MouseEvent) => {
    if (event.button === 0) { // only left-click or touch
      handler(event);
    }
  },
  onKeyDown: (event: KeyboardEvent) => {
    if (["Enter", "Space"].includes(event.code)) {
      handler(event);
    }
  }
});