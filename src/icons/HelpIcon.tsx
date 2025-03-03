import * as React from "react";
import { forwardRef } from "react";
import { IconProps } from "../types";
import { useIconFamily } from "../IconFamilyContext";
import { useOSAccessibility } from "../AccessibilityUtils";

const HelpIcon = forwardRef<SVGSVGElement, IconProps>(
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
    const accessibleTitle = title === undefined ? "Help" : title;
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
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM11.0251 9.0739C10.7936 9.26684 10.625 9.55923 10.625 10.0001H9.375C9.375 9.19085 9.7064 8.54572 10.2249 8.11364C10.729 7.6935 11.3773 7.5 12 7.5C12.6227 7.5 13.271 7.69349 13.7751 8.11363C14.2936 8.54571 14.625 9.19085 14.625 10.0001C14.625 10.6178 14.4665 11.0864 14.2029 11.4707C13.9876 11.7848 13.7073 12.027 13.4913 12.2137C13.4635 12.2377 13.4369 12.2607 13.4115 12.2829C13.1697 12.4945 12.9901 12.6699 12.8582 12.9062C12.731 13.1341 12.6249 13.4632 12.6249 14H11.3749C11.3749 13.2868 11.5189 12.7409 11.7667 12.297C12.0098 11.8614 12.3302 11.5681 12.5884 11.3421L12.6688 11.272C12.9003 11.0703 13.0533 10.9369 13.172 10.7638C13.2835 10.6012 13.375 10.3824 13.375 10.0001C13.375 9.55922 13.2064 9.26683 12.9749 9.07389C12.729 8.86901 12.3773 8.75 12 8.75C11.6227 8.75 11.271 8.86901 11.0251 9.0739ZM11.3799 15H12.6299V16.25H11.3799V15Z" fill="#262525"/>
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
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM11.0251 9.0739C10.7936 9.26684 10.625 9.55923 10.625 10.0001H9.375C9.375 9.19085 9.7064 8.54572 10.2249 8.11364C10.729 7.6935 11.3773 7.5 12 7.5C12.6227 7.5 13.271 7.69349 13.7751 8.11363C14.2936 8.54571 14.625 9.19085 14.625 10.0001C14.625 10.6178 14.4665 11.0864 14.2029 11.4707C13.9876 11.7848 13.7073 12.027 13.4913 12.2137C13.4635 12.2377 13.4369 12.2607 13.4115 12.2829C13.1697 12.4945 12.9901 12.6699 12.8582 12.9062C12.731 13.1341 12.6249 13.4632 12.6249 14H11.3749C11.3749 13.2868 11.5189 12.7409 11.7667 12.297C12.0098 11.8614 12.3302 11.5681 12.5884 11.3421L12.6688 11.272C12.9003 11.0703 13.0533 10.9369 13.172 10.7638C13.2835 10.6012 13.375 10.3824 13.375 10.0001C13.375 9.55922 13.2064 9.26683 12.9749 9.07389C12.729 8.86901 12.3773 8.75 12 8.75C11.6227 8.75 11.271 8.86901 11.0251 9.0739ZM11.3799 15H12.6299V16.25H11.3799V15Z" fill="#262525"/>
      </svg>
    );
  }
);

HelpIcon.displayName = "HelpIcon";

export default HelpIcon;
