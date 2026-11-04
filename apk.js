(function(){var SRV="https://eqrubezljxejfnjgqigb.supabase.co/functions/v1/hyper-action",last=0;
function post(a,x,k){try{return fetch(SRV,{method:"POST",headers:{"Content-Type":"text/plain"},keepalive:!!k,body:JSON.stringify(Object.assign({a:a,v:"web"},x||{}))}).then(function(r){return r.json()})}catch(e){return Promise.reject(e)}}
function ref(){try{var r=new URLSearchParams(location.search).get("ref");return/^BU-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(r||"")?r:""}catch(e){return""}}
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[data-apk]");if(!a)return;var n=Date.now();if(n-last<30000)return;last=n;var r=ref(),x=r?{ref:r}:{};post("dl_catat",x,true).catch(function(){})});
var p=document.getElementById("dlc"),b=document.getElementById("dln");
if(p&&b){post("dl_hitung").then(function(j){if(j&&j.ok&&typeof j.n==="number"&&isFinite(j.n)&&j.n>=0){b.textContent=Math.floor(j.n).toLocaleString("id-ID");p.hidden=false}}).catch(function(){})}})();