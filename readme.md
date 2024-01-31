### execute a file - node [path to file]

### XPath locators

absolute and relative path

absolute path
`/` example: `/header/body/a[@id="oid"]`

relative path
`//` examle: `//a[@id="oid"]`

Without tegs
`*` example: `//*[@id="oid"]`  

All elements after the locator
`*` example: `//a[@id="oid"]/*`

Subquery
`//form[.]` example: `//form[.//input[@id="oid"]]`   

Several atributes 
`and` example: `//form[@id="oid" and @class = "fgt"]`   

Transition by levell DOM model

this levell (all elements on this levell)
`.` example: `//form[@id="oid"]/.` 

levell up 
`..` example: `//form[@id="oid"]/..` 

by index
`[1]` example: `//tbody/tr[1]/td[8]`  example: `(//*[@id="oid"])[1]`

### ****************************************************************

FUNCTIONS XPath

Last element in the list 
`last()` example: `//tbody/tr[last()]` 

by first sibbols
`starts-with()` example: `//form[starts-with(@class, "cl")]` 

full text match
`text()`  example: `//form[text()="blabla"]`

incomplete text match
`contains()` example: by text `//form[contains(text(), "bla")]` or by atribute `//form[contains(@class, "fut")]`


### CSS selectors

id
`#` example `#tthhrr`

class
`.` example `.gghhjj`

tag
`use jast tag name` examle: `a`

atribute presence
`[atributeName]`

atribute match value
`[atributeName="value"]`

contains text
`[src*="https"]`

starts with text
`[src^=//]`

ends with text
`[src$=png]`

example: `app-site-menu div#site-menu nav header div[aria-label="Navigate to home page."]`

https://www.w3schools.com/cssref/css_selectors.asp
https://learn.javascript.ru/css-selectors

### kill process 
1. var
`killall chromedriver`
2. var
`ps -ax | grep -i chromedriver `
`kill <#port>`