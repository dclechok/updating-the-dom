import "./styles.css";

/**
  Write the addheadings() function here
*/
const articles = document.querySelectorAll("article");
function addHeadings(){

  for(let article of articles.values()){
    const newEle = document.createElement("h2");
    newEle.innerText = article.innerText;
    article.innerText = '';
    article.appendChild(newEle); 
  }
}

/**
  Write the styleTutorialsAndArticles() function here
*/
function styleTutorialsAndArticles(){
  for(let article of articles.values()){
    if(article.innerText.includes('Article')) article.classList.add('article');
    if(article.innerText.includes('Tutorial')) article.classList.add('tutorial');
  }
}
/**
  Write the separateAllTutorials() function here
*/
function separateAllTutorials(){
  const tutorials = document.createElement('section');
  tutorials.classList.add('tutorials');
  
  for(let article of articles.values()){
    if(article.innerText.includes('Tutorial')){
      tutorials.appendChild(article);
      // articles.removeChild(article);
    }
  }
  const appendDiv = document.querySelector('div.container');
  appendDiv.appendChild(tutorials);
}
/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
