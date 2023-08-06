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
    

    nHome.addEventListener('click', function () {
        home.classList.add('content__show')
        projects.classList.remove('content__show')
        resume.classList.remove('content__show')
        contact.classList.remove('content__show')

        body.style.backgroundPosition = 'left top'
    })

    nResume.addEventListener('click', function () {
        resume.classList.add('content__show')
        projects.classList.remove('content__show')
        home.classList.remove('content__show')
        contact.classList.remove('content__show')

        body.style.backgroundPosition = 'left bottom'
    })

    nProjects.addEventListener('click', function () {
        projects.classList.add('content__show')
        resume.classList.remove('content__show')
        home.classList.remove('content__show')
        contact.classList.remove('content__show')

        body.style.backgroundPosition = 'right top'
    })

    nContact.addEventListener('click', function () {
        contact.classList.add('content__show')
        resume.classList.remove('content__show')
        home.classList.remove('content__show')
        projects.classList.remove('content__show')

        body.style.backgroundPosition = 'right bottom'
    })

}

export default showMenu