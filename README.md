# Beep Boop

#### web app that displays a range of numbers and replaces some numbers with text based on various criteria, 1-19-18

#### _By Sara Hamilton_

## Description

_This is the Epicodus weekly project for week 2 of the Intro to Programming course.  Its purpose is to display understanding of arrays and looping in JavaScript._

_Beep Boop takes a number from a user and returns a range of numbers from 0 to the chosen number with the following exceptions:_
* Numbers that contain a 0 are replaced (all digits) with "Beep!"
* Numbers that contain a 1 are replaced (all digits) with "Boop!"
* Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

### Specifications

* Numbers that contain a 0 are replaced (all digits) with "Beep!"
  * Example Number: 20
  * Replaced With: "Beep!"

* Numbers that contain a 1 are replaced (all digits) with "Boop!"
  * Example Number: 11
  * Replaced With: "Boop!"

* Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."
  * Example Number: 12
  * Replaced With: "I'm sorry, Dave. I'm afraid I can't do that."

* Numbers that meet more than one specification are prioritized in reverse order of their listing.
    * Example Number: 10
    * Replaced With: "Boop!" ( and not "Beep!" )

    * Example Number: 12
    * Replaced With: "I'm sorry, Dave. I'm afraid I can't do that." ( and not "Boop!" )


* Output is an array with all specified numbers replaced.  
    * Input Example: 20
    * Output Example: "Boop!"
                                  2
                                  "I'm sorry, Dave. I'm afraid I can't do that."
                                  4
                                  5
                                  "I'm sorry, Dave. I'm afraid I can't do that."
                                  7
                                  8
                                  "I'm sorry, Dave. I'm afraid I can't do that."
                                  "Boop!"
                                  "Boop!"
                                  "I'm sorry, Dave. I'm afraid I can't do that."
                                  "Boop!"
                                  "Boop!"
                                  "I'm sorry, Dave. I'm afraid I can't do that."
                                  "Boop!"
                                  "Boop!"
                                  "I'm sorry, Dave. I'm afraid I can't do that."
                                  "Boop!"
                                  "Beep!"

## Setup/Installation Requirements

* _clone repository_

* _open in text editor_

* _open in browser_

view on [GitHub pages](https://sara-hamilton.github.io/beep-boop/)

## Support and contact details

_To suggest changes, submit a pull request in the GitHub repository._

## Technologies Used

* HTML
* CSS
* jQuery 3.2.1
* Bootstrap 3.3.7

### License

*MIT License*

Copyright (c) 2018 **_Sara Hamilton_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
