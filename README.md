## OldSteam-Recoded

# THIS IS UNOFFICIAL, ALL CREDIT GOES TO THE ORGINIAL THEME CREATOR!

That's right, this Steam Theme is being coded from the ground-up.
Reason being is because some parts of the orginial theme no longer work, and
also considering that the theme is no longer maintained. Pretty much a lot of almost dead code, that i don't like manually going though just to make it work.

Enjoy this recreation while you still can.

This Theme used ricewind012's More Advanced Theme Template, which uses SCSS instead of CSS. Makes it a little easier for me to pin-point which's one is which.

Read more down below to see how to code this theme alongside how to compile this theme.

----

This uses **your own** class map - more info on how it works [here][steam-theming-utils].

## Example

Let's say you have a file called `src/desktop/titlebarcontrols.css`:

```css
/* Remove useless shit */
#AnnouncementsButton,
#GamepadUIToggle {
  display: none;
}
```

It will be compiled to the following code residing in `dist/desktop/titlebarcontrols.css`:

```css
/* Remove useless shit */
._5wILZhsLODVwGfcJ0hKmJ /* AnnouncementsButton */,
._3LKQ3S_yqrebeNLF6aeiog /* GamepadUIToggle */ {
  display: none;
}
```

This example resides in the `src` directory. The files whose class names will be replaced will reside in the `dist` directory.

## Usage

```sh
# Install dependencies
$ npm i

# See the readable versions of classes
$ npx steam-theming-utils make_readable_classes

# ...and build!
$ npm run build
```

[Prettier][prettier], a CSS/JS formatter, is also included as a dependency of [steam-theming-utils][steam-theming-utils].

[prettier]: https://prettier.io
[steam-theming-utils]: https://github.com/ricewind012/steam-theming-utils
