# enumerablejs
a JavaScript library that provides linq functions on native JavaScript arrays

```
npm install asenumerable
```

```
bower install enumerablejs
```

## where

``` javascript
var arr = [];
var result = arr.asEnumerable().where(function (i, item, collection)
{
    return item.name === "123";
});
```
## select
``` javascript
var arr = [];
var result = arr.asEnumerable().select(["name"]);
```

## any
``` javascript
var arr = [];
var result = arr.asEnumerable().any();
```

## count
``` javascript
var arr = [];
var result = arr.asEnumerable().count();
```

## first
``` javascript
var arr = [];
var result = arr.asEnumerable().count();
```
## firstOrDefault
``` javascript
var arr = [];
var result = arr.asEnumerable().first();
```

## last
``` javascript
var arr = [];
var result = arr.asEnumerable().last();
```

## lastOrDefault
``` javascript
var arr = [];
var result = arr.asEnumerable().lastOrDefault();
```

## single
``` javascript
var arr = [];
var result = arr.asEnumerable().single();
```

## singleOrDefault
``` javascript
var arr = [];
var result = arr.asEnumerable().singleOrDefault();
```

## take
``` javascript
var arr = [];
var result = arr.asEnumerable().take();
```
## takeWhile
``` javascript
var arr = [];
var result = arr.asEnumerable().takeWhile(function (i, item, collection)
{
    return (item.name === "test");
});
```
## skipWhile
``` javascript
var arr = [];
var result = arr.asEnumerable().skipWhile(function (i, item, collection)
{
    return (item.name === "test");
});
```
## toArray
``` javascript
var enumObj = new Enumerable();

var arr = enumObj.toArray();
```

## minimum
``` javascript
var arr = [];
var result = arr.asEnumerable().minmum();
```
## maximum
``` javascript
var arr = [];
var result = arr.asEnumerable().maximum();
```