let attendance = {
    _list: [],
    set addName(name) {
        this._list.push(name);
    },
    get list() {
        return this._list.join(', ');
    }

};

attendance.addName = 'Robin';
attendance.addName = 'alex';
attendance.addName = 'dakota';
console.log(attendance.list);

// checking the getter and setters in class

class Hike {
    constructor(distance, pace) {
        this.distance = distance;
        this.pace = pace;
    }
    get lenghtInHours() {
        return `${this.calculateLength()} hours`;
    }
    calculateLength() {
        return this.distance / this.pace;
    }
}

const mtTallac = new Hike(10, 2);
console.log(mtTallac.lenghtInHours);