const items=[{
    'main':`A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation.
     Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
     'name':'LAUNCH VEHICLE',
     'image':'./assets/TECHNOLOGY/image-launch-vehicle-portrait.jpg'
},{
    'main':`A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral,
     our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
     'name':'SPACEPORT',
     'image':'./assets/TECHNOLOGY/image-spaceport-portrait.jpg'
},{
    
    'main':`A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight.
     It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
     'name':'SPACE CAPSULE',
     'image':'./assets/TECHNOLOGY/image-space-capsule-portrait.jpg'
}]
const listofDestinaton=document.getElementsByClassName('TECHNOLOGY--left--navbar--list--item');
const Name=document.getElementsByClassName('TECHNOLOGY--left--Name')[0];
const main=document.getElementsByClassName('TECHNOLOGY--left--main')[0];
for(let i=1;i<=listofDestinaton.length;i++){
    listofDestinaton[i-1].addEventListener('click',()=>{
        
            if(listofDestinaton[i-1].dataset.value=='First'){
                main.textContent=`${items[0].main}`;
                Name.textContent=`${items[0].name}`;
                document.getElementsByClassName('imageOfTECHNOLOGY')[0].src=`${items[0].image}`;
            }
            else if(listofDestinaton[i-1].dataset.value=='Second'){
                main.textContent=`${items[1].main}`;
                Name.textContent=`${items[1].name}`;
                document.getElementsByClassName('imageOfTECHNOLOGY')[0].src=`${items[1].image}`;
            }
            else if(listofDestinaton[i-1].dataset.value=='Thirt'){
                main.textContent=`${items[2].main}`;
                Name.textContent=`${items[2].name}`;
                document.getElementsByClassName('imageOfTECHNOLOGY')[0].src=`${items[2].image}`;
            }
            
    });
   
    
}