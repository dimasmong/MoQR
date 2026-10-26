/* MoQR v1.0 — all QR generation runs locally in this browser. */
(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const messages = {
    en: {
      privacy:'PRIVACY FIRST',howLink:'How it works',eyebrow:'DESIGN IT. SCAN IT. SHARE IT.',headline1:'Make every scan',headline2:'a little more beautiful.',subheadline:'Create beautiful, reliable QR codes for everything that matters. Customize every detail, keep your data private, and download in seconds.',hero1:'Completely free',hero2:'Runs in your browser',hero3:'PNG & SVG downloads',workspace:'YOUR WORKSPACE',studioTitle:'QR Code Studio',typeTitle:'What are we creating?',typeSub:'Pick a type and fill in the details.',tabUrl:'Website',tabText:'Text',tabWifi:'Wi-Fi',tabContact:'Contact',tabEmail:'Email',tabWhatsapp:'WhatsApp',designTitle:'Make it your own',designSub:'Style your QR without compromising readability.',frontColor:'QR foreground',backColor:'Background',dotStyle:'Module style',correction:'Error correction',square:'Classic squares',rounded:'Soft rounded',dots:'Round dots',logoTitle:'Add a center logo',optional:'OPTIONAL',logoChoose:'Choose logo · PNG, JPG, WebP',remove:'Remove',logoHint:'Adding a logo automatically uses high error correction. Always test scanning.',contrastWarn:'These colors may be difficult to scan. Choose a darker foreground and lighter background.',previewTitle:'Your live preview',previewSub:'Changes appear automatically.',starting:'Generating preview…',ready:'Ready to scan',resolution:'Download resolution',downloadPng:'Download PNG',downloadSvg:'Download SVG',copyContent:'Copy QR content',privateNote:'Your QR content stays on your device. No uploads, no account, no tracking.',whyLabel:'WHY MOQR',whyTitle:"Everything you need.<br>Nothing you don't.",benefit1t:'Designed for your brand',benefit1d:'A polished QR code with colors and your own logo, no design skills needed.',benefit2t:'Private by design',benefit2d:'Everything is encoded on your device — including Wi-Fi passwords and contacts.',benefit3t:'Ready for anywhere',benefit3d:'Sharp SVG for print and crisp PNG for social media or everyday use.',faqLabel:'GOOD TO KNOW',faqTitle:'Frequently asked questions',faq1q:'Are MoQR codes free forever?',faq1a:'Yes. MoQR creates standard, static QR codes. You can download them freely without an account.',faq2q:'Will a QR code expire?',faq2a:'No. The QR image does not expire, but a linked website or other destination may stop working.',faq3q:'Can I add any logo and colors?',faq3a:'You can customize both. Very large logos or low-contrast colors may prevent scanning, so test with more than one camera before printing.',footerSlogan:'— made to be scanned.',footerPrivacy:'Built with care. Your data stays yours.',
      url:'Website URL',urlHint:'Use a full URL starting with https://',textContent:'Your text',ssid:'Wi-Fi network name (SSID)',password:'Wi-Fi password',security:'Security type',hidden:'Hidden network',contactName:'Full name',phone:'Phone number',company:'Organization (optional)',emailAddress:'Email address',emailSubject:'Subject (optional)',emailBody:'Message (optional)',waNumber:'WhatsApp number (country code included)',waMessage:'Prefilled message (optional)',requiredUrl:'Enter a valid http:// or https:// website URL.',requiredText:'Enter text to create a QR code.',requiredWifi:'Enter a Wi-Fi network name.',requiredContact:'Enter a contact name.',requiredEmail:'Enter a valid email address.',requiredWa:'Enter a WhatsApp phone number with country code.',qrTooBig:'Too much information for one QR code. Shorten the content.',qrError:'Unable to generate the QR code. Try shorter content.',unsafeContrast:'Low contrast — test scanning',readyLogo:'Ready — test scanning with a logo',ready:'Ready to scan',loading:'Preparing image…',pngDone:'PNG downloaded',svgDone:'SVG downloaded',copyDone:'QR content copied',copyFailed:'Could not copy automatically. Use a supported browser.',logoTooLarge:'Logo must be 2 MB or smaller.',logoInvalid:'Choose a PNG, JPG, or WebP logo.',logoReadError:'Could not read logo file.',downloadError:'Download failed. Try again.',example:'https://example.com',tipDemo:'Example link — replace it with your own before sharing',
      logoReady:'Logo added',placeholderText:'Enter text, notes, instructions…',placeholderUrl:'https://yourwebsite.com',placeholderSsid:'My Wi-Fi',placeholderPassword:'Network password',placeholderName:'Jane Doe',placeholderPhone:'+628123456789',placeholderCompany:'Your company',placeholderEmail:'hello@example.com',placeholderSubject:'Hello!',placeholderBody:'Your message…',placeholderWa:'628123456789',placeholderWaMessage:'Hi! I found your QR code.',none:'None / Open',authWpa:'WPA / WPA2 / WPA3',authWep:'WEP',on:'Yes',off:'No',missing:'Enter the details to preview your QR code.'
    },
    id: {
      privacy:'PRIVASI UTAMA',howLink:'Cara kerja',eyebrow:'DESAIN. PINDAI. BAGIKAN.',headline1:'Setiap QR Code',headline2:'tampil lebih berkesan.',subheadline:'Buat QR Code yang menarik dan mudah dipindai untuk berbagai kebutuhan. Sesuaikan desain, lindungi privasi, lalu unduh dalam hitungan detik.',hero1:'Gratis sepenuhnya',hero2:'Diproses di browser',hero3:'Unduh PNG & SVG',workspace:'RUANG KERJA',studioTitle:'Studio QR Code',typeTitle:'Mau bikin QR untuk apa?',typeSub:'Pilih jenis QR lalu isi informasinya.',tabUrl:'Website',tabText:'Teks',tabWifi:'Wi-Fi',tabContact:'Kontak',tabEmail:'Email',tabWhatsapp:'WhatsApp',designTitle:'Sesuaikan desain',designSub:'Atur tampilan QR tanpa mengorbankan keterbacaan.',frontColor:'Warna QR',backColor:'Warna latar',dotStyle:'Bentuk modul',correction:'Koreksi kesalahan',square:'Kotak klasik',rounded:'Kotak melengkung',dots:'Titik bulat',logoTitle:'Tambahkan logo di tengah',optional:'OPSIONAL',logoChoose:'Pilih logo · PNG, JPG, WebP',remove:'Hapus',logoHint:'Jika memakai logo, koreksi kesalahan otomatis menjadi tinggi. Tetap uji pemindaian.',contrastWarn:'Warna ini mungkin sulit dipindai. Gunakan warna QR gelap dan latar lebih terang.',previewTitle:'Pratinjau langsung',previewSub:'Perubahan tampil otomatis.',starting:'Membuat pratinjau…',ready:'Siap dipindai',resolution:'Resolusi unduhan',downloadPng:'Unduh PNG',downloadSvg:'Unduh SVG',copyContent:'Salin isi QR',privateNote:'Informasi QR tetap di perangkatmu. Tanpa unggah, akun, atau pelacakan.',whyLabel:'KENAPA MOQR',whyTitle:'Lengkap secukupnya.<br>Praktis sepenuhnya.',benefit1t:'Desain sesuai identitas',benefit1d:'Atur warna dan tambahkan logo agar QR tampil profesional.',benefit2t:'Privasi sejak awal',benefit2d:'Semua diproses di perangkat, termasuk kata sandi Wi-Fi dan informasi kontak.',benefit3t:'Siap untuk semua kebutuhan',benefit3d:'SVG tajam untuk cetak dan PNG jernih untuk media sosial.',faqLabel:'PERLU DIKETAHUI',faqTitle:'Pertanyaan umum',faq1q:'Apakah MoQR gratis selamanya?',faq1a:'Ya. MoQR menghasilkan QR statis standar yang bebas diunduh tanpa akun.',faq2q:'Apakah QR Code bisa kedaluwarsa?',faq2a:'Gambar QR tidak memiliki masa berlaku, tetapi alamat atau layanan tujuan bisa berhenti berfungsi.',faq3q:'Bolehkah pakai semua warna dan logo?',faq3a:'Bisa diatur, tetapi warna yang kurang kontras atau logo terlalu besar bisa menyulitkan pemindaian. Uji dengan lebih dari satu kamera sebelum mencetak.',footerSlogan:'— dibuat agar mudah dipindai.',footerPrivacy:'Dibuat dengan perhatian. Datamu tetap milikmu.',
      url:'Alamat website (URL)',urlHint:'Gunakan URL lengkap yang diawali https://',textContent:'Isi teks',ssid:'Nama jaringan Wi-Fi (SSID)',password:'Kata sandi Wi-Fi',security:'Jenis keamanan',hidden:'Jaringan tersembunyi',contactName:'Nama lengkap',phone:'Nomor telepon',company:'Organisasi (opsional)',emailAddress:'Alamat email',emailSubject:'Subjek (opsional)',emailBody:'Pesan (opsional)',waNumber:'Nomor WhatsApp (dengan kode negara)',waMessage:'Pesan awal (opsional)',requiredUrl:'Masukkan URL website yang valid dengan http:// atau https://.',requiredText:'Isi teks untuk membuat QR.',requiredWifi:'Masukkan nama jaringan Wi-Fi.',requiredContact:'Masukkan nama kontak.',requiredEmail:'Masukkan alamat email yang valid.',requiredWa:'Masukkan nomor WhatsApp beserta kode negara.',qrTooBig:'Informasi terlalu panjang untuk satu QR. Persingkat isinya.',qrError:'Gagal membuat QR. Coba isi yang lebih pendek.',unsafeContrast:'Kontras rendah — uji pemindaian',readyLogo:'Siap — uji pemindaian dengan logo',ready:'Siap dipindai',loading:'Menyiapkan gambar…',pngDone:'PNG berhasil diunduh',svgDone:'SVG berhasil diunduh',copyDone:'Isi QR tersalin',copyFailed:'Tidak bisa menyalin otomatis. Gunakan browser yang mendukung.',logoTooLarge:'Ukuran logo maksimal 2 MB.',logoInvalid:'Pilih logo PNG, JPG, atau WebP.',logoReadError:'Gagal membaca file logo.',downloadError:'Gagal mengunduh. Coba lagi.',example:'https://example.com',tipDemo:'Ini link contoh — ganti dengan alamatmu sebelum dibagikan',logoReady:'Logo ditambahkan',placeholderText:'Tulis pesan, catatan, instruksi…',placeholderUrl:'https://websitekamu.com',placeholderSsid:'Wi-Fi Rumah',placeholderPassword:'Kata sandi jaringan',placeholderName:'Budi Santoso',placeholderPhone:'+628123456789',placeholderCompany:'Nama perusahaan',placeholderEmail:'halo@example.com',placeholderSubject:'Halo!',placeholderBody:'Isi pesan…',placeholderWa:'628123456789',placeholderWaMessage:'Halo! Saya dapat QR kamu.',none:'Tidak ada / Terbuka',authWpa:'WPA / WPA2 / WPA3',authWep:'WEP',on:'Ya',off:'Tidak',missing:'Isi informasi untuk menampilkan QR.'
    }
  };
  const state = { language:'en', type:'url', data:{url:{url:'https://example.com'},text:{text:''},wifi:{ssid:'',password:'',security:'WPA',hidden:'false'},contact:{name:'',phone:'',email:'',company:''},email:{email:'',subject:'',body:''},whatsapp:{number:'',message:''}}, logo:null, image:null, qr:null, payload:'', svg:'', valid:false };
  try { if (localStorage.getItem('moqr-language') === 'id') state.language = 'id'; } catch(e){}
  const t = (key) => messages[state.language][key] ?? messages.en[key] ?? key;
  const safeHex = (value) => /^#[0-9a-f]{6}$/i.test(value) ? value : '#000000';
  const themeIsDark = () => document.documentElement.dataset.theme === 'dark';
  let debounce, toastTimer, previousEcc = 'Q';
  function toast(text) { const el=$('toast'); el.textContent=text; el.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.classList.remove('show'),2800); }
  function applyLanguage() {
    document.documentElement.lang=state.language;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key=el.dataset.i18n;
      if(key==='whyTitle')el.innerHTML=t(key); else el.textContent=t(key);
    });
    $('language').value=state.language;
    renderFields();
    applyThemeText();
    if(state.valid) setStatus(statusMessage(), false);
    else if(state.qr===null) setStatus(t('missing'),true);
    try{localStorage.setItem('moqr-language',state.language)}catch(e){}
  }
  function applyThemeText(){const dark=themeIsDark();$('themeText').textContent= dark ? (state.language==='id'?'Terang':'Light') : (state.language==='id'?'Gelap':'Dark');$('themeSymbol').textContent=dark?'☼':'☾';$('themeToggle').setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');}
  function toggleTheme(){const next=themeIsDark()?'light':'dark';document.documentElement.dataset.theme=next;applyThemeText();try{localStorage.setItem('moqr-theme',next)}catch(e){}}
  function makeField(key,label,type='text',placeholder='',full=false,extra='') {
    let html='';
    if(type==='textarea') html=`<textarea id="field_${key}" placeholder="${placeholder}" rows="3"></textarea>`;
    else if(type==='select') html=`<select id="field_${key}">${extra}</select>`;
    else html=`<input id="field_${key}" type="${type}" placeholder="${placeholder}" ${type==='password'?'autocomplete="off"':''} />`;
    return `<div class="field ${full?'full':''}"><label for="field_${key}">${label}</label>${html}</div>`;
  }
  function renderFields(){
    const root=$('fieldsArea'); let html=''; const ty=state.type;
    if(ty==='url') html=makeField('url',t('url'),'url',t('placeholderUrl'),true);
    if(ty==='text') html=makeField('text',t('textContent'),'textarea',t('placeholderText'),true);
    if(ty==='wifi') html=makeField('ssid',t('ssid'),'text',t('placeholderSsid'),true)+makeField('password',t('password'),'password',t('placeholderPassword'),true)+makeField('security',t('security'),'select','',false,`<option value="WPA">${t('authWpa')}</option><option value="WEP">${t('authWep')}</option><option value="nopass">${t('none')}</option>`)+makeField('hidden',t('hidden'),'select','',false,`<option value="false">${t('off')}</option><option value="true">${t('on')}</option>`);
    if(ty==='contact') html=makeField('name',t('contactName'),'text',t('placeholderName'),true)+makeField('phone',t('phone'),'tel',t('placeholderPhone'))+makeField('email',t('emailAddress'),'email',t('placeholderEmail'))+makeField('company',t('company'),'text',t('placeholderCompany'),true);
    if(ty==='email') html=makeField('email',t('emailAddress'),'email',t('placeholderEmail'),true)+makeField('subject',t('emailSubject'),'text',t('placeholderSubject'),true)+makeField('body',t('emailBody'),'textarea',t('placeholderBody'),true);
    if(ty==='whatsapp') html=makeField('number',t('waNumber'),'tel',t('placeholderWa'),true)+makeField('message',t('waMessage'),'textarea',t('placeholderWaMessage'),true);
    root.innerHTML=html;
    Object.keys(state.data[ty]).forEach(key=>{const input=$('field_'+key);if(input)input.value=state.data[ty][key];});
    if(ty==='wifi') {const pass=$('field_password');pass.disabled=state.data.wifi.security==='nopass';}
    root.querySelectorAll('input,textarea,select').forEach(input=>{
      input.addEventListener('input',onField);
      input.addEventListener('change',onField);
    });
  }
  function onField(event){const key=event.currentTarget.id.slice(6);state.data[state.type][key]=event.currentTarget.value;
    if(state.type==='wifi' && key==='security')$('field_password').disabled=state.data.wifi.security==='nopass';
    schedule();
  }
  const wifiEscape=s=>String(s).replace(/\\/g,'\\\\').replace(/([;,:" ])/g,(m)=>m===' '?m:'\\'+m);
  const cardEscape=s=>String(s).replace(/\\/g,'\\\\').replace(/\r?\n/g,'\\n').replace(/([;,])/g,'\\$1');
  function payloadForCurrent() {
    const d=state.data[state.type]; let value='';
    switch(state.type){
      case 'url': {
        value=d.url.trim();
        try{const u=new URL(value);if(!['http:','https:'].includes(u.protocol)||!u.hostname)throw Error();}catch{throw new Error(t('requiredUrl'));}
        break;
      }
      case 'text':value=d.text;if(!value.trim())throw new Error(t('requiredText'));break;
      case 'wifi':if(!d.ssid.trim())throw new Error(t('requiredWifi'));value=`WIFI:T:${d.security};S:${wifiEscape(d.ssid)};${d.security==='nopass'?'':`P:${wifiEscape(d.password)};`}H:${d.hidden};;`;break;
      case 'contact':if(!d.name.trim())throw new Error(t('requiredContact'));value=['BEGIN:VCARD','VERSION:3.0',`FN:${cardEscape(d.name)}`];if(d.phone.trim())value.push(`TEL:${cardEscape(d.phone.trim())}`);if(d.email.trim())value.push(`EMAIL:${cardEscape(d.email.trim())}`);if(d.company.trim())value.push(`ORG:${cardEscape(d.company.trim())}`);value.push('END:VCARD');value=value.join('\r\n');break;
      case 'email':{const mail=d.email.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail))throw new Error(t('requiredEmail'));value=`mailto:${mail}`;const params=new URLSearchParams();if(d.subject)params.set('subject',d.subject);if(d.body)params.set('body',d.body);if([...params].length)value+='?'+params.toString();break;}
      case 'whatsapp':{const digits=d.number.replace(/[^0-9]/g,'');if(digits.length<7||digits.length>15||digits.startsWith('0'))throw new Error(t('requiredWa'));value=`https://wa.me/${digits}`;if(d.message)value+='?text='+encodeURIComponent(d.message);break;}
    }
    return value;
  }
  function setStatus(str,err=false){const el=$('qrStatus');el.classList.toggle('is-error',!!err);el.querySelector('span:last-child').textContent=str;}
  function colorsWarn(){
    const rgb=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16)/255);
    const luminance=s=>{const v=rgb(s).map(a=>a<=.04045?a/12.92:((a+.055)/1.055)**2.4);return .2126*v[0]+.7152*v[1]+.0722*v[2]};
    const f=luminance(safeHex($('fgColor').value)),b=luminance(safeHex($('bgColor').value));
    const ratio=(Math.max(f,b)+.05)/(Math.min(f,b)+.05);
    const warning=ratio<4.5 || f>b;
    $('contrastWarning').hidden=!warning;
    return warning;
  }
  function statusMessage(){return colorsWarn()?t('unsafeContrast'):state.logo?t('readyLogo'):t('ready');}
  function svgFromQr(qr,opts) {
    const {fg,bg,pattern,logo}=opts,n=qr.getModuleCount(),pad=4,total=n+pad*2;
    let shapes='';
    for(let y=0;y<n;y++)for(let x=0;x<n;x++)if(qr.isDark(y,x)){
      const xx=x+pad,yy=y+pad;
      if(pattern==='dots') shapes+=`<circle cx="${xx+.5}" cy="${yy+.5}" r=".44"/>`;
      else if(pattern==='rounded')shapes+=`<rect x="${xx+.06}" y="${yy+.06}" width=".88" height=".88" rx=".22"/>`;
      else shapes+=`<rect x="${xx}" y="${yy}" width="1" height="1"/>`;
    }
    let logos='';
    if(logo){const sz=n*.195,x=pad+(n-sz)/2,y=pad+(n-sz)/2,p=.85;
      logos=`<rect x="${x-p}" y="${y-p}" width="${sz+2*p}" height="${sz+2*p}" rx="1.2" fill="#fff"/><image href="${logo}" x="${x}" y="${y}" width="${sz}" height="${sz}" preserveAspectRatio="xMidYMid meet"/>`;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${total} ${total}" width="1024" height="1024" shape-rendering="${pattern==='square'?'crispEdges':'geometricPrecision'}"><rect width="${total}" height="${total}" fill="${bg}"/><g fill="${fg}">${shapes}</g>${logos}</svg>`;
  }
  function options(){return {fg:safeHex($('fgColor').value),bg:safeHex($('bgColor').value),pattern:$('pattern').value,logo:state.logo};}
  function render(){
    if(!window.MoQREngine){setStatus('QR engine unavailable',true);return;}
    try{
      state.payload=payloadForCurrent();
      let lvl=state.logo?'H':$('ecc').value;
      const qr=new MoQREngine.QRCode(-1,MoQREngine.ErrorLevel[lvl]);qr.addData(state.payload);qr.make();
      state.qr=qr; state.svg=svgFromQr(qr,options());state.valid=true;
      $('qrPreview').innerHTML=state.svg;
      setStatus(statusMessage(),false);
      if(state.type==='url' && state.data.url.url==='https://example.com')setStatus(t('tipDemo'),false);
      $('downloadPng').disabled=false;$('downloadSvg').disabled=false;$('copyPayload').disabled=false;
    }catch(err){
      state.valid=false;state.qr=null;state.svg='';state.payload='';$('downloadPng').disabled=true;$('downloadSvg').disabled=true;$('copyPayload').disabled=true;
      $('qrPreview').innerHTML=`<div class="preview-placeholder"><div class="mini-qr">▦</div><span>${t('missing')}</span></div>`;
      const txt=err&&err.message;
      setStatus(!txt?t('qrError'):/code length overflow|code length/i.test(txt)?t('qrTooBig'):txt,true);
    }
  }
  function schedule(){clearTimeout(debounce);debounce=setTimeout(render,110);}
  function downloadBlob(blob,filename){const link=document.createElement('a');const url=URL.createObjectURL(blob);link.href=url;link.download=filename;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),5000);}
  function getFilename(extension){const stamp=new Date().toISOString().slice(0,10);return `moqr-${state.type}-${stamp}.${extension}`;}
  function exportSvg(){if(!state.valid)return;const xml='<?xml version="1.0" encoding="UTF-8"?>\n'+state.svg;downloadBlob(new Blob([xml],{type:'image/svg+xml;charset=utf-8'}),getFilename('svg'));toast(t('svgDone'));}
  function renderCanvas(size){
    const canvas=document.createElement('canvas');canvas.width=size;canvas.height=size;
    const ctx=canvas.getContext('2d');if(!ctx)throw new Error('Canvas unavailable');const qr=state.qr;
    const n=qr.getModuleCount(),pad=4,cell=size/(n+pad*2),{fg,bg,pattern}=options();
    ctx.fillStyle=bg;ctx.fillRect(0,0,size,size);ctx.fillStyle=fg;
    for(let y=0;y<n;y++)for(let x=0;x<n;x++)if(qr.isDark(y,x)){
      const left=(x+pad)*cell,top=(y+pad)*cell;
      if(pattern==='dots'){ctx.beginPath();ctx.arc(left+.5*cell,top+.5*cell,cell*.44,0,Math.PI*2);ctx.fill();}
      else if(pattern==='rounded') {const inset=cell*.06;ctx.beginPath();ctx.roundRect(left+inset,top+inset,cell*.88,cell*.88,cell*.22);ctx.fill();}
      else ctx.fillRect(left,top,cell+.08,cell+.08);
    }
    return {canvas,ctx,n,pad,cell};
  }
  function loadImage(src){return new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=reject;img.src=src;});}
  async function exportPng(){
    if(!state.valid)return;
    const btn=$('downloadPng');btn.disabled=true;
    try{
      const size=Number($('size').value);let {canvas,ctx,n,pad,cell}=renderCanvas(size);
      if(state.logo){
        const img=state.image || await loadImage(state.logo);const sz=n*.195*cell,x=(pad+(n-n*.195)/2)*cell,y=x,padLogo=.85*cell;
        ctx.fillStyle='#ffffff';ctx.beginPath();ctx.roundRect(x-padLogo,y-padLogo,sz+2*padLogo,sz+2*padLogo,Math.max(3,1.2*cell));ctx.fill();
        const ratio=Math.min(sz/img.width,sz/img.height);const w=img.width*ratio,h=img.height*ratio;ctx.drawImage(img,x+(sz-w)/2,y+(sz-h)/2,w,h);
      }
      const blob=await new Promise((resolve,reject)=>canvas.toBlob(x=>x?resolve(x):reject(Error('Canvas export failed')),'image/png'));
      downloadBlob(blob,getFilename('png'));toast(t('pngDone'));
    }catch(err){console.error(err);toast(t('downloadError'));}
    finally{btn.disabled=!state.valid;}
  }
  async function logoHandler(event){
    const file=event.target.files&&event.target.files[0];if(!file)return;
    if(!['image/png','image/jpeg','image/webp'].includes(file.type)){toast(t('logoInvalid'));event.target.value='';return;}
    if(file.size>2*1024*1024){toast(t('logoTooLarge'));event.target.value='';return;}
    try{
      const data=await new Promise((resolve,reject)=>{const rd=new FileReader();rd.onload=()=>resolve(rd.result);rd.onerror=reject;rd.readAsDataURL(file);});
      const img=await loadImage(data);if(img.width<1||img.height<1)throw Error('Invalid image');
      state.logo=data;state.image=img;previousEcc=$('ecc').value;$('ecc').value='H';$('ecc').disabled=true;$('logoLabel').textContent=file.name;$('removeLogo').hidden=false;toast(t('logoReady'));render();
    }catch(err){toast(t('logoReadError'));}
  }
  function attach(){
    $('language').addEventListener('change',e=>{state.language=e.target.value;applyLanguage();render();});
    $('themeToggle').addEventListener('click',toggleTheme);
    document.querySelectorAll('.type-tab').forEach(btn=>btn.addEventListener('click',()=>{
      state.type=btn.dataset.type;document.querySelectorAll('.type-tab').forEach(item=>{const on=item===btn;item.classList.toggle('active',on);item.setAttribute('aria-selected',String(on));});renderFields();render();
    }));
    for(const id of ['fgColor','bgColor'])$(id).addEventListener('input',()=>{$(id==='fgColor'?'fgHex':'bgHex').textContent=$(id).value.toUpperCase();schedule();});
    for(const id of ['pattern','ecc'])$(id).addEventListener('change',()=>{if(id==='ecc'&&!state.logo)previousEcc=$('ecc').value;render();});
    $('logoUpload').addEventListener('change',logoHandler);
    $('removeLogo').addEventListener('click',()=>{state.logo=null;state.image=null;$('ecc').disabled=false;$('ecc').value=previousEcc;$('logoUpload').value='';$('logoLabel').textContent=t('logoChoose');$('removeLogo').hidden=true;render();});
    $('downloadSvg').addEventListener('click',exportSvg);
    $('downloadPng').addEventListener('click',exportPng);
    $('copyPayload').addEventListener('click',async()=>{if(!state.valid)return;try{await navigator.clipboard.writeText(state.payload);toast(t('copyDone'));}catch(e){toast(t('copyFailed'));}});
  }
  attach();applyLanguage();render();
  window.__moqrTest={ getPayload:()=>state.payload,getModules:()=>state.qr?.getModuleCount(),getValid:()=>state.valid };
})();
