Type guards in TypeScript help us check the type of a variable at runtime, especially when working with uncertain data, like from an API. They act like “guards,” ensuring we’re using data in ways that match its type.

### Main Types of Type Guards

#### 1. `typeof` Type Guard
Checks basic types like `string`, `number`, etc.

```typescript
function printLength(value: string | number) {
    if (typeof value === "string") {
        console.log(value.length); // Safe on strings
    } else {
        console.log(value); // No length on numbers
    }
}
```

#### 2. `instanceof` Type Guard
Checks if an object is an instance of a class.

```typescript
class Dog {
    bark() { console.log("Woof!"); }
}

function makeNoise(animal: Dog | string) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        console.log(animal);
    }
}
```

#### 3. Custom Type Guards (`is`)
Useful for complex data types and union types.

```typescript
type Fish = { swim: () => void };
function isFish(animal: any): animal is Fish {
    return (animal as Fish).swim !== undefined;
}
```

#### 4. `in` Operator
Checks if an object has a specific property.

```typescript
function operate(vehicle: { drive?: () => void; sail?: () => void }) {
    if ("drive" in vehicle) vehicle.drive!();
    else vehicle.sail!();
}
```

### Why Type Guards are necessery?
Type guards ensure our code handles types safely, preventing runtime errors. They’re essential for working with mixed or uncertain types in TypeScript.