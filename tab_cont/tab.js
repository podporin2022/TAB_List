class Tab {
    // Переменные для записи данных
    #titles = [];
    #bodys = [];
    #activeIndex = 0;
    // Статическое поле классов которое не доступно из вне
    static CLASSES = {
        active: 'title-active',
        title_cont: 'title-container',
        show: 'show',
        title:'title',
        body:'body',
};
    constructor(el) {
        this.init(el);
    }

    init(el) {
        this.setElements(el);
        this.initialClassSet(el)
        el.children[0].addEventListener('click', this.onTabSwitch )
    }
    // Сетим елементы в Тайтл и Бади
    setElements(el){
        this.#titles = [...el.children[0].children];
        this.#bodys = [...el.children[1].children];
    }

    initialClassSet(el) {
        console.log(this.#titles);
        this.setActiveClasses(this.#titles, Tab.CLASSES.active, Tab.CLASSES.title);
        this.setActiveClasses(this.#bodys, Tab.CLASSES.show, Tab.CLASSES.body);
        el.children[0].classList.add(Tab.CLASSES.title_cont)
    }

    setActiveClasses(elements, activeClass, commonClass) {
        elements.forEach((e, i) => {
            e.classList.add(commonClass);
            if( i === this.#activeIndex){
                e.classList.add(activeClass);
            }
        });
    }

    onTabSwitch = (e) => {
        this.#activeIndex = this.#titles.indexOf(e.target);
        console.log(this.#activeIndex);
        this.renderElements(this.#titles);
    }
    renderElements(){
        this.iterateElements(this.#titles, Tab.CLASSES.active, );
        this.iterateElements(this.#bodys, Tab.CLASSES.show, )
    }
    iterateElements(elements, elClass){
        elements.forEach((e,i) =>{
            if(i === this.#activeIndex){
                e.classList.add(elClass);
            }else{
                e.classList.remove(elClass)
            }
        })
    }
}