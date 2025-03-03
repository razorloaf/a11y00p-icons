import * as React from "react";
import { forwardRef } from "react";
import { IconProps } from "../types";
import { useIconFamily } from "../IconFamilyContext";
import { useOSAccessibility } from "../AccessibilityUtils";

const AccountIcon = forwardRef<SVGSVGElement, IconProps>(
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
    const accessibleTitle = title === undefined ? "Account" : title;
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
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.4464 7.53845C8.60421 6.35693 10.2161 5.625 12 5.625C15.5208 5.625 18.375 8.47918 18.375 12C18.375 13.5592 17.8159 14.9869 16.8862 16.0949C14.6903 13.971 12.5396 13.4629 10.6829 13.8373C9.12407 14.1517 7.8619 15.0709 7.02323 15.9844C6.14833 14.893 5.625 13.5076 5.625 12C5.625 10.2628 6.31905 8.6889 7.4464 7.53845ZM10.93 15.0627C12.3069 14.785 14.0502 15.1005 15.993 16.9699C14.9 17.8493 13.5119 18.375 12 18.375C10.4377 18.375 9.00659 17.813 7.89792 16.8801C8.59748 16.1005 9.65942 15.3189 10.93 15.0627ZM12 4.375C9.86656 4.375 7.93683 5.25201 6.5536 6.66358C5.20658 8.0382 4.375 9.92262 4.375 12C4.375 16.2112 7.78883 19.625 12 19.625C14.0774 19.625 15.9618 18.7934 17.3364 17.4464C18.748 16.0632 19.625 14.1334 19.625 12C19.625 7.78883 16.2112 4.375 12 4.375ZM13.25 10.5C13.25 11.1904 12.6904 11.75 12 11.75C11.3096 11.75 10.75 11.1904 10.75 10.5C10.75 9.80964 11.3096 9.25 12 9.25C12.6904 9.25 13.25 9.80964 13.25 10.5ZM14.5 10.5C14.5 11.8807 13.3807 13 12 13C10.6193 13 9.5 11.8807 9.5 10.5C9.5 9.11929 10.6193 8 12 8C13.3807 8 14.5 9.11929 14.5 10.5Z" fill="#262525"/>
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
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.4464 7.53845C8.60421 6.35693 10.2161 5.625 12 5.625C15.5208 5.625 18.375 8.47918 18.375 12C18.375 13.5592 17.8159 14.9869 16.8862 16.0949C14.6903 13.971 12.5396 13.4629 10.6829 13.8373C9.12407 14.1517 7.8619 15.0709 7.02323 15.9844C6.14833 14.893 5.625 13.5076 5.625 12C5.625 10.2628 6.31905 8.6889 7.4464 7.53845ZM10.93 15.0627C12.3069 14.785 14.0502 15.1005 15.993 16.9699C14.9 17.8493 13.5119 18.375 12 18.375C10.4377 18.375 9.00659 17.813 7.89792 16.8801C8.59748 16.1005 9.65942 15.3189 10.93 15.0627ZM12 4.375C9.86656 4.375 7.93683 5.25201 6.5536 6.66358C5.20658 8.0382 4.375 9.92262 4.375 12C4.375 16.2112 7.78883 19.625 12 19.625C14.0774 19.625 15.9618 18.7934 17.3364 17.4464C18.748 16.0632 19.625 14.1334 19.625 12C19.625 7.78883 16.2112 4.375 12 4.375ZM13.25 10.5C13.25 11.1904 12.6904 11.75 12 11.75C11.3096 11.75 10.75 11.1904 10.75 10.5C10.75 9.80964 11.3096 9.25 12 9.25C12.6904 9.25 13.25 9.80964 13.25 10.5ZM14.5 10.5C14.5 11.8807 13.3807 13 12 13C10.6193 13 9.5 11.8807 9.5 10.5C9.5 9.11929 10.6193 8 12 8C13.3807 8 14.5 9.11929 14.5 10.5Z" fill="#262525"/>
      </svg>
    );
  }
);

AccountIcon.displayName = "AccountIcon";

export default AccountIcon;
