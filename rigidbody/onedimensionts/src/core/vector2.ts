
class Vector2 {
    static ZeroVector: Vector2 = new Vector2();

    static Add(a:Vector2, b:Vector2):Vector2 {
        return new Vector2([(a.getX() + b.getX()), (a.getY() + b.getY())]);
    }

    static Scale(other:Vector2, scale:number):Vector2 {
        return new Vector2([(other.getX() * scale), (other.getY() * scale)]);
    }

    static Normalize(other:Vector2):Vector2 {
        return Vector2.Scale(other, (1 / other.length));
    }

    #xy: [number, number];
    #length: number;

    constructor(value?:[number,number]) {
        this.xy = (value != undefined) ? value : [0,0];
    }

    set xy(value:[number, number]) {
        this.#xy = value;
        this.#length = Math.sqrt(Math.pow(this.getX(), 2) + Math.pow(this.getY(), 2));  
    }

    get xy():[number, number] {
        return this.#xy;
    }

    getX(): number {
        return this.#xy[0];
    }

    getY(): number {
        return this.#xy[1];
    }

    setY(value: number) {
        this.#xy[1] = value;
    }

    get length(): number {
        return this.#length;
    }
}