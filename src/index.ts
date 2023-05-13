// function final(target: Function) {
//   Object.seal(target);
//   Object.seal(target.prototype);
// }

export function final<T extends { new (...args: any[]): object }>(
  target: T
): T {
  return class Final extends target {
    constructor(...args: any[]) {
      if (new.target !== Final) {
        throw new Error("Cannot inherit from final class");
      }
      super(...args);
    }
  };
}

@final
class FinalClass {
  // name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }
}

// const p = new FinalClass("chamith");
// p.name = "hehehehe";

// Object.defineProperty(Person, "capital", {
//   value: "Unknown",
//   writable: true,
// });

class SubFinalClass extends FinalClass {}
const sub = new SubFinalClass();

// console.log(Object.getOwnPropertyDescriptors(Person));
