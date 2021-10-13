# house-search

Have you ever dreamed of being able to search for properties by address from a limited result set generated from a CSV?

If you have:

* ruby 2.5.0 or greater
* rails 6.0.0 or greater
* a mysql db with a root user named 'root' and no password

Well then you're in luck!

Search through some of the finest properties available on redfin in beautiful San Francisco CA.
All you have to do is open a terminal and run the following commands:

```
$ git clone git@github.com:storm-factory/house-search.git
$ cd house-search
$ ./init.sh
$ ./start_back_end.sh
```

Now you're almost ready to search your little heart out!

Add a google maps API key to the `address-frontend/src/apikey.js` file

Open a new terminal window and run the following:
```
$ ./start_front_end.sh
```

and you're off!
