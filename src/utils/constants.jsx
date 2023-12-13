const hiddenRoutes = ['/signup', '/signin', '/not-found'];

const techs = [
    {id: 'html', value: 'HTML'},
    {id: 'css', value: 'CSS'},
    {id: 'js', value: 'JS'},
    {id: 'react', value: 'React'},
    {id: 'git', value: 'Git'},
    {id: 'express', value: 'Express.js'},
    {id: 'mongoDb', value: 'mongoDB'}]

const projects = [
    {id: 'staticSite', title: 'Статичный сайт', link: 'https://maxvintsyun.github.io/how-to-learn/'},
    {id: 'adaptiveSite', title: 'Адаптивный сайт', link: 'https://maxvintsyun.github.io/mvin-russian-travel/index.html'},
    {id: 'singlePageSite', title: 'Одностраничное приложение', link: 'https://maxvintsyun.github.io/mvin-mesto/'},
]

const moviesApiUrl = 'https://api.nomoreparties.co/beatfilm-movies';

const mainApiUrl = 'https://api.mvinmoviesexplorer.nomoredomainsmonster.ru'

export { hiddenRoutes, techs, projects, moviesApiUrl, mainApiUrl }