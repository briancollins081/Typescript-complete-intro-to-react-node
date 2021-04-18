// Bind decorator
export function AutoBind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const orginalMethod = descriptor.value;
  const adjustedMethod: PropertyDescriptor = {
    configurable: true,
    enumerable: true,
    get() {
      return orginalMethod.bind(this);
    },
  };
  return adjustedMethod;
}
