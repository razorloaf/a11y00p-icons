import * as React from "react";
import { forwardRef } from "react";
import { IconProps } from "../types";
import { useIconFamily } from "../IconFamilyContext";
import { useOSAccessibility } from "../AccessibilityUtils";

const BinIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    const {
      color = 'currentColor',
      size = 24,
      title,
      decorative = false,
      disableOSAdaptation = false,
      highContrastStrokeWidth,
      ...restProps
    } = useIconFamily(props);

    const { prefersHighContrast, forcedColors } = useOSAccessibility();
    const titleId = React.useId();
    const accessibleTitle = title === undefined ? "Bin" : title;
    const isDecorativeOnly = decorative || accessibleTitle === '';

    const [isInsideButton, setIsInsideButton] = React.useState(false);

    React.useEffect(() => {
      if (ref && 'current' in ref && ref.current) {
        let parent = ref.current.parentElement;
        while (parent) {
          if (
            parent.tagName === 'BUTTON' ||
            parent.tagName === 'A' ||
            parent.getAttribute('role') === 'button'
          ) {
            setIsInsideButton(true);
            break;
          }
          parent = parent.parentElement;
        }
      }
    }, [ref]);

    const isHighContrast = !disableOSAdaptation && (prefersHighContrast || forcedColors);
    const strokeWidth = isHighContrast && highContrastStrokeWidth !== undefined
      ? highContrastStrokeWidth
      : restProps.strokeWidth;

    return isDecorativeOnly || isInsideButton ? (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        ref={ref}
        aria-hidden="true"
        {...restProps}
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6205 6.34601L16.2341 6.22721L15.9965 5L15.3829 5.1188L8.38132 6.47438L7.76772 6.59318L8.00532 7.82039L8.61892 7.70159L15.6205 6.34601ZM7.625 8.72044C7.4505 8.72044 7.28394 8.7934 7.16562 8.92166C7.0473 9.04992 6.98798 9.22181 7.00203 9.39574L7.65705 17.508C7.7252 18.352 8.43003 19.0022 9.27678 19.0022H10.907H13.0949H14.725C15.5718 19.0022 16.2766 18.352 16.3448 17.508L16.9999 9.39575C17.0139 9.22182 16.9546 9.04993 16.8363 8.92166C16.718 8.7934 16.5514 8.72044 16.3769 8.72044H13.6419H10.36H7.625ZM8.90299 17.4074L8.3025 9.97044H9.77168L10.243 17.7522H9.27678C9.08137 17.7522 8.91872 17.6022 8.90299 17.4074ZM11.4953 17.7522L11.024 9.97044H12.9779L12.5067 17.7522H11.4953ZM13.7589 17.7522L14.2302 9.97044H15.6994L15.0988 17.4074C15.0831 17.6022 14.9204 17.7522 14.725 17.7522H13.7589Z" fill="#262525"/>
      </svg>
    ) : (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        ref={ref}
        role="img"
        aria-labelledby={accessibleTitle ? titleId : undefined}
        {...restProps}
      >
        {accessibleTitle && <title id={titleId}>{accessibleTitle}</title>}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6205 6.34601L16.2341 6.22721L15.9965 5L15.3829 5.1188L8.38132 6.47438L7.76772 6.59318L8.00532 7.82039L8.61892 7.70159L15.6205 6.34601ZM7.625 8.72044C7.4505 8.72044 7.28394 8.7934 7.16562 8.92166C7.0473 9.04992 6.98798 9.22181 7.00203 9.39574L7.65705 17.508C7.7252 18.352 8.43003 19.0022 9.27678 19.0022H10.907H13.0949H14.725C15.5718 19.0022 16.2766 18.352 16.3448 17.508L16.9999 9.39575C17.0139 9.22182 16.9546 9.04993 16.8363 8.92166C16.718 8.7934 16.5514 8.72044 16.3769 8.72044H13.6419H10.36H7.625ZM8.90299 17.4074L8.3025 9.97044H9.77168L10.243 17.7522H9.27678C9.08137 17.7522 8.91872 17.6022 8.90299 17.4074ZM11.4953 17.7522L11.024 9.97044H12.9779L12.5067 17.7522H11.4953ZM13.7589 17.7522L14.2302 9.97044H15.6994L15.0988 17.4074C15.0831 17.6022 14.9204 17.7522 14.725 17.7522H13.7589Z" fill="#262525"/>
      </svg>
    );
  }
);

BinIcon.displayName = "BinIcon";

export default BinIcon;
