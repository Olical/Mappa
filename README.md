# What is Mappa?

Mappa is a tiny JavaScript framework that only contains what you give to it.
The idea of Mappa is that you map functions from things you or other people have written into one pretty object.
So you have an object of functions all named how you want them.

This allows you to build your very own custom set of tools.

You can even create aliases of the Mappa object so you can give it the names you want.

# Who wrote this thing?

That would be me, [Oliver Caldwell](http://flowdev.co.uk/).
I just came up with the idea on a train home from London.
Follow [me on Twitter](http://twitter.com/#!/OliverCaldwell) if you want.

# Compatibility

Mappa works in just about any browser that has JavaScript enabled.
The only thing you need to check for compatibility is the functions you are mapping to.

Mappa also works in NodeJS environments. You can grab the Mappa instance like so.

    var Mappa = requre('./path-to-file/mappa').Mappa;

When using it within NodeJS you can not use the `addAlias` or `removeAlias` functions.
This is because aliases are stored in the window object.

So if you want to add and remove aliases in node you will just have to use something along these lines.

    var myAlias = Mappa;

Using it with NodeJS enables you to have multiple toolkits under what ever names you want.
Of corse you can accomplish this multiple toolkit feature in browsers too, this would be done like so.

    window.ToolkitName = Mappa;

# Documentation

## General

Mappa consists of four base functions. `addMap`, `removeMap`, `addAlias` and `removeAlias`. It also stores an array of the current maps in `mapList` and of the current aliases in `aliasList`.

## Adding a map

Say you wanted to add a map to `JSON.strigify`, you would use this.

    Mappa.addMap('encodeJSON', JSON.stringify);

And then you would call it like so.

    Mappa.encodeJSON({ foo: 'bar' });

You can also add objects like so.

    Mappa.addMap('json', {
        encode: JSON.strigify,
        decode: JSON.parse
    });

Now the map is object oriented so your calling code would look like this.

    Mappa.json.encode({ foo: 'bar' });

It will return false if the name is in use.

## Removing a map

Removing a map is even simpler than adding them.
You just run the `removeMap` function and pass the name of the map as the argument. Like so.

    Mappa.removeMap('json');

It has now been removed from the object and the `mapList` array.

Say you wanted to remove last added map. You would use some code similar to this.

    var list = Mappa.mapList;
    Mappa.removeMap(list[list.length - 1]);

It will return false if the name does not exist.

## Adding an alias

All you have to do is run the `addAlias` function with the name as the sole argument.

    Mappa.addAlias('Toolbox');

And now you can access the `Mappa` object through the `Toolbox` object. Any changes and maps you make to any will be shared across all of the aliases. They are all the same object just references to the `Mappa` object.

It will return false if the name is in use.

## Removing an alias

This works exactly the same as removing a map. Just run the `removeAlias` function with the name of the alias as the argument.

    Mappa.removeAlias('Toolbox');

It will return false if not found or if it is not a Mappa alias.

Say you wanted to remove all of the aliases, you could use this code which utilises the `aliasList` array.

    var list = Mappa.aliasList,
        i = null;
    
    for(i = 0; i < list.length; i++) {
        Mappa.removeAlias(list[i]);
    }

# Good things to map to

I would recommend downloading the latest version of the following scripts and mapping to them.
They make a good starting point for a good tool kit.

 * [Sizzle](http://sizzlejs.com/) for the selector engine
 * [jsAnim](http://jsanim.com/) for the animation
 * [json2.js](https://github.com/douglascrockford/JSON-js/blob/master/json2.js) for JSON manipulation
 * [Cookie toolbox](http://javascript.about.com/library/blcookie.htm) for handling cookies
 * [AJAX toolbox](http://ajaxtoolbox.com/) for working with AJAX
 * [Cross browser events](http://www.dynamic-tools.net/toolbox/crossBrowserEvents/) for managing events
 * [Browser detect](http://www.quirksmode.org/js/detect.html) for working out what the client is using

# An example set up

I have set up an example which uses all of the functions listed above.
You will have to go onto the individual websites for documentation.
And look at the bottom of the file for what is mapped to what.

You can download it from this [Gist](https://gist.github.com/885208).

Pull out stuff you don't need and add things you do. That's the whole idea of this.

Wrapping your most used functions into one pretty object.