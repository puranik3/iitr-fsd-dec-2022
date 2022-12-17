// TS infers the type if we give an initial value
let message /*: string*/ = 'Hello, TypeScript';

message = 'Hello again';
// message = 123; // error

export {
}