const hiddenRoutes = ['/signup', '/signin', '/not-found'];

const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']

const projects = [
    {title: 'Статичный сайт', link: 'https://maxvintsyun.github.io/how-to-learn/'},
    {title: 'Адаптивный сайт', link: 'https://maxvintsyun.github.io/mvin-russian-travel/index.html'},
    {title: 'Одностраничное приложение', link: 'https://maxvintsyun.github.io/mvin-mesto/'},
]

const films = [
    {id: 0, image: 'https://images.unsplash.com/photo-1572705824045-3dd0c9a47945?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '33 слова о дизайне', duration: 77, owner: 'me'},
    {id: 1, image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=2628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Бег это свобода', duration: 50, owner: ''},
    {id: 2, image: 'https://images.unsplash.com/photo-1540678931042-41a977082abf?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Gimme Danger: История Игги и The Stooges', duration: 120, owner: 'me'},
    {id: 3, image: 'https://images.unsplash.com/photo-1572705824045-3dd0c9a47945?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '33 слова о дизайне', duration: 52, owner: ''},
    {id: 4, image: 'https://images.unsplash.com/photo-1572705824045-3dd0c9a47945?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '33 слова о дизайне', duration: 77, owner: ''},
    {id: 5, image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=2628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Бег это свобода', duration: 50, owner: ''},
    {id: 6, image: 'https://images.unsplash.com/photo-1540678931042-41a977082abf?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Gimme Danger: История Игги и The Stooges', duration: 120, owner: ''},
    {id: 7, image: 'https://images.unsplash.com/photo-1572705824045-3dd0c9a47945?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '33 слова о дизайне', duration: 52, owner: 'me'},
    {id: 8, image: 'https://images.unsplash.com/photo-1572705824045-3dd0c9a47945?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '33 слова о дизайне', duration: 77, owner: ''},
    {id: 9, image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=2628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Бег это свобода', duration: 50, owner: ''},
    {id: 10, image: 'https://images.unsplash.com/photo-1540678931042-41a977082abf?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Gimme Danger: История Игги и The Stooges', duration: 120, owner: ''},
    {id: 11, image: 'https://images.unsplash.com/photo-1572705824045-3dd0c9a47945?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '33 слова о дизайне', duration: 52, owner: ''},
    {id: 12, image: 'https://images.unsplash.com/photo-1572705824045-3dd0c9a47945?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '33 слова о дизайне', duration: 77, owner: ''},
    {id: 13, image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=2628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Бег это свобода', duration: 50, owner: 'me'},
    {id: 14, image: 'https://images.unsplash.com/photo-1540678931042-41a977082abf?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Gimme Danger: История Игги и The Stooges', duration: 120, owner: ''},
    {id: 15, image: 'https://images.unsplash.com/photo-1572705824045-3dd0c9a47945?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '33 слова о дизайне', duration: 52, owner: 'me'}
]

export { hiddenRoutes, techs, projects, films }