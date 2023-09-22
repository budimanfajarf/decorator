const Split = (target: any, provertyKey: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const [arg] = args;
    const splited = arg.split('');
    originalMethod.apply(this, [splited]);
  };
};

class StringManager {
  @Split
  print(str: string) {
    console.log(str);
  }
}

const stringManager = new StringManager();
stringManager.print('hello world');
