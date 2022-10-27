const items=[{
    'title':'MOON',
    'main':`See our planet as you’ve never seen it before. A perfect relaxing trip away to help
    regain perspective and come back refreshed. While you’re there, take in some history by
     visiting the Luna 2 and Apollo 11 landing sites.`,
     'AVGdistanceNumber':'384,400 km',
     'ESTtimeNumber':'3 DAYS',
     'image':'./assets/DESTINATON/image-moon.png'
},{
    'title':'MARS',
    'main':`Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system.
     It’s two and a half times the size of Everest!`,
     'AVGdistanceNumber':'225 MIL. km',
     'ESTtimeNumber':'9 MONTHS',
     'image':'./assets/DESTINATON/image-mars.png'
},{
    
    'title':'EUROPA',
    'main':`The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, 
    it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
     'AVGdistanceNumber':'628 MIL. km',
     'ESTtimeNumber':'3 YEARS',
     'image':'./assets/DESTINATON/image-europa.png'
},{
    
    'title':'TITAN',
    'main':`The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!).
     As a bonus, you get striking views of the Rings of Saturn.`,
     'AVGdistanceNumber':'1.6 BIL. km',
     'ESTtimeNumber':'7 YEARS',
     'image':'./assets/DESTINATON/image-titan.png'
}]
const listofDestinaton=document.getElementsByClassName('DESTINATON--right--navbar--list--item');
const title=document.getElementsByClassName('DESTINATON--right--title')[0];
const main=document.getElementsByClassName('DESTINATON--right--main')[0];
const AVGdistanceNumber=document.getElementsByClassName('DESTINATON--right--footer--AVGdistanceNumber')[0];
const ESTtimeNumber=document.getElementsByClassName('DESTINATON--right--footer--ESTtimeNumber')[0];
for(let i=0;i<listofDestinaton.length;i++){
    listofDestinaton[i].addEventListener('click',()=>{
            if(listofDestinaton[i].dataset.value=='MOON'){
                title.textContent=`${items[0].title}`;
                main.textContent=`${items[0].main}`;
                AVGdistanceNumber.textContent=`${items[0].AVGdistanceNumber}`;
                ESTtimeNumber.textContent=`${items[0].ESTtimeNumber}`;
                document.getElementsByClassName('imageOfplate')[0].src=`${items[0].image}`;
            }
            else if(listofDestinaton[i].dataset.value=='MARS'){
                title.textContent=`${items[1].title}`;
                main.textContent=`${items[1].main}`;
                AVGdistanceNumber.textContent=`${items[1].AVGdistanceNumber}`;
                ESTtimeNumber.textContent=`${items[1].ESTtimeNumber}`;
                document.getElementsByClassName('imageOfplate')[0].src=`${items[1].image}`;
            }
            else if(listofDestinaton[i].dataset.value=='EUROPA'){
                title.textContent=`${items[2].title}`;
                main.textContent=`${items[2].main}`;
                AVGdistanceNumber.textContent=`${items[2].AVGdistanceNumber}`;
                ESTtimeNumber.textContent=`${items[2].ESTtimeNumber}`;
                document.getElementsByClassName('imageOfplate')[0].src=`${items[2].image}`;
            }
            else if(listofDestinaton[i].dataset.value=='TITAN'){
                title.textContent=`${items[3].title}`;
                main.textContent=`${items[3].main}`;
                AVGdistanceNumber.textContent=`${items[3].AVGdistanceNumber}`;
                ESTtimeNumber.textContent=`${items[3].ESTtimeNumber}`;
                document.getElementsByClassName('imageOfplate')[0].src=`${items[3].image}`;
            }
        
    });
       
    
}