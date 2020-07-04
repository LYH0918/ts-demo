interface Matched {
    name: string;
}

interface Current {
    matched: Matched[];
}

interface History {
    current: Current;
}

interface Route {
    routes: any[];
}

export interface Router {
    history: History;
}


export interface Navs {
    [propName: string]: any;
    options: Route;
}
