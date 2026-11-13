/* Overseas Highway HealthEd — language selector and brand shared across pages */
(()=>{'use strict';
const choices=[['en','English'],['bn','বাংলা'],['ar','العربية'],['hi','हिन्दी']];
const dict={
'Home':['Home','হোম','الرئيسية','होम'],
'Universities':['Universities','বিশ্ববিদ্যালয়','الجامعات','विश्वविद्यालय'],
'Programmes':['Programmes','প্রোগ্রামসমূহ','البرامج','प्रोग्राम'],
'Destinations':['Destinations','গন্তব্য','الوجهات','गंतव्य'],
'Why HealthEd':['Why HealthEd','কেন HealthEd','لماذا هيلث إيد','HealthEd क्यों'],
'Admission Process':['Admission Process','ভর্তির প্রক্রিয়া','خطوات القبول','प्रवेश प्रक्रिया'],
'FAQs':['FAQs','প্রশ্নোত্তর','الأسئلة الشائعة','सवाल-जवाब'],
'Get Free Guidance ↗':['Get Free Guidance ↗','বিনামূল্যে পরামর্শ নিন ↗','احصل على استشارة مجانية ↗','मुफ़्त मार्गदर्शन पाएं ↗'],
'Explore Universities':['Explore Universities','বিশ্ববিদ্যালয় দেখুন','استكشف الجامعات','विश्वविद्यालय देखें'],
'Medical & Healthcare University Directory':['Medical & Healthcare University Directory','মেডিকেল ও হেলথকেয়ার বিশ্ববিদ্যালয় তালিকা','دليل جامعات الطب والرعاية الصحية','मेडिकल व हेल्थकेयर विश्वविद्यालय'],
'Discover the right university for your healthcare future.':['Discover the right university for your healthcare future.','আপনার স্বাস্থ্যসেবা ক্যারিয়ারের জন্য সঠিক বিশ্ববিদ্যালয় খুঁজুন।','اكتشف الجامعة المناسبة لمستقبلك في الرعاية الصحية.','अपने हेल्थकेयर भविष्य के लिए सही विश्वविद्यालय चुनें।'],
'Browse Universities':['Browse Universities','বিশ্ববিদ্যালয় দেখুন','تصفح الجامعات','विश्वविद्यालय देखें'],
'Browse by Programme →':['Browse by Programme →','প্রোগ্রাম অনুযায়ী দেখুন →','تصفح حسب البرنامج →','प्रोग्राम के अनुसार देखें →'],
'Medical universities':['Medical universities','মেডিকেল বিশ্ববিদ্যালয়','الجامعات الطبية','मेडिकल विश्वविद्यालय'],
'Browse Universities':['Browse Universities','বিশ্ববিদ্যালয় অনুসন্ধান','تصفح الجامعات','विश्वविद्यालय देखें'],
'Academic Eligibility':['Academic Eligibility','ভর্তির যোগ্যতা','الأهلية الأكاديمية','शैक्षणिक योग्यता'],
'Tuition & First Payment':['Tuition & First Payment','টিউশন ফি ও প্রথম পেমেন্ট','الرسوم والدفعة الأولى','ट्यूशन फ़ीस व पहली भुगतान'],
'Clinical Recognition':['Clinical Recognition','পেশাগত স্বীকৃতি','الاعتراف المهني','पेशेवर मान्यता'],
'Browse by university':['Browse by university','বিশ্ববিদ্যালয় অনুযায়ী','حسب الجامعة','विश्वविद्यालय के अनुसार'],
'Course explorer':['Course explorer','কোর্স অনুসন্ধান','مستكشف التخصصات','कोर्स एक्सप्लोरर'],
'Choose your medical study level.':['Choose your medical study level.','আপনার মেডিকেল শিক্ষার স্তর বেছে নিন।','اختر المستوى الدراسي الطبي.','अपना मेडिकल अध्ययन स्तर चुनें।'],
'Study Guide':['Study Guide','স্টাডি গাইড','دليل الدراسة','अध्ययन गाइड'],
'Apply Through OH ↗':['Apply Through OH ↗','Overseas Highway দিয়ে আবেদন ↗','قدم عبر أوفرسيز هايواي ↗','Overseas Highway से आवेदन ↗'],
'Apply through OH ↗':['Apply through OH ↗','Overseas Highway দিয়ে আবেদন ↗','قدم عبر أوفرسيز هايواي ↗','Overseas Highway से आवेदन ↗'],
'Apply Through Overseas Highway ↗':['Apply Through Overseas Highway ↗','Overseas Highway-এর মাধ্যমে আবেদন ↗','قدم عبر أوفرسيز هايواي ↗','Overseas Highway से आवेदन ↗'],
'Check Eligibility & Apply ↗':['Check Eligibility & Apply ↗','যোগ্যতা যাচাই ও আবেদন ↗','تحقق من الأهلية وقدم ↗','योग्यता जांचें और आवेदन करें ↗'],
'Check Eligibility / Get Fee Quotation ↗':['Check Eligibility / Get Fee Quotation ↗','যোগ্যতা যাচাই / ফি জানুন ↗','تحقق من الأهلية / احصل على الرسوم ↗','योग्यता जांचें / फ़ीस जानें ↗'],
'Check Eligibility & Request Fees ↗':['Check Eligibility & Request Fees ↗','যোগ্যতা ও ফি যাচাই করুন ↗','تحقق من الأهلية والرسوم ↗','पात्रता और फ़ीस जांचें ↗'],
'Request Fee Quotation ↗':['Request Fee Quotation ↗','ফি কোটেশন নিন ↗','اطلب عرض الرسوم ↗','फ़ीस कोटेशन पाएं ↗'],
'Complete programme guide':['Complete programme guide','সম্পূর্ণ প্রোগ্রাম গাইড','دليل البرنامج الكامل','पूरा प्रोग्राम गाइड'],
'Explore programme details, requirements and fees.':['Explore programme details, requirements and fees.','প্রোগ্রামের বিস্তারিত, যোগ্যতা ও খরচ জানুন।','تعرف على تفاصيل البرنامج والشروط والرسوم.','प्रोग्राम विवरण, योग्यता और फ़ीस देखें।'],
'International tuition and fees':['International tuition and fees','আন্তর্জাতিক শিক্ষার্থীদের ফি','الرسوم للطلاب الدوليين','अंतरराष्ट्रीय छात्रों की फ़ीस'],
'Overview':['Overview','পরিচিতি','نظرة عامة','परिचय'],
'Fees':['Fees','খরচ','الرسوم','फ़ीस'],
'Entry':['Entry','ভর্তির যোগ্যতা','شروط القبول','प्रवेश योग्यता'],
'Career':['Career','ক্যারিয়ার','المهن','करियर'],
'Apply':['Apply','আবেদন','التقديم','आवेदन'],
'Level':['Level','শিক্ষার স্তর','المستوى','स्तर'],
'Duration':['Duration','মেয়াদ','المدة','अवधि'],
'Institution':['Institution','বিশ্ববিদ্যালয়','المؤسسة','संस्थान'],
'Intake':['Intake','ইনটেক','موعد القبول','इंटेक'],
'Study mode':['Study mode','পড়াশোনার ধরন','نظام الدراسة','अध्ययन का प्रकार'],
'Ready to apply?':['Ready to apply?','আবেদন করতে প্রস্তুত?','هل أنت مستعد للتقديم؟','आवेदन के लिए तैयार हैं?'],
'About This Programme':['About This Programme','প্রোগ্রাম সম্পর্কে','حول البرنامج','प्रोग्राम के बारे में'],
'International Fee Breakdown':['International Fee Breakdown','আন্তর্জাতিক ফি বিস্তারিত','تفاصيل الرسوم الدولية','अंतरराष्ट्रीय फ़ीस विवरण'],
'Entry Requirements & Admissions':['Entry Requirements & Admissions','ভর্তির যোগ্যতা ও আবেদন','شروط القبول والتسجيل','प्रवेश आवश्यकताएँ'],
'Future Career & Further Study':['Future Career & Further Study','ক্যারিয়ার ও উচ্চশিক্ষা','فرص العمل والدراسة العليا','करियर और उच्च अध्ययन'],
'Frequently Asked Questions':['Frequently Asked Questions','সচরাচর প্রশ্নোত্তর','الأسئلة الشائعة','अक्सर पूछे जाने वाले सवाल'],
'Programme Overview':['Programme Overview','প্রোগ্রামের পরিচিতি','نظرة عامة على البرنامج','प्रोग्राम परिचय'],
'Programme Structure':['Programme Structure','কোর্স কাঠামো','هيكل البرنامج','प्रोग्राम संरचना'],
'Career Opportunities':['Career Opportunities','ক্যারিয়ারের সুযোগ','الفرص المهنية','करियर के अवसर'],
'Documents to Prepare':['Documents to Prepare','প্রয়োজনীয় কাগজপত্র','المستندات المطلوبة','ज़रूरी दस्तावेज़'],
'Application Documents':['Application Documents','আবেদনের কাগজপত্র','مستندات التقديم','आवेदन दस्तावेज़'],
'Academic Entry Requirements':['Academic Entry Requirements','একাডেমিক যোগ্যতা','المتطلبات الأكاديمية','शैक्षणिक आवश्यकताएँ'],
'English Requirements':['English Requirements','ইংরেজি ভাষার যোগ্যতা','متطلبات اللغة الإنجليزية','अंग्रेज़ी योग्यता'],
'Study Details':['Study Details','পড়াশোনার বিস্তারিত','تفاصيل الدراسة','अध्ययन विवरण'],
'Course Modules':['Course Modules','কোর্সের বিষয়সমূহ','مقررات الدراسة','कोर्स मॉड्यूल'],
'Available Research Areas':['Available Research Areas','গবেষণার ক্ষেত্রসমূহ','مجالات البحث المتاحة','उपलब्ध शोध क्षेत्र'],
'Study & Accreditation':['Study & Accreditation','শিক্ষা ও স্বীকৃতি','الدراسة والاعتماد','अध्ययन व मान्यता'],
'International Fee Breakdown':['International Fee Breakdown','আন্তর্জাতিক ফি বিবরণ','تفاصيل الرسوم الدولية','अंतरराष्ट्रीय फ़ीस विवरण'],
'Student FAQs':['Student FAQs','শিক্ষার্থীদের প্রশ্ন','أسئلة الطلاب','छात्रों के सवाल'],
'Request current international quotation':['Request current international quotation','সর্বশেষ আন্তর্জাতিক ফি জানুন','اطلب أحدث الرسوم الدولية','नवीनतम अंतरराष्ट्रीय फ़ीस जानें'],
'Healthcare University':['Healthcare University','হেলথকেয়ার বিশ্ববিদ্যালয়','جامعة الرعاية الصحية','हेल्थकेयर विश्वविद्यालय'],
'Master':['Master','মাস্টার্স','ماجستير','मास्टर्स'],
'Bachelor':['Bachelor','ব্যাচেলর','بكالوريوس','बैचलर'],
'Foundation':['Foundation','ফাউন্ডেশন','تأسيسي','फाउंडेशन'],
'Diploma':['Diploma','ডিপ্লোমা','دبلوم','डिप्लोमा'],
'PhD':['PhD','পিএইচডি','دكتوراه','पीएचडी'],
'All Levels':['All Levels','সব স্তর','جميع المستويات','सभी स्तर'],
'All medical universities':['All medical universities','সব মেডিকেল বিশ্ববিদ্যালয়','جميع الجامعات الطبية','सभी मेडिकल विश्वविद्यालय'],
'Search Medical Programmes ↗':['Search Medical Programmes ↗','মেডিকেল কোর্স খুঁজুন ↗','ابحث عن البرامج الطبية ↗','मेडिकल प्रोग्राम खोजें ↗'],
'Free Eligibility Check':['Free Eligibility Check','বিনামূল্যে যোগ্যতা যাচাই','تقييم أهلية مجاني','मुफ़्त योग्यता जांच'],
'Find a programme built around your goals.':['Find a programme built around your goals.','আপনার লক্ষ্য অনুযায়ী প্রোগ্রাম খুঁজুন।','اختر برنامجاً يناسب طموحاتك.','अपने लक्ष्य के अनुसार प्रोग्राम चुनें।'],
'Check eligibility & request fees':['Check eligibility & request fees','যোগ্যতা যাচাই ও ফি জানুন','تحقق من الأهلية والرسوم','योग्यता व फ़ीस जांचें'],
'Study healthcare. Shape tomorrow.':['Study healthcare. Shape tomorrow.','হেলথকেয়ার পড়ুন। ভবিষ্যৎ গড়ুন।','ادرس الرعاية الصحية واصنع المستقبل.','हेल्थकेयर पढ़ें, भविष्य बनाएं।'],
'Your gateway to medical & healthcare studies in Malaysia.':['Your gateway to medical & healthcare studies in Malaysia.','মালয়েশিয়ায় মেডিকেল ও হেলথকেয়ার শিক্ষার প্রবেশদ্বার।','بوابتك للدراسة الطبية والصحية في ماليزيا.','मलेशिया में मेडिकल शिक्षा का आपका प्रवेश द्वार।'],
'Admission Guide':['Admission Guide','ভর্তির গাইড','دليل القبول','प्रवेश गाइड'],
'Search university or medical programme (e.g. IMU, MBBS, Nursing)':['Search university or medical programme (e.g. IMU, MBBS, Nursing)','বিশ্ববিদ্যালয় বা প্রোগ্রাম খুঁজুন','ابحث عن جامعة أو برنامج طبي','विश्वविद्यालय या प्रोग्राम खोजें']
};
const map=Object.fromEntries(Object.entries(dict).map(([k,v])=>[k,v]));
let current='en',busy=false;
const originals=new WeakMap();
function translateText(text,lang){const clean=text.trim();if(!clean||!map[clean])return null;const i=choices.findIndex(x=>x[0]===lang);return map[clean][i]||clean;}
function paint(){if(busy)return;busy=true;const i=choices.findIndex(x=>x[0]===current);
document.documentElement.lang=current;document.documentElement.dir=current==='ar'?'rtl':'ltr';
document.querySelectorAll('select.oh-language').forEach(sel=>{sel.value=current;sel.setAttribute('aria-label',current==='bn'?'ভাষা নির্বাচন':current==='ar'?'اختر اللغة':current==='hi'?'भाषा चुनें':'Choose language');});
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
for(const n of nodes){const par=n.parentElement;if(!par||par.closest('script,style,textarea,option,.oh-lang-control,[translate="no"]'))continue;
if(!originals.has(n))originals.set(n,n.nodeValue);
const orig=originals.get(n),key=orig.trim();if(!map[key])continue;
const val=current==='en'?key:(map[key][i]||key);
const prefix=orig.match(/^\s*/)?.[0]||'',suffix=orig.match(/\s*$/)?.[0]||'';
const next=prefix+val+suffix;if(n.nodeValue!==next)n.nodeValue=next;
}
document.querySelectorAll('[data-oh-i18n]').forEach(el=>{let key=el.dataset.ohI18n;let v=map[key];if(v)el.textContent=v[i]});
busy=false;}
const autoSources=new WeakMap();
const autoCache=new Map();
let translationVersion=0,engine=null,engineLanguage='',translationBusy=false,translationNeeded=false;
function status(message){const el=document.querySelector('.oh-translate-status');if(el){el.textContent=message;el.title=message;}}
function originalsForTranslation(){
 const tw=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),nodes=[];
 while(tw.nextNode()){const n=tw.currentNode,p=n.parentElement;if(!p||p.closest('script,style,textarea,option,.oh-lang-control,[translate="no"],.oh-translate-status'))continue;
 if(!autoSources.has(n))autoSources.set(n,originals.get(n)||n.nodeValue);
 const original=autoSources.get(n),clean=original.trim();
 if(clean.length<3||!/[a-z]/i.test(clean)||map[clean])continue;
 nodes.push({node:n,original,clean});
 }return nodes;
}
async function translateFullPage(){
 const version=++translationVersion,language=current,items=originalsForTranslation();
 if(language==='en'){
  for(const item of items){if(item.node.isConnected&&item.node.nodeValue!==item.original)item.node.nodeValue=item.original;}
  status('');return;
 }
 if(!('Translator' in window)||typeof Translator.create!=='function'){status('Full-page translation needs Chrome with the on-device Translator feature. Only built-in interface labels translated here.');return;}
 if(translationBusy){translationNeeded=true;return;}
 translationBusy=true;
 try{
  if(!engine||engineLanguage!==language){
   status('Preparing '+language.toUpperCase()+' translation…');
   const avail=await Translator.availability({sourceLanguage:'en',targetLanguage:language});
   if(avail==='unavailable')throw new Error('This browser cannot translate to '+language+'.');
   engine=await Translator.create({sourceLanguage:'en',targetLanguage:language});engineLanguage=language;
  }
  if(version!==translationVersion&&language!==current)return;
  status('Translating full programme information…');
  let done=0;
  for(let offset=0;offset<items.length;offset+=4){
   if(language!==current)break;
   const batch=items.slice(offset,offset+4);
   await Promise.all(batch.map(async item=>{
    const cacheKey=language+'|'+item.clean;
    let text=autoCache.get(cacheKey);
    if(!text){try{text=await engine.translate(item.clean);autoCache.set(cacheKey,text);}catch(e){return;}}
    if(language!==current||!item.node.isConnected)return;
    const left=item.original.match(/^\s*/)?.[0]||'',right=item.original.match(/\s*$/)?.[0]||'';
    item.node.nodeValue=left+text+right;
   }));
   done+=batch.length;
   if(offset%40===0)status('Translating page… '+Math.min(done,items.length)+'/'+items.length);
  }
  if(language===current)status('Page translated to '+choices.find(x=>x[0]===language)[1]);
 }catch(error){
  engine=null;engineLanguage='';
  status('Full-page translation unavailable in this browser. Please use latest Chrome with the translation language pack.');
  console.info('HealthEd translation:',error);
 }finally{
  translationBusy=false;
  if(translationNeeded){translationNeeded=false;translateFullPage();}
 }
}
function langChange(lang){current=choices.some(x=>x[0]===lang)?lang:'en';try{localStorage.setItem('oh-healthed-lang',current)}catch(e){}paint();translateFullPage();}
function install(){
document.querySelectorAll('a.brand, a.logo, .nav .brand, .brand[href="index.html"]').forEach(a=>{if(a.querySelector('.oh-logo-mark'))return;a.innerHTML='<img class="oh-logo-mark oh-full-brand" alt="Overseas Highway logo" src="assets/oh-brand.svg"><span class="oh-logo-health">HealthEd</span>';a.setAttribute('aria-label','Overseas Highway HealthEd')});
const header=document.querySelector('header');if(!header)return;
const nav=header.querySelector('nav')||header.querySelector('.navlinks')||header.querySelector('.links');
const target=header.querySelector('.nav-actions')||nav||header.querySelector('.container,.shell,.wrap');
if(!target)return;
const span=document.createElement('div');span.className='oh-lang-control';span.innerHTML='<span class="oh-lang-icon" aria-hidden="true">🌐</span><select class="oh-language" aria-label="Choose language">'+choices.map(([c,n])=>'<option value="'+c+'">'+n+'</option>').join('')+'</select>';
span.insertAdjacentHTML('beforeend','<small class="oh-translate-status" role="status" aria-live="polite"></small>');target.appendChild(span);
span.querySelector('select').addEventListener('change',e=>langChange(e.target.value));
try{current=localStorage.getItem('oh-healthed-lang')||'en'}catch(e){current='en'}
paint();if(current!=='en')translateFullPage();let pending=false;const observer=new MutationObserver(()=>{if(busy||pending)return;pending=true;requestAnimationFrame(()=>{pending=false;paint();if(current!=='en')translateFullPage()})});
observer.observe(document.body,{childList:true,subtree:true,characterData:false});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install);else install();
window.OHHealthEdLanguage={set:langChange,get:()=>current};
})();
