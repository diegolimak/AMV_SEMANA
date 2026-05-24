/* ═══════════════════════════════════════════════
   AMV — Data Layer (localStorage)
   ═══════════════════════════════════════════════ */

const AMV = (() => {
  const KEY  = 'amv_semana_atual';
  const HIST = 'amv_historico';

  const DEMO = {
    id: '2026-W21',
    semana: '16/05 a 22/05',
    dataInicio: '2026-05-16',
    dataFim:    '2026-05-22',
    alinhamentos: [
      'CAMPANHA DA COPA: temos mais 2 semanas!!!! Vamos dar o gás!!',
      'DESCONTO SULAMERICA: Prorrogada até o dia 26/06 (+1 MÊS)',
      'DESCONTO BRADESCO: Prorrogada a campanha até dia 29/05',
      'ALINHAMENTOS POR EMAIL: Sempre que precisarem sair mais cedo, tiverem consultas, atestado, etc — depois de alinhar com a gestora, formalizar por email para GESTORA, JESSICA E LEANDRO'
    ],
    timeThais: {
      geral: {
        reunioesRealizadas: { valor: 20, meta: 35 },
        capasEnviadas:      { valor: 6,  meta: 7  },
        vidas:              { valor: 24, meta: 85 },
        indicacoes:         { valor: 26, meta: 15 },
        vidasImplantadas:   { valor: 54, contratos: 12 },
        posVendas:          { valor: 7  }
      },
      consultores: [
        { id:'rodrigo',  nome:'Rodrigo Veras',   tipo:'pleno',   foto:'assets/photos/rodrigo.svg',
          reunioes:{ v:10, m:6  }, capas:{ v:2, m:2 }, vidas:{ v:8, m:5  },
          posVendas:{ v:1, m:5 }, indicacoes:{ v:5, m:5 }, implantados:{ v:5, c:0 } },
        { id:'thiago',   nome:'Thiago Vaz',      tipo:'amv',     foto:'assets/photos/thiago.svg',
          reunioes:{ v:3,  m:10 }, capas:{ v:2, m:2 }, vidas:{ v:5, m:8  },
          posVendas:{ v:1, m:5 }, indicacoes:{ v:7, m:5 }, implantados:{ v:5, c:0 } },
        { id:'vitorL',   nome:'Vitor Lorran',    tipo:'trainee', foto:'assets/photos/vitor-lorran.svg',
          reunioes:{ v:6,  m:10 }, capas:{ v:2, m:2 }, vidas:{ v:7, m:4  },
          posVendas:{ v:3, m:5 }, indicacoes:{ v:7, m:5 }, implantados:{ v:18, c:3 } },
        { id:'gisele',   nome:'Gisele Cristina', tipo:'amv',     foto:'assets/photos/gisele.svg',
          reunioes:{ v:5,  m:10 }, capas:{ v:1, m:2 }, vidas:{ v:6, m:8  },
          posVendas:{ v:0, m:5 }, indicacoes:{ v:1, m:5 }, implantados:{ v:5, c:0 } }
      ],
      backoffice: [
        { id:'marjorie', nome:'Marjorie', foto:'assets/photos/marjorie.svg', atividades:4, meta:10 }
      ],
      preVendas: [
        { id:'sara',    nome:'Sara',    foto:'assets/photos/sara.svg',    atividadesV:4, atividadesM:10, agendadasV:2, agendadasM:2, realizadasV:0, realizadasM:8 },
        { id:'leticia', nome:'Leticia', foto:'assets/photos/leticia.svg', atividadesV:4, atividadesM:10, agendadasV:0, agendadasM:2, realizadasV:5, realizadasM:8 }
      ]
    },
    timeLuiza: {
      geral: {
        reunioesRealizadas: { valor: 29, meta: 21 },
        capasEnviadas:      { valor: 5,  meta: 5  },
        vidas:              { valor: 20, meta: 20 },
        indicacoes:         { valor: 14, meta: 21 },
        vidasImplantadas:   { valor: 3,  contratos: 1 },
        posVendas:          { valor: 2  }
      },
      consultores: [
        { id:'matheus', nome:'Matheus Prado',  tipo:'amv',     foto:'assets/photos/matheus.svg',
          reunioes:{ v:4, m:10 }, capas:{ v:2, m:2 }, vidas:{ v:5, m:8  },
          posVendas:{ v:0, m:5 }, indicacoes:{ v:5, m:5 }, implantados:{ v:3, c:1 } },
        { id:'vitorM',  nome:'Vitor',          tipo:'amv',     foto:'assets/photos/vitor-m.svg',
          reunioes:{ v:0, m:10 }, capas:{ v:0, m:2 }, vidas:{ v:0, m:8  },
          posVendas:{ v:0, m:5 }, indicacoes:{ v:0, m:5 }, implantados:{ v:0, c:0 } },
        { id:'kaike',   nome:'Kaike Augusto',  tipo:'trainee', foto:'assets/photos/kaike.svg',
          reunioes:{ v:6, m:7  }, capas:{ v:1, m:2 }, vidas:{ v:0, m:5  },
          posVendas:{ v:0, m:5 }, indicacoes:{ v:0, m:5 }, implantados:{ v:0, c:0 } },
        { id:'kariny',  nome:'Kariny Coelho',  tipo:'trainee', foto:'assets/photos/kariny.svg',
          reunioes:{ v:4, m:5  }, capas:{ v:1, m:2 }, vidas:{ v:0, m:4  },
          posVendas:{ v:0, m:5 }, indicacoes:{ v:3, m:6 }, implantados:{ v:0, c:0 } }
      ],
      backoffice: [
        { id:'bianca', nome:'Bianca', foto:'assets/photos/bianca.svg', atividades:4, meta:10 }
      ],
      preVendas: [
        { id:'mariaCecilia', nome:'Maria Cecilia', foto:'assets/photos/maria-cecilia.png',
          atividadesV:4, atividadesM:10, agendadasV:0, agendadasM:2, realizadasV:0, realizadasM:8 }
      ]
    },
    destaques: {
      reunioes:  { nome:'Victor Matera',   time:'Luiza', foto:'assets/photos/victor-matera.svg', valor:7 },
      indicacoes:{ nome:'Gisele Cristina', time:'Thaís', foto:'assets/photos/gisele.svg',        valor:1 }
    },
    rankingAmvJunior: [
      { pos:1, nome:'Giselle Cristina', foto:'assets/photos/gisele.svg',   vidas:143, contratos:30, periodo:'01/01/2026 a 31/12/2026' },
      { pos:2, nome:'Matheus Prado',    foto:'assets/photos/matheus.svg',  vidas:105, contratos:21, periodo:'01/01/2026 a 31/12/2026' },
      { pos:3, nome:'Thiago Vaz',       foto:'assets/photos/thiago.svg',   vidas:93,  contratos:26, periodo:'01/01/2026 a 31/12/2026' }
    ],
    rankingPleno: [
      { pos:1, nome:'Rodrigo Veras', foto:'assets/photos/rodrigo.svg', vidas:307, contratos:34, periodo:'01/01/2026 a 31/12/2026' }
    ],
    rankingTrainee: [
      { pos:1, nome:'Vitor Lorran',   foto:'assets/photos/vitor-lorran.svg',   vidas:39, contratos:12, periodo:'01/02/2026 a 30/06/2026' },
      { pos:2, nome:'Kaike Augusto',  foto:'assets/photos/kaike.svg',          vidas:12, contratos:4,  periodo:'01/02/2026 a 30/06/2026' },
      { pos:3, nome:'Victor Matera',  foto:'assets/photos/victor-matera.svg',  vidas:12, contratos:3,  periodo:'01/02/2026 a 30/06/2026' },
      { pos:4, nome:'Kariny Coelho',  foto:'assets/photos/kariny.svg',         vidas:7,  contratos:1,  periodo:'01/02/2026 a 30/06/2026' }
    ]
  };

  function load() {
    try { const r = localStorage.getItem(KEY); return r ? JSON.parse(r) : DEMO; }
    catch { return DEMO; }
  }
  function save(data) { localStorage.setItem(KEY, JSON.stringify(data)); }
  function loadHistory() {
    try { const r = localStorage.getItem(HIST); return r ? JSON.parse(r) : []; }
    catch { return []; }
  }
  function archiveCurrentWeek() {
    const curr = load(), hist = loadHistory();
    const idx = hist.findIndex(h => h.id === curr.id);
    if(idx >= 0) hist[idx] = curr; else hist.unshift(curr);
    if(hist.length > 52) hist.pop();
    localStorage.setItem(HIST, JSON.stringify(hist));
    return hist;
  }
  function getDemo() { return JSON.parse(JSON.stringify(DEMO)); }
  function pct(v, m) { if(!m) return v>0?100:0; return Math.round((v/m)*100); }
  function status(v, m) { const p=pct(v,m); return p>=100?'ok':p>=70?'warn':'bad'; }

  return { load, save, loadHistory, archiveCurrentWeek, getDemo, pct, status };
})();
