# Jest Q&A

## Initial Setup (already completed)

To set up this JS project, the author:

* Created a folder
* Ran `npm init`
* Installed Jest with `npm i --D jest`
**Question:** What does --D mean? 
**Answer:** Shortcut for --save-dev (package will appear in your dev dependencies)
* Updated `scripts` in `package.json` to 
```
"scripts": {
    "test": "jest"
}
```
* Added Readme with `touch README.md`
* Created `.gitignore` file with `touch .gitignore` and added `node_modules` so that node_modules would not be committed to github repo

## Project Setup (to-do)

Run `npm i` to install dependencies

## Project Steps

### Part I

1. Create `math.js` file
2. Create `add function` in `math.js` file
3. Create `subtract function` in `math.js` file
4. Create `multiply function` in `math.js` file
5. Create `divide function` in `math.js` file
6. Export all functions from file
7. Run `npm test` - What happens? Why?

### Part II

1. Create `math.test.js` (one way to add a test file). What is another way you could add tests to this project?
2. Import functions we want to test to test file
3. Run `npm test` - What happens? Why?
4. Create tests for each of the functions in `math.js`

**Question:** What is the difference between expect vs. assert in Jest?
**Answer:** est uses "matchers" to let you test values in different ways. When you're writing tests, you often need to check that values meet certain conditions. expect gives you access to a number of "matchers" that let you validate different things.

**Question:** What is the difference between the test method vs. the it method in Jest? Why might you use the it method?
**Answer:** The Jest docs state it is an alias of test. So they are exactly the same from a functional point of view. They exist both to enable to make a readable English sentence from your test. So it's about readability not about functionality.

**Question:** What is the describe method in Jest?
**Answer:** describe(name, fn) creates a block that groups together several related tests.

