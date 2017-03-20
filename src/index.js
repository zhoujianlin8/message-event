/**
 * Created by zhou on 17/3/6.
 */
class Message {
    _listeners = {};//{'a':[fn, fn,fn],'b':[fn,fn]}
    on (name, fn) {
        const listenerItem = this._listeners[name] || [];
        fn = fn || function () {
            };
        listenerItem.push(fn);
        this._listeners[name] = listenerItem;
        return this;
    };
    off (name, fn) {
        if (fn === undefined) {
            delete this._listeners[name];
            return this;
        }
        const listenerItem = this._listeners[name] || [];
        const newArr = [];
        listenerItem.forEach((item)=> {
            if (item !== fn) {
                newArr.push(item)
            }
        });
        this._listeners[name] = newArr;
        return this;
    };
    fire(name, ...props) {
        const listenerItem = this._listeners[name];
        if (listenerItem) {
            listenerItem.forEach((item)=> {
                item && item(...props);
            })
        }
        return this;
    }
}
export default Message