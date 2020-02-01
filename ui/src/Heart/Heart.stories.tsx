import { storiesOf } from "@storybook/react";
import React from "react";
import { Heart } from "./Heart";

storiesOf("TrafficLight", module)
  .add("Red", () => <Heart />);
