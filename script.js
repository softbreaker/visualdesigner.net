
const heroDate = {
    serviceName : ['Branding', 'Image making'],
    title : 'Visual Designer',
    description : 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
    buttonText :'Contact',
}

const heroImg = {
    samsungImg : 'img/samsung.png',
    addidasImg : 'img/addidas.png',
    appleImg :  'img/apple.png',
    googleImg : 'img/google.png',
} 

//font page section
    document.getElementById('serviceName').innerText = heroDate.serviceName.join (" | ");
    document.getElementById('title').innerText = heroDate.title;
    document.getElementById('description').innerText = heroDate.description;
    document.getElementById('btn-cnt').innerText = heroDate.buttonText;


//for image section
    document.getElementById('samsung').src = heroImg.samsungImg;
    document.getElementById('addidas').src = heroImg.addidasImg;
    document.getElementById('apple').src = heroImg.appleImg;
    document.getElementById('google').src = heroImg.googleImg;







































