import TestParent from './parent-class';

export default class TestChild extends TestParent {
    // protected name: string;
    public age: number;
    public _WEIGHT: number = 12;
    get weight(): number {
        return this._WEIGHT;
    }
    set weight(newWeigth: number) {
        if (newWeigth > 600) {
            console.log('您设置的体重已超越人类的极限体重了');
        } else if (newWeigth < 6) {
            console.log('您设置的体重已超越人类的最低体重了');
        } else {
            this._WEIGHT = newWeigth;
        }
    }
    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }
    public getName() {
        return this.name;
    }
}
