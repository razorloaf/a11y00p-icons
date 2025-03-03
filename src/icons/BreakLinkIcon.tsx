import * as React from "react";
import { forwardRef } from "react";
import { IconProps } from "../types";
import { useIconFamily } from "../IconFamilyContext";
import { useOSAccessibility } from "../AccessibilityUtils";

const BreakLinkIcon = forwardRef<SVGSVGElement, IconProps>(
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
    const accessibleTitle = title === undefined ? "Break Link" : title;
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
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8936 13.9076C11.8134 14.9878 10.8781 15.3477 10.1396 15.3618C9.40138 15.376 8.74551 15.0467 8.21707 14.5183C7.68863 13.9898 7.3594 13.334 7.3735 12.5957C7.38761 11.8573 7.74753 10.922 8.82775 9.84174L7.94387 8.95785C6.70992 10.1918 6.14578 11.418 6.12373 12.5718C6.10168 13.7259 6.62419 14.6932 7.33318 15.4022C8.04218 16.1112 9.00944 16.6337 10.1635 16.6116C11.3174 16.5896 12.5436 16.0254 13.7775 14.7915L12.8936 13.9076ZM14.5581 14.442L16.5581 16.442L17.4419 15.5581L15.4419 13.5581L14.5581 14.442ZM9.44194 7.5581L7.44194 5.5581L6.55806 6.44198L8.55806 8.44198L9.44194 7.5581ZM16.0917 12.4773C17.3256 11.2434 17.8898 10.0172 17.9118 8.86333C17.9339 7.70926 17.4113 6.742 16.7023 6.033C15.9934 5.32401 15.0261 4.8015 13.872 4.82355C12.7181 4.8456 11.492 5.40974 10.258 6.64369L11.1419 7.52757C12.2221 6.44735 13.1575 6.08743 13.8959 6.07332C14.6342 6.05921 15.29 6.38845 15.8185 6.91689C16.3469 7.44533 16.6761 8.1012 16.662 8.83945C16.6479 9.57787 16.288 10.5132 15.2078 11.5934L16.0917 12.4773ZM5 19.625H19V18.375H5V19.625Z" fill="#262525"/>
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
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8936 13.9076C11.8134 14.9878 10.8781 15.3477 10.1396 15.3618C9.40138 15.376 8.74551 15.0467 8.21707 14.5183C7.68863 13.9898 7.3594 13.334 7.3735 12.5957C7.38761 11.8573 7.74753 10.922 8.82775 9.84174L7.94387 8.95785C6.70992 10.1918 6.14578 11.418 6.12373 12.5718C6.10168 13.7259 6.62419 14.6932 7.33318 15.4022C8.04218 16.1112 9.00944 16.6337 10.1635 16.6116C11.3174 16.5896 12.5436 16.0254 13.7775 14.7915L12.8936 13.9076ZM14.5581 14.442L16.5581 16.442L17.4419 15.5581L15.4419 13.5581L14.5581 14.442ZM9.44194 7.5581L7.44194 5.5581L6.55806 6.44198L8.55806 8.44198L9.44194 7.5581ZM16.0917 12.4773C17.3256 11.2434 17.8898 10.0172 17.9118 8.86333C17.9339 7.70926 17.4113 6.742 16.7023 6.033C15.9934 5.32401 15.0261 4.8015 13.872 4.82355C12.7181 4.8456 11.492 5.40974 10.258 6.64369L11.1419 7.52757C12.2221 6.44735 13.1575 6.08743 13.8959 6.07332C14.6342 6.05921 15.29 6.38845 15.8185 6.91689C16.3469 7.44533 16.6761 8.1012 16.662 8.83945C16.6479 9.57787 16.288 10.5132 15.2078 11.5934L16.0917 12.4773ZM5 19.625H19V18.375H5V19.625Z" fill="#262525"/>
      </svg>
    );
  }
);

BreakLinkIcon.displayName = "BreakLinkIcon";

export default BreakLinkIcon;
