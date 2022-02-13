const g=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}};g();class d extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {

      }

      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: "Orbitron", sans-serif;
        font-variation-settings: "wght" 700;
        text-shadow: 1px 1px 0 #186914;
        font-size: 1.25rem;
        color: #fff;
        background: var(--theme-light);
        border-top: 1px solid #a2d324;
        border-bottom: 1px solid #186914;
        padding: 0 30px;
        box-shadow:
          0 1px 0 #000,
          0 3px 0 #0005;
      }

      nav p {
        margin: 0;
      }

      nav time {
        display: flex;
        align-items: center;
        background: #186914;
        padding: 0 10px;
        font-size: 1rem;
        height: 20px;
        color: #d8f091;
      }
    `}connectedCallback(){this.render(),this.updateDate()}updateDate(){const t=this.shadowRoot.querySelector("nav time");t.textContent=new Date().toLocaleDateString()}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <nav>
      <p>TWITCH.TV/MANZDEV</p>
      <time></time>
    </nav>`}}customElements.define("pcfutbol-header",d);const m=["POR","DEF","MED","DEL"],o=()=>30+~~(Math.random()*69),x=()=>m[~~(Math.random()*m.length)];class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: grid;
        grid-template-columns: var(--grid-sizes);
      }

      div {
        border: 1px solid #000;
        border-bottom: 0;
        padding: 0px 4px;
        font-family: "Chakra Petch", sans-serif;
        text-shadow: 0 0 1px #0006;
        font-size: 1rem;
        background: var(--bgcolor, #86b4da);
      }

      .number {
        color: #fff;
        text-shadow: 1px 1px 0 #000;
      }

      .stats {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #000;
        color: #d4d4d4;
        border: 1px solid #fff;
      }

      .playername {
        padding-left: 10px;
      }

      .media {
        color: #fff;
      }

      div:first-of-type {
        --bgcolor: #4c9423;
      }

      .demarcation {
        text-transform: uppercase;
      }
    `}get average(){return~~((this.stats.speed+this.stats.endurance+this.stats.agility+this.stats.quality+this.stats.energy)/5)}static get observedAttributes(){return["number"]}attributeChangedCallback(t,s,i){t==="number"&&(this.number=i,this.render())}setData(t){this.name=t.name,this.stats={speed:o(),endurance:o(),agility:o(),quality:o(),energy:o()},this.demarcation=t.demarcation||x(),this.render()}connectedCallback(){this.name=this.getAttribute("name")||"",this.number=this.getAttribute("number"),this.stats={speed:Number(this.getAttribute("ve"))||0,endurance:Number(this.getAttribute("re"))||0,agility:Number(this.getAttribute("ag"))||0,quality:Number(this.getAttribute("ca"))||0,energy:Number(this.getAttribute("en"))||0},this.demarcation=this.getAttribute("dem")||"",this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="number">${this.number}</div>
    <div class="playername">${this.name}</div>
    <div class="stats">${this.stats.speed}</div>
    <div class="stats">${this.stats.endurance}</div>
    <div class="stats">${this.stats.agility}</div>
    <div class="stats">${this.stats.quality}</div>
    <div class="stats">${this.stats.energy}</div>
    <div class="stats media">${this.average}</div>
    <div class="demarcation">${this.demarcation}</div>
    `}}customElements.define("pcfutbol-player",n);class p extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --player-width: 150px;
        --grid-sizes: 25px 150px repeat(6, 35px) 50px;
      }

      .table {
        display: inline-flex;
        flex-direction: column;
        border: 1px solid #000;
        background: #fff;
        padding: 1px 2px 2px 2px;
        box-shadow: 5px 5px 0 #0004;
      }

      .table header {
        display: inline-grid;
        grid-template-columns: var(--grid-sizes);
      }

      .table header {
        padding: 1px 0;
      }

      .table .players {
        border-bottom: 1px solid #000;
      }

      .table header div {
        border: 1px solid #000;
        padding: 2px 4px;
        font-family: "Orbitron", sans-serif;
        font-variation-settings: "wght" 900;
        color: #fff;
        font-size: 0.8rem;
        text-shadow: 1px 1px 0 #000;
        text-transform: uppercase;
        background: var(--bgcolor, #186914);
        text-align: center;
      }

      header div:nth-child(2) { --bgcolor: #86aa1c; }
      header div:nth-child(8) { --bgcolor: #188614; }
      header div:nth-child(9) { --bgcolor: #86aa1c; }

      .players pcfutbol-player:first-child { --bgcolor: #d9e5f3; }
      .players pcfutbol-player:nth-child(2),
      .players pcfutbol-player:nth-child(3),
      .players pcfutbol-player:nth-child(4),
      .players pcfutbol-player:nth-child(5) { --bgcolor: #aebed3; }
      .players pcfutbol-player:nth-child(6),
      .players pcfutbol-player:nth-child(7),
      .players pcfutbol-player:nth-child(8),
      .players pcfutbol-player:nth-child(9) { --bgcolor: #90b7da; }
      .players pcfutbol-player:nth-child(10),
      .players pcfutbol-player:nth-child(11) { --bgcolor: #6996be; }
    `}connectedCallback(){this.render(),this.playerNumerate()}setPlayer(t,s){this.shadowRoot.querySelectorAll("pcfutbol-player")[t-1].setData(s)}playerNumerate(){this.shadowRoot.querySelectorAll("pcfutbol-player").forEach((t,s)=>{t.setAttribute("number",s+1)})}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="table">
      <header>
        <div class="number">N</div>
        <div class="playername">Jugador</div>
        <div>Ve</div>
        <div>Re</div>
        <div>Ag</div>
        <div>Ca</div>
        <div>En</div>
        <div>Me</div>
        <div>Dem.</div>
      </header>
      <div class="players">
        <pcfutbol-player></pcfutbol-player>
        <pcfutbol-player></pcfutbol-player>
        <pcfutbol-player></pcfutbol-player>
        <pcfutbol-player></pcfutbol-player>
        <pcfutbol-player></pcfutbol-player>
        <pcfutbol-player></pcfutbol-player>
        <pcfutbol-player></pcfutbol-player>
        <pcfutbol-player></pcfutbol-player>
        <pcfutbol-player></pcfutbol-player>
        <pcfutbol-player></pcfutbol-player>
        <pcfutbol-player></pcfutbol-player>
      </div>
    </div>`}}customElements.define("pcfutbol-team-lineup",p);class c extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
      }

      .container {
        display: grid;
        grid-template-columns: 80px 1fr;
        grid-template-rows: 100px;
        gap: 0 20px;
        margin: 10px;
      }

      .emblem {
        background: #222;
        border: 3px solid #fff;
        box-shadow: 3px 3px 0 #0004;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .emblem img {
        width: 80%;
      }

      .group {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        font-family: "Orbitron", sans-serif;
        font-variation-settings: "wght" 800;
        font-size: 1.25rem;
        color: #afbfd4;
      }

      .data .name {
        background: #000;
        text-align: center;
        padding: 4px 0;
        text-transform: capitalize;
      }

      .data .team {
        background: #fff;
        text-align: center;
        color: #000;
        padding: 4px 0;
        text-transform: capitalize;
      }

      .stats {
        background: #000;
        color: #6691b8;
        margin-top: 8px;
        padding: 2px;
        border: 2px solid #fff;
        box-shadow:
          0 0 0 1px #000,
          3px 3px 0 #0004;
        font-family: "Orbitron", sans-serif;
        font-variation-settings: "wght" 800;
        padding: 2px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .stats output {
        color: #fff;
        font-variation-settings: "wght" 600;
      }

      .stats .meter {
        background: #444;
        width: 150px;
        height: 5px;
      }

      .stats .meter .bar {
        background: gold;
        width: var(--value, 100%);
        height: 100%;
      }
    `}connectedCallback(){this.name=this.getAttribute("name"),this.image=`logos/${this.name}.svg`,this.type=this.getAttribute("type")||"local",this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
    <div class="container">
      <div class="emblem">
        <img src="${this.image}" alt="Equipo ${this.type}">
      </div>

      <div class="data">
        <div class="group">
          <div class="name">${this.name}</div>
          <div class="team">${this.type}</div>
        </div>
        <div class="stats">
          MEDIA EQUIPO
          <output>83</output>
          <div class="meter">
            <div class="bar" style="--value: 83%"></div>
          </div>
        </div>
      </div>

    </div>`}}customElements.define("pcfutbol-team-header",c);class u extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
      }

      .player {
        width: 32.5px;
        height: 32.5px;
        background: #fff;
        border-radius: 50%;
        box-shadow: 1px 1px 0 #0008;

        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Chakra Petch", sans-serif;
        font-size: 1.3rem;
      }
    `}connectedCallback(){this.number=this.getAttribute("number"),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${u.styles}</style>
    <div class="player">
      ${this.number}
    </div>`}}customElements.define("pcfutbol-player-dot",u);class f extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --grass:
          conic-gradient(
            #168613 90deg,
            #196915 0 180deg,
            #168613 0 270deg,
            #196915 0);
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
      }

      .stadium {
        width: 504px;
        height: 300px;
        border: 1px solid #fff;
        background: var(--grass);
        background-size: 67px 67px;
        box-shadow:
          0 0 0 2px #0004,
          1px 1px 0 2px #0006;
        position: relative;
        overflow: hidden;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .half {
        width: 50%;
        height: 100%;
        border-right: 1px solid #fff;
        display: flex;
        align-items: center;
      }

      .half:nth-child(2) {
        transform: scaleX(-1);
        border-right: 0;
      }

      /* Corners */
      .half::before {
        content: "";
        border: 1px solid #fff;
        width: 25px;
        height: 25px;
        position: absolute;
        border-radius: 50%;
        top: -15px;
        left: -15px;
      }

      .half::after {
        content: "";
        border: 1px solid #fff;
        width: 25px;
        height: 25px;
        position: absolute;
        border-radius: 50%;
        bottom: -15px;
        left: -15px;
      }

      .area {
        width: 33%;
        height: 55%;
        border: 1px solid #fff;
        border-left: 0;
        display: flex;
        align-items: center;
      }

      /* Penalty dot */
      .area::before {
        content: "";
        display: block;
        border: 2px solid #fff;
        position: absolute;
        border-radius: 50%;
        transform: translateX(1350%);
      }

      /* Area semi-circle */
      .area::after {
        content: "";
        display: block;
        border: 1px solid #fff;
        width: 55%;
        height: 35%;
        border-radius: 50%;
        transform: translateX(20px);
        clip-path: polygon(100% 0, 63% 0, 63% 100%, 100% 100%);
      }

      .semiarea {
        width: 40%;
        height: 50%;
        border: 1px solid #fff;
        border-left: 0;
      }

      .circle {
        border: 1px solid #fff;
        border-radius: 50%;
        position: absolute;
        width: 90px;
        height: 90px;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .circle::before {
        content: "";
        border: 2px solid #fff;
        display: block;
        position: absolute;
        border-radius: 50%;
        transform: translateX(-0.5px);
      }

      .players {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
      }

      .home,
      .away {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-template-areas: var(--lineup);
        width: 50%;
      }

      .lineup-1 {
        --lineup: ". d2 . . d10" ". . d4 d7 ." "d1 . d5 d8 ." ". . d6 d9 ." ". d3 . . d11";
      }

      .lineup-2 {
        --lineup:
          ". . d4 . d10"
          ". d2 . d7 ."
          "d1 . d5 . d8"
          ". d3 . d9 ."
          ". . d6 . d11";
      }

      pcfutbol-player-dot[number="1"] { grid-area: d1; }
      pcfutbol-player-dot[number="2"] { grid-area: d2; }
      pcfutbol-player-dot[number="3"] { grid-area: d3; }
      pcfutbol-player-dot[number="4"] { grid-area: d4; }
      pcfutbol-player-dot[number="5"] { grid-area: d5; }
      pcfutbol-player-dot[number="6"] { grid-area: d6; }
      pcfutbol-player-dot[number="7"] { grid-area: d7; }
      pcfutbol-player-dot[number="8"] { grid-area: d8; }
      pcfutbol-player-dot[number="9"] { grid-area: d9; }
      pcfutbol-player-dot[number="10"] { grid-area: d10; }
      pcfutbol-player-dot[number="11"] { grid-area: d11; }
    `}connectedCallback(){this.render(),setTimeout(()=>this.setLineup(),4e3)}render(){this.shadowRoot.innerHTML=`
    <style>${f.styles}</style>
    <div class="stadium">
      <div class="half">
        <div class="area">
          <div class="semiarea"></div>
        </div>
      </div>
      <div class="half">
        <div class="area">
          <div class="semiarea"></div>
        </div>
      </div>
      <div class="circle"></div>
      <div class="players">
        <div class="home lineup-2">
          <pcfutbol-player-dot number="1"></pcfutbol-player-dot>
          <pcfutbol-player-dot number="2"></pcfutbol-player-dot>
          <pcfutbol-player-dot number="3"></pcfutbol-player-dot>
          <pcfutbol-player-dot number="4"></pcfutbol-player-dot>
          <pcfutbol-player-dot number="5"></pcfutbol-player-dot>
          <pcfutbol-player-dot number="6"></pcfutbol-player-dot>
          <pcfutbol-player-dot number="7"></pcfutbol-player-dot>
          <pcfutbol-player-dot number="8"></pcfutbol-player-dot>
          <pcfutbol-player-dot number="9"></pcfutbol-player-dot>
          <pcfutbol-player-dot number="10"></pcfutbol-player-dot>
          <pcfutbol-player-dot number="11"></pcfutbol-player-dot>
        </div>
        <div class="away">
        </div>
      </div>
    </div>`}}customElements.define("pcfutbol-stadium",f);const v=`
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" xml:space="preserve">
  <path d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59
    c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815
    C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029
    c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562
    C26.18,21.891,26.141,21.891,26.105,21.891z"/>
</svg>
`;class b extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
      }

      .container {
        display: inline-flex;
        align-items: center;
        background: #aebed3;
        font-family: "Chakra Petch", sans-serif;
        font-size: 0.8rem;
        text-transform: uppercase;
        padding: 8px 12px;
        box-shadow:
          2px 2px 0 1px #fff inset,
          -2px -2px 0 1px #6488a8 inset,
          0 0 0 4px #76a0c4 inset,
          -2px -2px 0 3px #88898c inset,
          0 0 0 1px #000,
          3px 3px 0 #0004;
      }

      span::first-letter {
        color: #f11;
      }

      svg {
        width: 24px;
        height: 24px;
        filter: drop-shadow(4px 4px 0 #0004);
        fill: #fff;
        margin-right: 0.5em;
      }
    `}connectedCallback(){this.text=this.getAttribute("text")||"Volver",this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${b.styles}</style>
    <div class="container">
      ${v}
      <span>${this.text}</span>
    </div>`}}customElements.define("pcfutbol-button",b);class h extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: 1024px;
        --height: 650px;
        --theme-light: #86aa1c;
      }

      .screen {
        background: #a2a2a2;
        width: var(--width);
        height: var(--height);
        padding-top: 10px;
        position: relative;
      }

      .content {
        padding: 20px 10px;
        display: grid;
        grid-template-columns: 0.85fr 1fr;
      }

      .players {
        display: flex;
        flex-direction: column;
        gap: 20px 0;
      }

      pcfutbol-button {
        position: absolute;
        bottom: 20px;
        right: 20px;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${h.styles}</style>
    <div class="screen">
      <pcfutbol-header></pcfutbol-header>

      <div class="content">
        <div class="players">
          <pcfutbol-team-lineup class="team-a"></pcfutbol-team-lineup>
          <pcfutbol-team-lineup class="team-b"></pcfutbol-team-lineup>
        </div>
        <div class="teams">
          <pcfutbol-team-header name="react"></pcfutbol-team-header>
          <pcfutbol-stadium></pcfutbol-stadium>
          <pcfutbol-team-header name="vue" type="visitante"></pcfutbol-team-header>
        </div>
      </div>

      <pcfutbol-button></pcfutbol-button>
    </div>`}}customElements.define("pcfutbol-screen",h);const[w,k]=document.querySelector("pcfutbol-screen").shadowRoot.querySelectorAll("pcfutbol-team-lineup"),y=["cybermanzdev","manzdev","maxi83c","juliokrack27","commanderroot","ullacasa","devgeer","billxanthi","hdmc6","streamlabs","kugram","boamorte55","srcarlosa","dynaterra","alopezciotta","olandaeta","a1t0rmenta","eltaladros","scemigdio","m_akali","erika_fnbr","ferchoo17","rogueg1rl","locura_78","aguzbruno","maikolmyers77","zerobytes_","adeptw","tizcloud","elmoliiii","jamsmendez","dolce_nyx","luismac09","wpfid5555","kaxips06","jelitter","itsthefrits","lanarayyyy","virgoproz","midsooooooooon","itzemmaaaaaaa","shompys","jordandiaz1988","infraavalorado","kbemon","leannpiano","gallowtown","chuvv1","itsvodoo","javi_more_music","frankkdrebin","anotherttvviewer","esgameplayer","baikin_lol","ele_eme_esther","miottotv","pablorocha","patatokill","ldp_20","brayanli_","justoserrano","devkaos","spiketrapclair","misterybrk","z3thii"].sort(()=>Math.random()-.5);for(let r=0;r<11;r++)w.setPlayer(r+1,{name:y[r]});for(let r=0;r<11;r++)k.setPlayer(r+1,{name:y[11+r]});
