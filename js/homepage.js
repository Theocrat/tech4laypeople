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
}