export interface Man {
    name: string;
    age: number;
    sex: number;
    isMarry: boolean;
    [propName: string]: any;
}

export enum Gerden {
    male = '男',
    female =  '女',
}

export enum Sport {
    basketball = 4,
    football = 3,
    swimming = 6,
    tennis = 1,
    running = 8,
}

export interface Sort {
    [index: number]: string;
}

export interface Test {
    prop: string;
    index: number;
    other: any;
    (num: number): string;
}

// export type TestFun<T> = (arg: T) => T; // 这种需在定义时定义参数类型

export type TestFun = <T>(arg: T) => T; // 这种无需再定义函数时定义传入类型

// export type TestFun = (arg: number[]) => number[];
interface Meta {
    cn_name?: string;
    newTab?: boolean;
    derivation?: string;
    parentName?: string;
    tabName?: string;
    hideMenu?: boolean;
}
export interface Tab {
    name: string;
    path: string;
    [propName: string]: any;
    meta: Meta;
}
