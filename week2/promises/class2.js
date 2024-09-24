class rectangle {
    constructor(width,height, color) {
        this.width = width;
        this.height = height;
        this.color = color;

    }
    area() {
        const area = this.width * this.height;
        return area;
    }

    paint() {
        console.log("The Color is :");
        console.log(this.color);
    }
}

const rect = new rectangle(1,2,"Red");
const area = rect.area();
const paint = rect.paint();

console.log(area);
console.log(paint);

const now = new Date();
console.log(now.getTime());

