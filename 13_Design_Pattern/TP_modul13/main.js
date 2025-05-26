import { Subject } from './Subject.js';
import { ConcreteObserver } from './Observer.js';

const subject = new Subject();

const observer1 = new ConcreteObserver("Observer A");
const observer2 = new ConcreteObserver("Observer B");

subject.subscribe(observer1);
subject.subscribe(observer2);

console.log("Subject mengirim data: Perubahan #1");
subject.notify("Perubahan #1");

subject.unsubscribe(observer2);

console.log("Subject mengirim data: Perubahan #2");
subject.notify("Perubahan #2");