var Enumerable = require('../enumerable');

Enumerable.fn.minimum = function()
{
    var result = null;

    function isNumeric(x)
    {
        return (x !== null && x.getType() === 'number') && (x % 1 === 0);
    }

    var temp = [];

    for(var i = 0; i < this.collection.length; i++)
    {
        if(isNumeric(this.collection[i]))
        {
            temp.push(this.collection[i]);
        }
    }

    if(temp.length > 0)
    {
        result = Math.min.apply(null, temp);
    }

    return result;
};