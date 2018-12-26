# Project Overview

 JavaScript application that reads RSS feeds from predefined sources.
 Includes 7 test specyfications written in JavaScript [Jasmine](http://jasmine.github.io/).

## Where are Jasmine spec code?

Test specyfications are included in ./jasmine/spec/feedeader.js

## Project includes following tests:

1. Variable definition handling:

    expect(...).toBeDefined();

2. Object properties and HTML+CSS class tests:

    expect(...).toBe();
    expect(...).not.toBeNull();
    expect(...).toBeGreaterThan(number)

3. Triggering events:

    object.click();

4. Asynchronous functions handling:

    beforeEach(function(done) {
        functionName(param, function() {
            done();
        });
    });

