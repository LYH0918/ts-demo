export default class TestParent {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    public getName() {
        return this.name;
    }
}
