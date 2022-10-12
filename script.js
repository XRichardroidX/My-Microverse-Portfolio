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

function WindowPopUp(){
   let Body = document.getElementById('my-pop-up-clear');
   let WindowPopUp = document.getElementById('my-pop-up-background');
   let mobileButtons = document.getElementById('my-buttons');
   let desktopButtons = document.getElementById('my-D-buttons');
   let mobilePopUpImage = document.getElementById('my-pop-up-image');
   let DesktopPopUpImage = document.getElementById('D-my-pop-up-image');
   let mobileClick = document.getElementById('my-click');
   let desktopClick = document.getElementById('my-D-click');

   if(window.innerWidth <= 768){
      if(Body.className === 'pop-up'){
         Body.className = 'pop-up-clear';
         WindowPopUp.className = 'pop-up-background';

         mobileButtons.className = 'buttons';
         desktopButtons.className = 'D-buttons-clear';

         mobilePopUpImage.className = 'pop-up-image';
         DesktopPopUpImage.className = 'D-pop-up-image-clear';

         mobileClick.className = 'click';
         desktopClick.className = 'D-click-clear';
      }else{
         Body.className = 'pop-up';
         WindowPopUp.className = 'pop-up-background-clear';

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

         mobileButtons.className = 'buttons-clear';
         desktopButtons.className = 'D-buttons';

         mobilePopUpImage.className = 'pop-up-image-clear';
         DesktopPopUpImage.className = 'D-pop-up-image';

         mobileClick.className = 'click-clear';
         desktopClick.className = 'D-click';
      }else{
         Body.className = 'pop-up';
         WindowPopUp.className = 'pop-up-background-clear';

         mobileButtons.className = 'buttons-clear';
         desktopButtons.className = 'D-buttons-clear';

         mobilePopUpImage.className = 'pop-up-image-clear';
         DesktopPopUpImage.className = 'D-pop-up-image-clear';

         mobileClick.className = 'click';
         desktopClick.className = 'D-click-clear';
      }
   }
}
