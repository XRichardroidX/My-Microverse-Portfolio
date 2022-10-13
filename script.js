const WorkSection = document.getElementById('main-projects');

const JSObject = {
   "First": [
      'Ruby on rails', 
      "CSS",
       'JavaScript', 
       'HTML'
      ],
   "Second": [
      'C++', 
      "CSS",
       'Flutter', 
       'HTML'
      ],
   "Third": [
      'Rust', 
      "SCSS",
       'Go', 
       'HTML'
      ],
   "Fourth": [
      'Native Swift', 
      "Swift",
       'Kotlin', 
       'Java'
      ],
   "Fifth": [
      'Ruby on rails', 
      "CSS",
       'JavaScript', 
       'HTML'
      ],
   "Sixth": [
      'Assembly', 
      "PHP",
       'C', 
       'C++'
      ],
   };

function ProjectList() {
   let card = document.createElement('div');
   let button = document.getElementById('button');
   
   card.innerHTML = `<div class="project-1">
   <div class="project">
     <img
       src="images/template-background.png"
       alt="template-background"
       width="70%"
     />
     <div class="information">
       <h4 class="abc">Multi-Post Stories Gain+Glory</h4>
       <ul class="skills">
         <li class="skill">
           <a href="#" class="skill-content">Ruby on rails</a>
         </li>
         <li class="skill">
           <a href="#" class="skill-content">CSS</a>
         </li>
         <li class="skill">
           <a href="#" class="skill-content">JavaScript</a>
         </li>
         <li class="skill">
           <a href="#" class="skill-content">HTML</a>
         </li>
       </ul>
       <div class="button" onclick="WindowPopUp('F1')">See Projects</div>
     </div>
   </div>
 </div>
 <div class="project-2">
   <div class="project">
     <img
       src="images/template-background.png"
       alt="template-background"
       width="70%"
     />
     <div class="information">
       <h4 class="abc">Multi-Post Stories Gain+Glory</h4>
       <ul class="skills">
         <li class="skill">
           <a href="#" class="skill-content">Ruby on rails</a>
         </li>
         <li class="skill">
           <a href="#" class="skill-content">CSS</a>
         </li>
         <li class="skill">
           <a href="#" class="skill-content">JavaScript</a>
         </li>
         <li class="skill">
           <a href="#" class="skill-content">HTML</a>
         </li>
       </ul>
       <div class="button" onclick="WindowPopUp('F2')">See Projects</div>
     </div>
   </div>
 </div>
 <div class="project-3">
   <div class="project">
     <img
       src="images/template-background.png"
       alt="template-background"
       width="70%"
     />
     <div class="information">
       <h4 class="abc">Multi-Post Stories Gain+Glory</h4>
       <ul class="skills">
         <li class="skill">
           <a href="#" class="skill-content">Ruby on rails</a>
         </li>
         <li class="skill">
           <a href="#" class="skill-content">CSS</a>
         </li>
         <li class="skill">
           <a href="#" class="skill-content">JavaScript</a>
         </li>
         <li class="skill">
           <a href="#" class="skill-content">HTML</a>
         </li>
       </ul>
       <div class="button" onclick="WindowPopUp('F3')">See Projects</div>
     </div>
   </div>
 </div>`;

 WorkSection.appendChild(card);
}


   ProjectList();



function ResponsiveMenuForMobile(){
   let mobilehead = document.getElementById('my-mobile-head');
   let items = document.getElementById('my-header-items');
   let z1 = document.getElementById('my-header1');
   let z2 = document.getElementById('my-header2');
   let z3 = document.getElementById('my-header3');
   let Body = document.getElementById('my-bd');

   if(mobilehead.className === 'mobile-header' && items.className === 'header-items'){
    mobilehead.className = 'mobile-headerr';
    items.className = 'header-itemsr';
    z1.className = 'headerr';
    z2.className = 'headerr';
    z3.className = 'headerr';
    Body.className = 'bdr';
   }
   else{
    mobilehead.className = 'mobile-header';
    items.className = 'header-items';
    z1.className = 'header';
    z2.className = 'header';
    z3.className = 'header';
    Body.className = 'bd';
   }
}

function OptionClick(){
   let mobilehead = document.getElementById('my-mobile-head');
   let items = document.getElementById('my-header-items');
   let z1 = document.getElementById('my-header1');
   let z2 = document.getElementById('my-header2');
   let z3 = document.getElementById('my-header3');
   let Body = document.getElementById('my-bd');
   
      mobilehead.className = 'mobile-header';
      items.className = 'header-items';
      z1.className = 'header';
      z2.className = 'header';
      z3.className = 'header';
      Body.className = 'bd';
}

