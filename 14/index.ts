/*

Intro:

    For some unknown reason most of our developers left
    the company. We need to actively hire now.
    In the media we've read that companies that invent
    and publish new technologies attract more potential
    candidates. We need to use this opportunity and
    invent and publish some npm packages. Following the
    new trend of functional programming in JS we
    decided to develop a functional utility library.
    This will put us on the bleading edge since we are
    pretty much sure no one else did anything similar.
    We also provided some jsdoc along with the
    functions, but it might sometimes be inaccurate.

Exercise:

    Provide proper typing for the specified functions.

Bonus:

    Could you please also refactor the code to reduce
    code duplication?
    You might need some excessive type casting to make
    it really short.

*/

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */

// export function map<T>(mapper: (arg: T) => T, input: T[]) : T[] | ((input: T) =>  T[]) {
//   if (arguments.length === 0) {
//     return map;
//   }
//   if (arguments.length === 1) {
//     return function subFunction(subInput: T): T[]  {
//       if (arguments.length === 0) {
//         return subFunction;
//       }
//       return subInput.map(mapper);
//     };
//   }
//   return input.map(mapper);
// }

interface SubFunctionMap<Input, Output> {
  (): SubFunctionMap<Input, Output>;
  (input: Input[]): Output[];
}

export function map<Input, Output>(): typeof map;
export function map<Input, Output>(
  mapper: (i: Input) => Output
): SubFunctionMap<Input, Output>;
export function map<Input, Output>(
  mapper: (i: Input) => Output,
  input: Input[]
): Output[];

export function map<Input, Output>(
  mapper?: (i: Input) => Output,
  input?: Input[]
) {
  if (mapper && input) {
    return input.map(mapper);
  }
  if (mapper) {
    const subFunction = (input?: Input[]) =>
      input ? input.map(mapper) : subFunction;
    return subFunction;
  }
  return map;
}

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */

// export function filter(filterer, input) {
//   if (arguments.length === 0) {
//     return filter;
//   }
//   if (arguments.length === 1) {
//     return function subFunction(subInput) {
//       if (arguments.length === 0) {
//         return subFunction;
//       }
//       return subInput.filter(filterer);
//     };
//   }
//   return input.filter(filterer);
// }

// export function filter<Input, Output>() : typeof filter;
// export function filter<Input, Output>(filterer: (input: Input)=> Output ) : SubFunction<Input, Output>;
// export function filter<Input, Output>(filterer: (input: Input)=> Output, input: Input[]) : Output[];

// export function filter<Input, Output>(filterer?: (input: Input)=> Output, input?: Input[] ){

//     if(filterer && input){
//         return input.filter(filterer);
//     }
//     if(filterer){
//         const subFunction = (input?: Input[]) =>
//         input ? input.filter(filterer) : subFunction;
//       return subFunction;
//     }
//     return filter;
// }

interface SubFunctionFilter<T> {
  (): SubFunctionFilter<T>;
  (input: T[]): T[];
}

export function filter<T>(): typeof filter;
export function filter<T>(filterer: (i: T) => boolean): SubFunctionFilter<T>;
export function filter<T>(filterer: (i: T) => boolean, input: T[]): T[];

export function filter<Input, Output>(
  filterer?: (i: Input) => Output,
  input?: Input[]
) {
  if (filterer && input) {
    return input.filter(filterer);
  }
  if (filterer) {
    const subFunction = (input?: Input[]) =>
      input ? input.filter(filterer) : subFunction;
    return subFunction;
  }
  return filter;
}
/**
 * 3 arguments passed: reduces input array it using the
 * specified reducer and initial value and returns
 * the result.
 *
 * 2 arguments passed: returns a function which accepts
 * input array and reduces it using previously specified
 * reducer and initial value and returns the result.
 *
 * 1 argument passed: returns a function which:
 *   * when 2 arguments is passed to the subfunction, it
 *     reduces the input array using specified initial
 *     value and previously specified reducer and returns
 *     the result.
 *   * when 1 argument is passed to the subfunction, it
 *     returns a function which expects the input array
 *     and reduces the specified input array using
 *     previously specified reducer and inital value.
 *   * when 0 argument is passed to the subfunction, it
 *     returns itself.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} reducer
 * @param {*} initialValue
 * @param {Array} input
 * @return {* | Function}
 */
// export function reduce(reducer, initialValue, input) {
//   if (arguments.length === 0) {
//     return reduce;
//   }
//   if (arguments.length === 1) {
//     return function subFunction(subInitialValue, subInput) {
//       if (arguments.length === 0) {
//         return subFunction;
//       }
//       if (arguments.length === 1) {
//         return function subSubFunction(subSubInput) {
//           if (arguments.length === 0) {
//             return subSubFunction;
//           }
//           return subSubInput.reduce(reducer, subInitialValue);
//         };
//       }
//       return subInput.reduce(reducer, subInitialValue);
//     };
//   }
//   if (arguments.length === 2) {
//     return function subFunction(subInput) {
//       if (arguments.length === 0) {
//         return subFunction;
//       }
//       return subInput.reduce(reducer, initialValue);
//     };
//   }
//   return input.reduce(reducer, initialValue);
// }

