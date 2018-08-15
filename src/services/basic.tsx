export var mainName = "Tester";

export class StaticContext {
    public static staticName: string = "StaticName";
    static setName(n: string) {
        StaticContext.staticName = n;
    }
}

export class MainContext {
    public mainName: string = "StaticName";
    setName(n: string) {
        this.mainName = n;
    }
}
