import React from "react";
import { Button } from "./styles";

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && (
        <img
          src="https://avatars2.githubusercontent.com/u/20321685?s=460&u=1791a6c15cc992c125231499180f9e2dd367f4f4&v=4"
          alt="Caio Nunes"
        />
      )}
    </Button>
  );
};

export default ServerButton;
