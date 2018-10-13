import {Service} from "../src/ServiceDecorator";
import {Injector} from "../src/Injector";

@Service()
class Foo {
  doFooStuff() {
    console.log('foo');
  }
}

@Service()
class Bar {
  constructor(public foo: Foo) {
  }

  doBarStuff() {
    console.log('bar');
  }
}

@Service()
class Foobar {
  constructor(public foo: Foo, public bar: Bar) {
  }
}

const foobar = Injector.resolve<Foobar>(Foobar);
foobar.bar.doBarStuff();
foobar.foo.doFooStuff();
foobar.bar.foo.doFooStuff();