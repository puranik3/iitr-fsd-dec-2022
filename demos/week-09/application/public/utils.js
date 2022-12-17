;
;
var State;
(function (State) {
    State[State["STARTED"] = 0] = "STARTED";
    State[State["STOPPED"] = 1] = "STOPPED";
})(State || (State = {}));
const random = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
export { State, random };
