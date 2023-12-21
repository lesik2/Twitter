import { IDateChoose } from "@customTypes/index";

import { Wrapper } from "./styled";
import { getArrayOfNumbers, getDays } from "./helpers";

import { DropDown } from "../DropDown";



export default function DateChoose({date, setDate}: IDateChoose) {
  const currentDate = new Date();
  const days = getDays(date)
  const years = getArrayOfNumbers(currentDate.getFullYear()-100,currentDate.getFullYear());
  const month = getArrayOfNumbers(0,11);

  return (
    <Wrapper>
      <DropDown type="month" date={date} setDate={setDate} values={month}/>
      <DropDown  type="day" date={date} setDate={setDate} values={days}/>
      <DropDown  type="year" date={date} setDate={setDate} values={years}/>
    </Wrapper>
  )
}
