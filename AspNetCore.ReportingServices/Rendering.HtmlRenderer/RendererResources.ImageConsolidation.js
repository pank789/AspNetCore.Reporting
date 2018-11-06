﻿function Microsoft_ReportingServices_HTMLRenderer_ScaleImageConsolidation(n,t){var c=document,y,p,w,l,a,r,h,b,o,s,k,u,rt,ut,g;t&&(c=document.getElementById(t),c||(c=document));var nt=Microsoft_ReportingServices_HTMLRenderer_IsStandardsMode(),ft=Microsoft_ReportingServices_HTMLRenderer_IsIE(),et=!Microsoft_ReportingServices_HTMLRenderer_IsIE8OrLater(),v="imgConImageIdsTag";if(n&&(v=n+v),y=document.getElementById(v),y&&(p=y.getAttribute("ids"),p))for(w=p.split(","),l=0;l<w.length;l++)if(a=w[l],a&&a!=""&&(r=document.getElementById(a),r)){if(h=r.getAttribute("imgConImage"),!h)continue;var f=0,e=0,tt=h=="Fit"||h=="Clip";if(tt&&(f=r.parentNode.clientWidth,e=r.parentNode.clientHeight,nt&&(f=f==0&&r.getAttribute("origWidth")?r.getAttribute("origWidth"):f+"px",e=e==0&&r.getAttribute("origHeight")?r.getAttribute("origHeight"):e+"px")),ft?nt&&(r.style.position="relative",et&&tt&&(b=Microsoft_ReportingServices_HTMLRenderer_CalculateOffset(c,r.parentNode),r.setAttribute("origLeft",b.left),r.setAttribute("origTop",b.top))):r.style.position="relative",h=="Fit"){if(o=parseFloat(e),s=parseFloat(f),o=Microsoft_ReportingServices_HTMLRenderer_SubtractVerticalPaddings(r.parentNode,o),o<0&&(o=1),s=Microsoft_ReportingServices_HTMLRenderer_SubtractHorizontalPaddings(r.parentNode,s),s<0&&(s=1),k=r.getElementsByTagName("IMG"),k.length==0)continue;u=k[0],r.style.width=r.getAttribute("imgConWidth")+"px",r.style.height=r.getAttribute("imgConHeight")+"px",r.removeAttribute("imgConWidth"),r.removeAttribute("imgConHeight");var it=s/parseInt(r.style.width),d=o/parseInt(r.style.height),ot=it*parseInt(u.width),st=d*parseInt(u.height);if(u.width=ot,u.height=st,r.style.width=s+"px",r.style.height=o+"px",rt=parseInt(u.style.top)*d,ut=parseInt(u.style.left)*it,u.style.top=rt+"px",u.style.left=ut+"px",g=r.getElementsByTagName("MAP"),g.length==0)continue;Microsoft_ReportingServices_HTMLRenderer_UpdateMap(g[0],d)}else h=="Clip"&&(r.style.height=e,r.style.width=f)}}function Microsoft_ReportingServices_HTMLRenderer_UpdateMap(n,t){if(n.areas)for(var i=0;i<n.areas.length;i++)Microsoft_ReportingServices_HTMLRenderer_UpdateArea(n.areas[i],t)}function Microsoft_ReportingServices_HTMLRenderer_UpdateArea(n,t){if(n.coords){for(var u=n.coords.split(","),r=0,i="",f=!0;r<u.length-1;)f||(i+=","),i+=u[r],i+=",",i+=parseInt(u[r+1])*t,f=!1,r+=2;r<u.length&&(i+=",",i+=u[r]),n.coords=i}}function Microsoft_ReportingServices_HTMLRenderer_ScaleImageUpdateZoom(n,t,i){var u,f,y,e,c,l,a,o,s,r,h,v;if(Microsoft_ReportingServices_HTMLRenderer_IsStandardsMode()){if(!Microsoft_ReportingServices_HTMLRenderer_IsIE()||Microsoft_ReportingServices_HTMLRenderer_IsIE8OrLater())return}else return;if(u=Microsoft_ReportingServices_HTMLRenderer_CalculateZoom(i),f=document,t&&(f=document.getElementById(t),f||(f=document)),y=f,e="imgConImageIdsTag",n&&(e=n+e),c=document.getElementById(e),c&&(l=c.getAttribute("ids"),l))for(a=l.split(","),o=0;o<a.length;o++)s=a[o],s&&s!=""&&(r=document.getElementById(s),r&&(h=r.getAttribute("imgConImage"),(h=="Fit"||h=="AutoSize"||h=="Clip")&&(u!=1?(r.style.position=="relative"&&(r.style.position="absolute"),v=Microsoft_ReportingServices_HTMLRenderer_CalculateOffset(y,r.parentNode),r.style.left=v.left*u+"px",r.style.top=v.top*u+"px",r.style.zoom=u):(r.style.position=="absolute"&&(r.style.position="relative"),r.style.left="auto",r.style.top="auto",r.style.zoom="normal"))))}function CalculateDocumentOffset(n){if(!n||!n.ownerDocument)throw Error.argumentNull("element");var r=n.getBoundingClientRect(),u=n.ownerDocument,t=u.body,i=u.documentElement,f=i.clientTop||t.clientTop||0,e=i.clientLeft||t.clientLeft||0,o=r.top+(self.pageYOffset||i.scrollTop||t.scrollTop||0)-f,s=r.left+(self.pageXOffset||i.scrollLeft||t.scrollLeft||0)-e;return{top:o,left:s}}function Microsoft_ReportingServices_HTMLRenderer_ScaleImageForFit(n,t){var l=document,c,a,v,h,r,u,f,i,s,e,o;if(t&&(l=document.getElementById(t),l||(l=document)),c="imgFitDivIdsTag",n&&(c=n+c),a=document.getElementById(c),a&&(v=a.getAttribute("ids"),v)){for(h=v.split(","),u=0;u<h.length;u++)if(f=h[u],f&&f!=""&&(i=document.getElementById(f),i)){if(s=i.getElementsByTagName("IMG"),s.length==0)continue;e=s[0],r=i.parentNode.clientWidth,r=Microsoft_ReportingServices_HTMLRenderer_SubtractHorizontalPaddings(i.parentNode,r),r<0&&(r=1),e.width=r,e.width!=r&&(e.style.width=r+"px")}for(u=0;u<h.length;u++)if(f=h[u],f&&f!=""&&(i=document.getElementById(f),i)){if(s=i.getElementsByTagName("IMG"),s.length==0)continue;e=s[0],o=i.parentNode.clientHeight,o=Microsoft_ReportingServices_HTMLRenderer_SubtractVerticalPaddings(i.parentNode,o),o<0&&(o=1),e.height=o,e.height!=o&&(e.style.height=o+"px")}}}