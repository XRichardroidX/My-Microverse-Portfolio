function ResponsiveMenuForMobile(){
   let x = document.getElementById('my-mobile-head');
   let y = document.getElementById('my-header-items');
   let z1 = document.getElementById('my-header1');
   let z2 = document.getElementById('my-header2');
   let z3 = document.getElementById('my-header3');
   let B = document.getElementById('my-bd');

   if(x.className === 'mobile-header' && y.className === 'header-items'){
    x.className = 'mobile-headerr';
    y.className = 'header-itemsr';
    z1.className = 'headerr';
    z2.className = 'headerr';
    z3.className = 'headerr';
    B.className = 'bdr';
   }
   else{
    x.className = 'mobile-header';
    y.className = 'header-items';
    z1.className = 'header';
    z2.className = 'header';
    z3.className = 'header';
    B.className = 'bd';
   }
}

function OptionClick(){
   let x = document.getElementById('my-mobile-head');
   let y = document.getElementById('my-header-items');
   let z1 = document.getElementById('my-header1');
   let z2 = document.getElementById('my-header2');
   let z3 = document.getElementById('my-header3');
   let B = document.getElementById('my-bd');
   
      x.className = 'mobile-header';
      y.className = 'header-items';
      z1.className = 'header';
      z2.className = 'header';
      z3.className = 'header';
      B.className = 'bd';
}