javascript:(function(){loadJS=function(){s=document.createElement('SCRIPT');s.type='text/javascript';s.src='http://eriwen.com/js/stacktrace.js';document.getElementsByTagName('head')[0].appendChild(s);};alertTrace=function(){alert(printStackTrace().join('\n'))};attachToWinError=function(){window.onerror=alertTrace};attachToCustomFunc=function(fn){eval('_old_'+fn+'='+fn+';'+fn+'=function(args){alertTrace();_old_'+fn+'.call(this,args);}')};c=document.createElement('SPAN');cs=c.style;cs.position='absolute';cs.top='0';cs.right='0';cs.backgroundColor='#ddf';t=document.createTextNode('stacktrace.js:');c.appendChild(t);b3=document.createElement('INPUT');b3.type='button';b3.value='Load';b3.onclick=loadJS;c.appendChild(b3);b1=document.createElement('INPUT');b1.type='button';b1.value='window.onerror';b1.onclick=attachToWinError;c.appendChild(b1);i=document.createElement('INPUT');i.type='text';c.appendChild(i);b2=document.createElement('INPUT');b2.type='button';b2.value='Custom';b2.onclick=function(){attachToCustomFunc(i.value)};c.appendChild(b2);document.body.appendChild(c);})();