'use strict'
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /* Test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have URL defined and it is not Empty', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBeNull();
            };
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have a NAME defined and it is not Empty', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBeNull();
            };
        });
    });


    /* Test suite named "The menu" */
    describe('The menu', function(){
        /* Test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is HIDDEN by default', function() {
            const menuClass = document.querySelector('.menu-hidden');

            expect(menuClass).not.toBeNull();
        });
         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes VISIBILITY on menu icon click', function() {
            const menuIcon = document.querySelector('.menu-icon-link');
            menuIcon.click();
            expect(document.querySelector('.menu-hidden')).toBeNull();
            menuIcon.click();
            expect(document.querySelector('.menu-hidden')).not.toBeNull();
        });
    });
    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('are called and COMPLETED JOB with at least one entry', function(done) {
            const feed = document.querySelector('.feed');
            // console.log(feed.childElementCount);
            expect(feed.childElementCount).toBeGreaterThan(0);
            done();
        });
    });
    /* Test suite named "New Feed Selection" */

    describe('New Feed Selection', () => {

        /* Test that ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        * Remember, loadFeed() is asynchronous.
        */
        var feed1,
            feed0;

        beforeEach((done) => {
            loadFeed(1, ()  => {
                // content of the first title in RSS feed`
                feed1 = document.querySelector('.entry>h2').innerHTML;
                loadFeed(0, () => {
                    done();
                });
            });
        });

        it('feed is defined and content is CHANGING', (done) => {
            // content of the first title in RSS feed
            feed0 = document.querySelector('.entry>h2').innerHTML;

            // check first titles on feed 0 and 1
            // console.log('feed0: ' + feed0);
            // console.log('feed1: ' + feed1);
            expect(feed0).not.toBe(undefined);
            expect(feed1).not.toBe(undefined);
            expect(feed1).not.toBe(feed0);
            done();
        });
    });
}());
