function renderArticleList() {
    let listSpace = document.getElementById('articleList')
    let listContents = ''
    
    articleList.forEach(article => {
        listContents += `
            <div class="article">

            <div class="gap"></div>

            <p class="article-title">
                <a href="${article.url}" class="daylink">
                    ${article.title}
                </a>
            </p>
        `

        article.content.forEach(paragraph => {
            listContents += `
                <p class="article-desc">
                    ${paragraph}
                </p>
            `
        })

        listContents += `
            <div class="gap"></div>
        </div>
        <div class="gap"></div>
        `

        listSpace.innerHTML = listContents
    });

    if(screen.width < 1000) {
        // Probably a mobile device
        document.querySelectorAll('.article').forEach(
            article => {
                article.style.width = '100%'
            }
        )

        document.querySelectorAll('.intro')[0].style.width = '100%'
    }
 }