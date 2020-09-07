let tabs = (tabs)=>{
    let tablinks = document.querySelectorAll('.tab-links a');
    let tabContent = document.querySelectorAll('.tab-content .tab');
    tablinks[0].classList.add('active')
    tabContent[0].classList.add('active')
    tablinks.forEach(link =>{
       
        link.addEventListener('click', (e)=>{
            e.preventDefault();
            tablinks.forEach((item)=>{
                item.classList.remove('active')
            })
            e.target.classList.add('active');
            let linkhref = e.target.href
            let hrefText = (linkhref.slice((linkhref.indexOf('#') +1), linkhref.length));
            tabContent.forEach(tab =>{
                tab.classList.remove('active');
                if(hrefText == tab.id){
                    tab.classList.add('active')
                }
            })
        })
    })
    
}




let tabitems = document.querySelectorAll('.tabsk');
tabs(tabitems)