'use strict';

export class RGBColor {
    readonly r: number;
    readonly g: number;
    readonly b: number;

    constructor(r: number, g: number, b: number) {
        if (r < 0 || r > 0xFF || g < 0 || g > 0xFF || b < 0 || b > 0xFF) {
            throw new Error("RGB colors must have R, G and B values between 0 and 255 (0xFF)")
        }
        this.r = r;
        this.g = g;
        this.b = b;
    }
    
    toString(): string {
        return `#${this.r < 16 ? 0 : ''}${this.r.toString(16)}${this.g < 16 ? 0 : ''}${this.g.toString(16)}${this.b < 16 ? 0 : ''}${this.b.toString(16)}`
    }
}