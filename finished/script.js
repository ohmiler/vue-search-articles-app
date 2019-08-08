let vuesearch = new Vue({
    el: "#main",
    data: {
        searchString: "",

        articles: [
            {
                "title": "What you need to know about css variables",
                "url": "https://tutorialzine.com",
                "image": "img/pic1.jpg",
            },
            {
                "title": "Freebie: 4 Great looking pricing tables",
                "url": "https://tutorialzine.com",
                "image": "img/pic2.jpg",
            },
            {
                "title": "20 Interesting JavaScript and CSS libraries for Februry 2016",
                "url": "https://tutorialzine.com",
                "image": "img/pic3.jpg",
            },
            {
                "title": "Quick Tip: The Easiest Way to make responsive headers",
                "url": "https://tutorialzine.com",
                "image": "img/pic4.png",
            },
            {
                "title": "Learn SQL In 20 Minutes",
                "url": "https://tutorialzine.com",
                "image": "img/pic5.png",
            },
            {
                "title": "Creating your first desktop app with html, js and electron",
                "url": "https://tutorialzine.com",
                "image": "img/pic6.png",
            },
        ]
    },
    computed: {
        filteredArticles: function() {
            let articles_array = this.articles,
                  searchString = this.searchString;

            if (!searchString) {
                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function(item) {
                if (item.title.toLowerCase().indexOf(searchString) !== -1) {
                    console.log(item.title.toLowerCase().indexOf(searchString) !== -1);
                    console.log(item.title.indexOf(searchString));
                    return item;
                }
            });

            return articles_array;
        }
    }

});