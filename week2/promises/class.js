class square {
    constructor(side) {
        this.side = side;
    }

    area(){
        const area = this.side * this.side;
        return area;
    }
}

const sq = new square(5);
const area = sq.area();
console.log(area);