import * as React from "react";
import { forwardRef } from "react";
import { IconProps } from "../types";
import { useIconFamily } from "../IconFamilyContext";
import { useOSAccessibility } from "../AccessibilityUtils";

const ShieldIcon = forwardRef<SVGSVGElement, IconProps>(
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
    const accessibleTitle = title === undefined ? "Shield" : title;
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
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.64971 6.75565C6.76486 8.61844 7.28023 11.1205 8.15124 13.2502C8.64849 14.4661 9.246 15.5213 9.91937 16.2623C10.394 16.7845 10.88 17.1238 11.3753 17.2783L11.3793 7.21773C9.99068 7.18544 8.70407 7.05209 7.72734 6.91941C7.30633 6.86221 6.94165 6.80497 6.64971 6.75565ZM12.6293 7.21774L12.6253 17.2817C13.1245 17.1313 13.6117 16.7997 14.0854 16.2901C14.7569 15.5679 15.3533 14.5357 15.8497 13.3361C16.725 11.221 17.242 8.70368 17.3525 6.75562C17.0613 6.80495 16.6975 6.86219 16.2774 6.91938C15.3024 7.0521 14.0176 7.18546 12.6293 7.21774ZM17.8701 5.38888L18.625 6.0001C18.625 8.18361 18.0598 11.2647 17.0047 13.8141C16.477 15.0894 15.8112 16.2698 15.0009 17.1413C14.1887 18.0148 13.1838 18.6251 12 18.6251C10.8094 18.6251 9.80344 17.9933 8.99431 17.103C8.18587 16.2134 7.52126 15.012 6.99426 13.7234C5.94108 11.1483 5.375 8.06812 5.375 6.0001L6.12955 5.38879C6.12957 5.38867 6.12957 5.38867 6.12956 5.38867L6.12964 5.38869L6.12967 5.38869L6.13063 5.3889L6.13567 5.38995L6.15773 5.3945C6.17769 5.39858 6.20804 5.4047 6.24818 5.41259C6.32847 5.42835 6.44788 5.45113 6.60158 5.47859C6.90908 5.53352 7.35328 5.60711 7.8956 5.68078C8.98211 5.82838 10.4536 5.9751 12.0045 5.9751C13.5554 5.9751 15.0246 5.82838 16.1088 5.68081C16.6499 5.60714 17.0929 5.53357 17.3995 5.47864C17.5528 5.45118 17.6718 5.42841 17.7519 5.41265C17.7919 5.40477 17.8221 5.39865 17.842 5.39457L17.864 5.39003L17.869 5.38898L17.8699 5.38878L17.87 5.38877L17.87 5.38876C17.87 5.38876 17.87 5.38876 17.8701 5.38888Z" fill="#262525"/>
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
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.64971 6.75565C6.76486 8.61844 7.28023 11.1205 8.15124 13.2502C8.64849 14.4661 9.246 15.5213 9.91937 16.2623C10.394 16.7845 10.88 17.1238 11.3753 17.2783L11.3793 7.21773C9.99068 7.18544 8.70407 7.05209 7.72734 6.91941C7.30633 6.86221 6.94165 6.80497 6.64971 6.75565ZM12.6293 7.21774L12.6253 17.2817C13.1245 17.1313 13.6117 16.7997 14.0854 16.2901C14.7569 15.5679 15.3533 14.5357 15.8497 13.3361C16.725 11.221 17.242 8.70368 17.3525 6.75562C17.0613 6.80495 16.6975 6.86219 16.2774 6.91938C15.3024 7.0521 14.0176 7.18546 12.6293 7.21774ZM17.8701 5.38888L18.625 6.0001C18.625 8.18361 18.0598 11.2647 17.0047 13.8141C16.477 15.0894 15.8112 16.2698 15.0009 17.1413C14.1887 18.0148 13.1838 18.6251 12 18.6251C10.8094 18.6251 9.80344 17.9933 8.99431 17.103C8.18587 16.2134 7.52126 15.012 6.99426 13.7234C5.94108 11.1483 5.375 8.06812 5.375 6.0001L6.12955 5.38879C6.12957 5.38867 6.12957 5.38867 6.12956 5.38867L6.12964 5.38869L6.12967 5.38869L6.13063 5.3889L6.13567 5.38995L6.15773 5.3945C6.17769 5.39858 6.20804 5.4047 6.24818 5.41259C6.32847 5.42835 6.44788 5.45113 6.60158 5.47859C6.90908 5.53352 7.35328 5.60711 7.8956 5.68078C8.98211 5.82838 10.4536 5.9751 12.0045 5.9751C13.5554 5.9751 15.0246 5.82838 16.1088 5.68081C16.6499 5.60714 17.0929 5.53357 17.3995 5.47864C17.5528 5.45118 17.6718 5.42841 17.7519 5.41265C17.7919 5.40477 17.8221 5.39865 17.842 5.39457L17.864 5.39003L17.869 5.38898L17.8699 5.38878L17.87 5.38877L17.87 5.38876C17.87 5.38876 17.87 5.38876 17.8701 5.38888Z" fill="#262525"/>
      </svg>
    );
  }
);

ShieldIcon.displayName = "ShieldIcon";

export default ShieldIcon;
