class Worm {
    static INITIAL_SIZE = 3;
    static INITIAL_DIRECTION = 'Right';
    static INITIAL_POSITION = {
        x: 1,
        y: 1
    };

    constructor( game ) {
        this.game = game;

        this.size = Worm.INITIAL_SIZE;
        this.direction = Worm.INITIAL_DIRECTION;

        this.head = {
            ...Worm.INITIAL_POSITION
        };

        this.tail = [];
    }

    draw( context ) {
        const { cellSideLength } = this.game.getConfiguration();

        // head
        const size = cellSideLength / 10;
        const offset = cellSideLength / 3;
        const x = cellSideLength * this.head.x;
        const y = cellSideLength * this.head.y;
        
        context.fillStyle = "#111111";
        context.fillRect(x, y, cellSideLength, cellSideLength);
        
        // eyes
        switch (this.direction) {
            case "Up":
                context.beginPath();
                context.arc( x + offset, y + offset, size, 0, 2 * Math.PI );
                context.arc( x + 2 * offset, y + offset, size, 0, 2 * Math.PI );
                context.fillStyle = "white";
                context.fill();
                break;
            case "Down":
                context.beginPath();
                context.arc( x + offset, y + 2 * offset, size, 0, 2 * Math.PI );
                context.arc( x + 2 * offset, y + 2 * offset, size, 0, 2 * Math.PI );
                context.fillStyle = "white";
                context.fill();
                break;
            case "Right":
                context.beginPath();
                context.arc( x + 2 * offset, y + offset, size, 0, 2 * Math.PI );
                context.arc( x + 2 * offset, y + 2 * offset, size, 0, 2 * Math.PI );
                context.fillStyle = "white";
                context.fill();
                break;
            case "Left":
                context.beginPath();
                context.arc( x + offset, y + offset, size, 0, 2 * Math.PI );
                context.arc( x + offset, y + 2 * offset, size, 0, 2 * Math.PI );
                context.fillStyle = "white";
                context.fill();
                break;
        }

        // tail
        context.fillStyle = "#333333";
        this.tail.forEach((cell) =>
            context.fillRect( cellSideLength * cell.x, cellSideLength * cell.y, cellSideLength, cellSideLength )
        );
    }

    move() {
        this.tail.push( this.head );

        this.head = this.getNext();

        // first item (this is the last tail cell - the one farthest from the head)
        // last item (this is the tail cell closes to the head)
        if( this.tail.length > this.size ) {
            this.tail.shift();
        }
    }

    getNext() {
        const direction = this.direction;

        switch( direction ) {
            case 'Up':
                return {
                    x: this.head.x,
                    y: this.head.y - 1
                };
            case 'Down':
                return {
                    x: this.head.x,
                    y: this.head.y + 1
                };
            case 'Right':
                return {
                    x: this.head.x + 1,
                    y: this.head.y
                };
            case 'Left':
                return {
                    x: this.head.x - 1,
                    y: this.head.y
                };
        }
    }

    getHead() {
        return this.head;
    }

    isWorm( cell ) {
        return this.tail.find( el => cell.x === el.x && cell.y === el.y );
    }

    grow( qty = 3 ) {
        this.size += qty;
    }

    setDirection( direction ) {
        const curDirection = this.direction;

        if( 
            curDirection === 'Up' &&
            ( direction === 'Up' || direction === 'Down' )
        ) {
            return;
        }

        if( 
            curDirection === 'Down' &&
            ( direction === 'Up' || direction === 'Down' )
        ) {
            return;
        }

        if( 
            curDirection === 'Right' &&
            ( direction === 'Left' || direction === 'Right' )
        ) {
            return;
        }

        if( 
            curDirection === 'Left' &&
            ( direction === 'Left' || direction === 'Right' )
        ) {
            return;
        }
        
        this.direction = direction;
    }
}

export default Worm;