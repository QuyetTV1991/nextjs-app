import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturersProps {
    selected: string;
    setSelected: (selected: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string ;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps {
    manufacturer: string;
    year: string;
    fuel: string;
    limit: number;
    model: string;
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
    setFilter: (value: string) => void;
}

export interface showMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (pageNumber: number) => void;
}

export interface SearchBarProps {
    setManufacturer: (searchManufacturer: string) => void;
    setModel: (searchModel: string) => void;
}