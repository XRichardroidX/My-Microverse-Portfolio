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