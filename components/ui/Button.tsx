import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button";
};
type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: "a";
};

// Bouton "Primary / Normal State" : dégradé cyan → magenta, forme pill
export default function Button(props: ButtonProps | LinkProps) {
  const className =
    "inline-flex items-center justify-center rounded-pill bg-gradient-primary px-7 py-3 text-sm font-medium text-white shadow-lg shadow-primary-magenta/20 transition-transform hover:scale-[1.03] active:scale-[0.98]";

  if (props.as === "a") {
    const { as, ...rest } = props;
    return <a className={className} {...rest} />;
  }
  const { as, ...rest } = props as ButtonProps;
  return <button className={className} {...rest} />;
}
