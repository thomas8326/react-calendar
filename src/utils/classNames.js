export function classNames(...args) {
  function checkType(arg, typeOf) {
    switch (typeOf) {
      case 'string':
        return arg;
      case 'object':
        return Object.keys(arg).map((key) => !!arg[key] ? key : '').join(' ');
      default:
        break;
    }
  }

  return args.map(arg => checkType(arg, typeof arg)).join(' ');
}
