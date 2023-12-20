import { Wrapper } from "./styled";

import { DropDown } from "../DropDown";

export default function DateChoose() {
  return (
    <Wrapper>
      <DropDown type="month"/>
      <DropDown  type="day"/>
      <DropDown  type="year"/>
    </Wrapper>
  )
}
