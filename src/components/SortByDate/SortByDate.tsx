import { SortButton, WrapperSort } from "./styles";

export type setDate = { active: true | false };

export interface IProps {
  onClick: (id: number) => void;
  selectedDate: number;
  dates: string[];
}

export const SortByDate = ({ dates, onClick, selectedDate }: IProps) => {
  return (
    <WrapperSort>
      {dates.map((date, id) => {
        return (
          <SortButton key={date} active={selectedDate === id} onClick={() => onClick(id)}>
            {date}
          </SortButton>
        );
      })}
    </WrapperSort>
  );
};