function WindowPopUp(ProjectType){
   let Body = document.getElementById('my-pop-up-clear');
   let WindowPopUp = document.getElementById('my-pop-up-background');
   let mobileButtons = document.getElementById('my-buttons');
   let desktopButtons = document.getElementById('my-D-buttons');
   let mobilePopUpImage = document.getElementById('my-pop-up-image');
   let DesktopPopUpImage = document.getElementById('D-my-pop-up-image');
   let mobileClick = document.getElementById('my-click');
   let desktopClick = document.getElementById('my-D-click');
   let BlurBG = document.getElementById('my-sub-bd');

   let FirstList = document.getElementById('L-content1');
   let SecondList = document.getElementById('L-content2');
   let ThirdList = document.getElementById('L-content3');
   let FourthList = document.getElementById('L-content4');


   if (ProjectType === "F1"){
      FirstList.innerHTML = JSObject.First[0];
      SecondList.innerHTMl = JSObject.First[1];
      ThirdList.innerHTMl = JSObject.First[2];
      FourthList.innerHTMl = JSObject.First[3];
   }else if (ProjectType === "F2"){
      FirstList.innerHTML = JSObject.Second[0];
      SecondList.innerHTMl = JSObject.Second[1];
      ThirdList.innerHTMl = JSObject.Second[2];
      FourthList.innerHTMl = JSObject.Second[3];
   }else if (ProjectType === "F3"){
      FirstList.innerHTML = JSObject.Third[0];
      SecondList.innerHTMl = JSObject.Third[1];
      ThirdList.innerHTMl = JSObject.Third[2];
      FourthList.innerHTMl = JSObject.Third[3];
   }else if (ProjectType === "F4"){
      FirstList.innerHTML = JSObject.Fourth[0];
      SecondList.innerHTMl = JSObject.Fourth[1];
      ThirdList.innerHTMl = JSObject.Fourth[2];
      FourthList.innerHTMl = JSObject.Fourth[3];
   }else if (ProjectType === "F5"){
      FirstList.innerHTML = JSObject.Fifth[0];
      SecondList.innerHTMl = JSObject.Fifth[1];
      ThirdList.innerHTMl = JSObject.Fifth[2];
      FourthList.innerHTMl = JSObject.Fifth[3];
   }else{
      FirstList.innerHTML = JSObject.Sixth[0];
      SecondList.innerHTMl = JSObject.Sixth[1];
      ThirdList.innerHTMl = JSObject.Sixth[2];
      FourthList.innerHTMl = JSObject.Sixth[3];
   }
   
   if(window.innerWidth <= 768){
      if(Body.className === 'pop-up'){
         Body.className = 'pop-up-clear';
         WindowPopUp.className = 'pop-up-background';
         BlurBG.className = 'sub-bd-blur';

         mobileButtons.className = 'buttons';
         desktopButtons.className = 'D-buttons-clear';

         mobilePopUpImage.className = 'pop-up-image';
         DesktopPopUpImage.className = 'D-pop-up-image-clear';

         mobileClick.className = 'click';
         desktopClick.className = 'D-click-clear';
      }else{
         Body.className = 'pop-up';
         WindowPopUp.className = 'pop-up-background-clear';
         BlurBG.className = 'sub-bd';

         mobileButtons.className = 'buttons-clear';
         desktopButtons.className = 'D-buttons-clear';

         mobilePopUpImage.className = 'pop-up-image-clear';
         DesktopPopUpImage.className = 'D-pop-up-image-clear';

         mobileClick.className = 'click-clear';
         desktopClick.className = 'D-click-clear';
      }
   }
   else{
      if(Body.className === 'pop-up'){
         Body.className = 'pop-up-clear';
         WindowPopUp.className = 'pop-up-background';
         BlurBG.className = 'sub-bd-blur';

         mobileButtons.className = 'buttons-clear';
         desktopButtons.className = 'D-buttons';

         mobilePopUpImage.className = 'pop-up-image-clear';
         DesktopPopUpImage.className = 'D-pop-up-image';

         mobileClick.className = 'click-clear';
         desktopClick.className = 'D-click';
      }else{
         Body.className = 'pop-up';
         WindowPopUp.className = 'pop-up-background-clear';
         BlurBG.className = 'sub-bd';

         mobileButtons.className = 'buttons-clear';
         desktopButtons.className = 'D-buttons-clear';

         mobilePopUpImage.className = 'pop-up-image-clear';
         DesktopPopUpImage.className = 'D-pop-up-image-clear';

         mobileClick.className = 'click';
         desktopClick.className = 'D-click-clear';
      }
   }
}

const contactForm = document.querySelector('.main-contact-form');
const emailInput = document.querySelector('.email-address');
const validationMessage = document.querySelector('.error-message');
contactForm.addEventListener('submit', (event) => {
  const strInput = emailInput.value;
  if (/[A-Z]/.test(strInput)) {
    validationMessage.innerHTML = 'Your email address should not contain upper case letters';
    validationMessage.classList.add('shake');
    event.preventDefault();
  }
});

addEventListener('input', 
   () => {
    const Data = {
      FullName: document.querySelector('.full-name').value,
      EmailAdress: document.querySelector('.email-address').value,
      TextArea: document.querySelector('.textarea').value
    };
       localStorage.setItem("LocalFormStorage" ,JSON.stringify(Data));
   }
);
