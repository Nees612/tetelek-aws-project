import { GetArticles } from "../../api_interface/Articleinterface";

function ArticleCardList () {
    let articleList = GetArticles();    

    return<>
        <div className="container p-2 text-start">
            {articleList.map((article) => (
            <div className="card m-2">                
                <div className="card-body ">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-subtitle mb-2 text-body-secondary">By {article.author}</p>
                    <p className="card-text">{article.description}</p>
                    <a href={article.link} className="btn btn-primary">Read more</a>
                </div>
            </div>
            ))}
        </div>
    </>
}

export default ArticleCardList;