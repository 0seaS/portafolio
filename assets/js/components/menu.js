function showMenu(){
    const nHome = document.querySelector('#idAbout')
    const nResume = document.querySelector('#idResume')
    const nProjects = document.querySelector('#idProjects')
    const nContact = document.querySelector('#idContact')

    const body = document.querySelector('body')

    const home = document.querySelector('.content__home')
    const projects = document.querySelector('.content__projects')
    const resume = document.querySelector('.content__resume')
    const contact = document.querySelector('.content__contact')
    
    const clearSelected = () => {
        projects.classList.remove('content__show')
        home.classList.remove('content__show')
        contact.classList.remove('content__show')
        resume.classList.remove('content__show')

        nHome.classList.remove('nav__element-selected')
        nResume.classList.remove('nav__element-selected')
        nProjects.classList.remove('nav__element-selected')
        nContact.classList.remove('nav__element-selected')
    }

    nHome.addEventListener('click', function () {
        clearSelected()
        home.classList.add('content__show')

        nHome.classList.add('nav__element-selected')
        body.style.backgroundPosition = 'left top'
    })

    nResume.addEventListener('click', function () {
        clearSelected()
        resume.classList.add('content__show')

        nResume.classList.add('nav__element-selected')
        body.style.backgroundPosition = 'left 80%'
    })

    nProjects.addEventListener('click', function () {
        clearSelected()
        projects.classList.add('content__show')

        nProjects.classList.add('nav__element-selected')
        body.style.backgroundPosition = 'right top'
    })

    nContact.addEventListener('click', function () {
        clearSelected()
        contact.classList.add('content__show')

        nContact.classList.add('nav__element-selected')
        body.style.backgroundPosition = 'right 80%'
    })

}

export default showMenu