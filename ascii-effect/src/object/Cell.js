export default class Cell {

    constructor(x, y, size) {
        this._x = x;
        this._y = y;
        this.size = size;
        // this._xCurr = x;
        // this._yCurr = y;
        // this.brightness = brightness;
        // this.color = color;
    }

    draw(ctx) {
        

        // let newX = this._x;
        // let newY = this._y;

        // if (mX, mY) {
        //     let dx = mX - this._x;
        //     let dy = mY - this._y;

        //     let distance = Math.sqrt(dx * dx + dy * dy);
        //     let result = 50 - distance
        //     if (result >= 0) {
        //         let angle = Math.atan2(-dy, -dx);

        //         newX = this._x + Math.cos(angle) * (result * (1 - this.brightness + 0.1));
        //         newY = this._y + Math.sin(angle) * (result * (1 - this.brightness + 0.1));
        //         // newX = this._x + Math.cos(angle) * result;
        //         // newY = this._y + Math.sin(angle) * result;
        //     }
        // }


        // this._xCurr += (newX - this._xCurr) * .15
        // this._yCurr += (newY - this._yCurr) * .15

        // ctx.beginPath()
        // ctx.fillStyle = color ? color : this.color

        // ctx.save()
        // ctx.translate(this._xCurr, this._yCurr)

        // ctx.translate(this.size / 2, this.size / 2)
        // ctx.scale(this.brightness * boost, this.brightness * boost) // scale en fonction de la luminosité
        // ctx.translate(-this.size / 2, -this.size / 2)

        // const offset = this.size * .5
        // ctx.arc(0 + offset, 0 + offset, this.size / 2, 0, Math.PI * 2)

        // ctx.fill()
        // ctx.closePath()

        // ctx.restore()
    }

}