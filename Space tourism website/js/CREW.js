const items=[{
    'title':'COMMANDER',
    'main':`Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut.
    He launched into space for the third time as commander of Crew Dragon Demo-2.`,
     'name':'DOUGLAS HURLEY',
     'image':'./assets/CREW/image-douglas-hurley.png'
},{
    'title':'MISSION SPECIALIST',
    'main':`Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system.
     Shuttleworth became the first South African to travel to space as a space tourist.`,
     'name':'MARK SHUTTLEWORTH',
     'image':'./assets/CREW/image-mark-shuttleworth.png'
},{
    
    'title':'PILOT',
    'main':`Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S.
     Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.`,
     'name':'VICTOR GLOVER',
     'image':'./assets/CREW/image-victor-glover.png'
},{
    
    'title':'FLIGHT ENGINEER',
    'main':`Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
     Ansari was the fourth self-funded space tourist,
     the first self-funded woman to fly to the ISS, and the first Iranian in space.`,
     'name':'ANOUSHEH ANSARI',
     'image':'./assets/CREW/image-anousheh-ansari.png'
}]
const listofDestinaton=document.getElementsByClassName('CREW--left--navbar--list--item');
const titleName=document.getElementsByClassName('CREW--left--titleName')[0];
const Name=document.getElementsByClassName('CREW--left--Name')[0];
const main=document.getElementsByClassName('CREW--left--main')[0];
for(let i=1;i<=listofDestinaton.length;i++){
    listofDestinaton[i-1].addEventListener('click',()=>{
        
            if(listofDestinaton[i-1].dataset.value=='First'){
                titleName.textContent=`${items[0].title}`;
                main.textContent=`${items[0].main}`;
                Name.textContent=`${items[0].name}`;
                document.getElementsByClassName('imageOfcrew')[0].src=`${items[0].image}`;
            }
            else if(listofDestinaton[i-1].dataset.value=='Second'){
                titleName.textContent=`${items[1].title}`;
                main.textContent=`${items[1].main}`;
                Name.textContent=`${items[1].name}`;
                document.getElementsByClassName('imageOfcrew')[0].src=`${items[1].image}`;
            }
            else if(listofDestinaton[i-1].dataset.value=='Thirt'){
                titleName.textContent=`${items[2].title}`;
                main.textContent=`${items[2].main}`;
                Name.textContent=`${items[2].name}`;
                document.getElementsByClassName('imageOfcrew')[0].src=`${items[2].image}`;
            }
            else if(listofDestinaton[i-1].dataset.value=='Fourth'){
                titleName.textContent=`${items[3].title}`;
                main.textContent=`${items[3].main}`;
                Name.textContent=`${items[3].name}`;
                document.getElementsByClassName('imageOfcrew')[0].src=`${items[3].image}`;
            }
            
    });
   
    
}