// interface SubFunctionReduce<Input,Output>{
//     (): SubFunctionReduce<Input, Output>;
//     (input: Input[]) : Output[]
//     (initialValue:Output) : ((input: Input[]) => Output)
//   }

export function reduce<Input, Output>(
  reducer?: (
    prevItem: Output,
    currItem: Input,
    currIndex: number,
    array: Input[]
  ) => Output,
  initialValue?: Output,
  input?: Input[]
):
  | Output
  | typeof reduce
  | ((input: Input[]) => Output[])
  | ((initialValue: Output) => (input: Input[]) => Output);

export function reduce(reducer, initialValue, input) {
  if (arguments.length === 0) {
    return reduce;
  }
  if (arguments.length === 1) {
    return function subFunction(subInitialValue, subInput) {
      if (arguments.length === 0) {
        return subFunction;
      }
      if (arguments.length === 1) {
        return function subSubFunction(subSubInput) {
          if (arguments.length === 0) {
            return subSubFunction;
          }
          return subSubInput.reduce(reducer, subInitialValue);
        };
      }
      return subInput.reduce(reducer, subInitialValue);
    };
  }
  if (arguments.length === 2) {
    return function subFunction(subInput) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.reduce(reducer, initialValue);
    };
  }
  return input.reduce(reducer, initialValue);
}
/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */

interface subFunctionAdd {
  (): subFunctionAdd;
  (b: number): number;
}

export function add(): typeof add;
export function add(a: number): subFunctionAdd;
export function add(a: number, b: number): number;

export function add(a?: number, b?: number) {
  if (a && b) {
    return a + b;
  }
  if (a) {
    return function subB(b?: number) {
      if (b) {
        return a + b;
      }
      return subB;
    };
  }

  return add;
}

/**
 * 2 arguments passed: subtracts b from a and
 * returns the result.
 *
 * 1 argument passed: returns a function which expects
 * b and subtracts b from a and returns the result.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */

interface subFunctionSubtract {
  (): subFunctionSubtract;
  (b: number): number;
}

export function subtract(): typeof subtract;
export function subtract(a: number): subFunctionSubtract;
export function subtract(a: number, b: number): number;

export function subtract(a?: number, b?: number) {
  if (a && b) return a - b;
  if (a) {
    return function subB(b?: number) {
      if (b) return a - b;
      return subB;
    };
  }
  return subtract;
}

/**
 * 2 arguments passed: returns value of property
 * propName of the specified object.
 *
 * 1 argument passed: returns a function which expects
 * propName and returns value of property propName
 * of the specified object.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Object} obj
 * @param {String} propName
 * @return {* | Function}
 */

interface subFunctionProp {
  (): subFunctionProp;
  (propName: string): object;
}

export function prop(): typeof prop;
export function prop(obj: object): subFunctionProp;
export function prop(obj: object, propName: string);

// export function prop(obj, propName) {
//   if (arguments.length === 0) {
//     return prop;
//   }
//   if (arguments.length === 1) {
//     return function subFunction(subPropName) {
//       if (arguments.length === 0) {
//         return subFunction;
//       }
//       return obj[subPropName];
//     };
//   }
//   return obj[propName];
// }

export function prop( obj?: object, propName? : string) {
  if (obj && propName) {
    return obj[propName];
  }
  if(obj){
    return function subProp(propName?: string): subFunctionProp{
      if(propName) return obj[propName];
      return subProp;
    }
  }
  return prop;
}
/**
 * >0 arguments passed: expects each argument to be
 * a function. Returns a function which accepts the
 * same arguments as the first function. Passes these
 * arguments to the first function, the result of
 * the first function passes to the second function,
 * the result of the second function to the third
 * function... and so on. Returns the result of the
 * last function execution.
 *
 * 0 arguments passed: returns itself.
 *
 * TODO TypeScript
 *   * Should properly handle at least 5 arguments.
 *   * Should also make sure argument of the next
 *     function matches the return type of the previous
 *     function.
 *
 * @param {Function[]} functions
 * @return {*}
 */
export function pipe(...functions) {
  if (arguments.length === 0) {
    return pipe;
  }
  return function subFunction() {
    let nextArguments = Array.from(arguments);
    let result;
    for (const func of functions) {
      result = func(...nextArguments);
      nextArguments = [result];
    }
    return result;
  };
}
