const Split = (target: any, provertyKey: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const [arg] = args;
    const splited = arg.split('');
    originalMethod.apply(this, [splited]);
  };
};

const Reverse = (target: any, provertyKey: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const [arg] = args;
    const reversed = arg.reverse();
    originalMethod.apply(this, [reversed]);
  };
};

const Join =
  (separator = '') =>
  (target: any, provertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const [arg] = args;
      const joined = arg.join(separator);
      originalMethod.apply(this, [joined]);
    };
  };

class StringManager {
  @Split
  @Reverse
  @Join('-')
  print(str: string) {
    console.log(str);
  }
}

const stringManager = new StringManager();
stringManager.print('hello world');
