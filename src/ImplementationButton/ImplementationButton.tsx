import css from "./implementationButton.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ImplementationButtonProps {
  link: string;
}

export const ImplementationButton: React.FC<ImplementationButtonProps> = ({
  link,
}) => {
  const [underline, setUnderline] = useState("");
  const [buttonStyle, setButtonStyle] = useState(
    `${css["implementationButtonContainer"]}`
  );

  const onOver = () => {
    setUnderline(`${css["underline"]}`);
    setButtonStyle(`${css["implementationButtonContainer"]} ${css["hovered"]}`);
  };

  const onLeave = () => {
    setUnderline(`${css["underlineOut"]}`);
    setButtonStyle(`${css["implementationButtonContainer"]}`);
  };

  return (
    <div
      className={buttonStyle}
      id={css["implementationButtonContainer"]}
      onMouseOver={onOver}
      onMouseLeave={onLeave}
      onTouchStart={onOver}
      onTouchEnd={onLeave}
    >
      <Link className={css["implementationButton"]} to={link}>
        Implementation
      </Link>
      <div className={underline} />
    </div>
  );
};
