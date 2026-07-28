import { Link } from "react-router";
import styles from "./Button.module.css";

function Button({
  children,
  to,
  href,
  variant = "gold",
  className = "",
  disabled = false,
  onClick,
  "aria-disabled": ariaDisabled = false,
  ...props
}) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");
  const content = <span>{children}</span>;
  const isDisabled =
    disabled || ariaDisabled === true || ariaDisabled === "true";
  const guardedClick = isDisabled
    ? (event) => event.preventDefault()
    : onClick;

  if (to) {
    return (
      <Link
        className={classes}
        to={to}
        {...props}
        aria-disabled={isDisabled || undefined}
        tabIndex={isDisabled ? -1 : props.tabIndex}
        onClick={guardedClick}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        {...props}
        aria-disabled={isDisabled || undefined}
        tabIndex={isDisabled ? -1 : props.tabIndex}
        onClick={guardedClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type="button"
      {...props}
      disabled={isDisabled}
      onClick={guardedClick}
    >
      {content}
    </button>
  );
}

export function PrimaryButton({ tone = "gold", ...props }) {
  return <Button {...props} variant={tone === "dark" ? "dark" : "gold"} />;
}

export function SecondaryButton({ tone = "gold", ...props }) {
  return (
    <Button
      {...props}
      variant={tone === "dark" ? "outlineDark" : "outline"}
    />
  );
}

export function TextLink({ tone = "gold", ...props }) {
  return <Button {...props} variant="text" data-tone={tone} />;
}

export default Button;
