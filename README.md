# What is Mappa?

Mappa is a tiny JavaScript framework that only contains what you give to it.
The idea of Mappa is that you map functions from things you or other people have written into one pretty object.
So you have an object of functions all named how you want them.

This allows you to build your very own custom set of tools.

# Who wrote this thing?

That would be me, [Oliver Caldwell](http://flowdev.co.uk/).
I just came up with the idea on a train home from London.

# Documentation

## General

Mappa consists of two base functions. `addMap` and `removeMap`. It also stores an array of the current maps in `mapList`.

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

## Removing a map

Removing a map is even simpler than adding them.
You just run the `removeMap` function and pass the name of the map as the argument. Like so.

    Mappa.removeMap('json');

It has now been removed from the object and the `mapList` array.

Say you wanted to remove last added map. You would use some code similar to this.

    var list = Mappa.mapList;
    Mappa.removeMap(list[list.length - 1]);