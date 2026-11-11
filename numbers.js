(function () {
  const U = {
    desa: 'https://www.un.org/development/desa/pd/content/international-migrant-stock',
    prague: 'https://www.pragueprocess.eu/en/component/sprint/?id=884',
    gov: 'https://particip.gov.md/ru/download_attachment/19354',
    bns: 'https://statistica.gov.md/files/files/evenimente/2025/25.08.25_diseminare_date_RPL2024/Prezentare_RPL2024_finale_25_08_2025.pdf',
    ita: 'https://lavoro.gov.it/documenti-e-norme/studi-e-statistiche/moldovan-community-italy-2025',
    osw: 'https://www.osw.waw.pl/en/publikacje/osw-commentary/2025-01-08/a-disappearing-country-moldova-verge-a-demographic-catastrophe',
    wb: 'https://data.worldbank.org/indicator/BX.TRF.PWKR.DT.GD.ZS?locations=MD',
    mfa: 'https://mfa.gov.md/en/content/2025-parliamentary-elections',
    igm: 'https://igm.gov.md/wp-content/uploads/2024/12/Compendiul-Statistic-al-PME_-ed-2024.pdf'
  };
  const shares = [['Italia', 'Италия', 'Italy', 25], ['Rusia', 'Россия', 'Russia', 19], ['Ucraina', 'Украина', 'Ukraine', 18], ['România', 'Румыния', 'Romania', 9], ['Franța', 'Франция', 'France', 6]];
  const L = { ro: 0, ru: 1, en: 2 };
  const T = {
    ro: {
      eyebrow: 'Diaspora în cifre', title: 'Câți suntem și unde',
      lead: 'Cifrele despre diasporă vin de la instituții diferite și nu coincid mereu. Sub fiecare cifră indicăm sursa și anul; unde sursele diferă, dăm un interval și explicăm de ce.',
      s1: '01 · Peste hotare', s1T: 'Câți moldoveni trăiesc peste hotare',
      abroadV: '864 257', abroadL: 'emigranți din Moldova, potrivit ONU', abroadS: 'UN DESA, International Migrant Stock 2024',
      trendT: 'Estimările ONU în timp', govV: 'peste 1 mln', govL: 'cetățeni ai Moldovei peste hotare — estimarea statului', govS: 'Concepția Programului «Diaspora», particip.gov.md',
      whyT: 'De ce cifrele diferă', why: 'O parte dintre oameni trăiesc cu pașapoarte românești sau ale altor țări UE și nu sunt numărați ca «moldoveni»; o parte lucrează sezonier sau fără forme legale; iar țările numără diferit — după cetățenie sau după locul nașterii.',
      s2: '02 · Acasă', s2T: 'Populația Moldovei',
      home: [{ v: '2 401,2 mii', l: 'locuitori permanenți la recensământul din 2024', s: 'BNS, RPL 2024', u: U.bns }, { v: '2 381,3 mii', l: 'locuitori la 1 ianuarie 2025', s: 'BNS', u: U.bns }, { v: '106,7 mii', l: 'locuitori (4,4%) s-au născut în alte țări', s: 'BNS, RPL 2024 — caracteristici migraționale', u: U.bns }, { v: '−450 000', l: 'scăderea populației între 2014 și 2023', s: 'Prague Process / Moldova', u: U.prague }],
      s3: '03 · Pe țări', s3T: 'Unde trăiesc moldovenii', sharesT: 'Ponderea în totalul migranților din Moldova', sharesS: 'UN DESA (prin Banca Mondială)',
      offT: 'Date oficiale ale țărilor de reședință', offCols: ['Țara', 'Cifra', 'Sursa'],
      off: [{ c: 'Italia', v: '89 693 rezidenți legali la 31.12.2024', s: 'Ministero del Lavoro, The Moldovan Community in Italy 2025', u: U.ita, flag: '' }, { c: 'Germania', v: '120 000+ la recensământul din 2022', s: 'Destatis, Zensus 2022', u: '', flag: 'în verificare' }, { c: 'Polonia', v: '8 000+ primele permise de muncă în 2023', s: 'Prague Process / Moldova', u: U.prague, flag: '' }],
      estT: 'Estimare a experților (neoficială)', est: 'Italia ~300 000, Franța 100–160 mii, Germania ~100 000, Marea Britanie ~50 000.', estS: 'OSW, 2025',
      s4: '04 · Bani trimiși acasă', s4T: 'Transferurile de bani', remit: [{ y: '2006', v: 34.5, l: 'vârful' }, { y: '2024', v: 10.5, l: 'astăzi' }], remitL: 'din PIB', remitS: 'Banca Mondială, World Development Indicators (BX.TRF.PWKR.DT.GD.ZS)',
      s5: '05 · Vocea diasporei', s5T: 'Alegerile parlamentare din 28.09.2025', vote: [{ v: '301', l: 'secții de votare peste hotare' }, { v: '45', l: 'de țări' }, { v: '260 000+', l: 'de cetățeni au votat peste hotare' }], voteS: 'MAE — Parliamentary elections 2025; cifra finală — CEC',
      s6: '06 · Revenirea', s6T: 'Câți se întorc acasă', s6D: 'Încă nu avem date verificate. Le vom publica din Compendiul statistic al IGM și din datele BNS despre migrație.', s6S: 'Compendiul Statistic al PME, ed. 2024 (IGM)',
      srcT: 'Surse', soon: 'Date în curs de colectare'
    },
    ru: {
      eyebrow: 'Диаспора в цифрах', title: 'Сколько нас и где мы',
      lead: 'Цифры о диаспоре приходят из разных ведомств и не всегда совпадают. Под каждой цифрой указываем источник и год; где источники расходятся, даём диапазон и объясняем почему.',
      s1: '01 · За рубежом', s1T: 'Сколько молдаван живёт за рубежом',
      abroadV: '864 257', abroadL: 'эмигрантов из Молдовы по данным ООН', abroadS: 'UN DESA, International Migrant Stock 2024',
      trendT: 'Оценки ООН по годам', govV: 'более 1 млн', govL: 'граждан Молдовы за рубежом — госоценка', govS: 'Концепция программы «Diaspora», particip.gov.md',
      whyT: 'Почему цифры расходятся', why: 'Часть людей живёт по паспортам Румынии или других стран ЕС и не учитывается как «молдаване»; часть работает сезонно или нелегально; страны считают по-разному — по гражданству или по месту рождения.',
      s2: '02 · Дома', s2T: 'Население Молдовы',
      home: [{ v: '2 401,2 тыс.', l: 'постоянных жителей по переписи 2024', s: 'НБС, RPL 2024', u: U.bns }, { v: '2 381,3 тыс.', l: 'жителей на 1 января 2025', s: 'НБС', u: U.bns }, { v: '106,7 тыс.', l: 'жителей (4,4%) родились в других странах', s: 'НБС, RPL 2024 — миграционные характеристики', u: U.bns }, { v: '−450 000', l: 'сокращение населения с 2014 по 2023', s: 'Prague Process / Moldova', u: U.prague }],
      s3: '03 · По странам', s3T: 'Где живут молдаване', sharesT: 'Доля от всех мигрантов из Молдовы', sharesS: 'UN DESA (через Всемирный банк)',
      offT: 'Официальные данные стран проживания', offCols: ['Страна', 'Цифра', 'Источник'],
      off: [{ c: 'Италия', v: '89 693 легальных резидента на 31.12.2024', s: 'Ministero del Lavoro, The Moldovan Community in Italy 2025', u: U.ita, flag: '' }, { c: 'Германия', v: '120 000+ по переписи 2022', s: 'Destatis, Zensus 2022', u: '', flag: 'проверяется' }, { c: 'Польша', v: '8 000+ первых разрешений на работу в 2023', s: 'Prague Process / Moldova', u: U.prague, flag: '' }],
      estT: 'Экспертная оценка (не официальная)', est: 'Италия ~300 000, Франция 100–160 тыс., Германия ~100 000, Великобритания ~50 000.', estS: 'OSW, 2025',
      s4: '04 · Деньги домой', s4T: 'Денежные переводы', remit: [{ y: '2006', v: 34.5, l: 'пик' }, { y: '2024', v: 10.5, l: 'сейчас' }], remitL: 'ВВП', remitS: 'Всемирный банк, World Development Indicators (BX.TRF.PWKR.DT.GD.ZS)',
      s5: '05 · Голос диаспоры', s5T: 'Парламентские выборы 28.09.2025', vote: [{ v: '301', l: 'избирательный участок за рубежом' }, { v: '45', l: 'стран' }, { v: '260 000+', l: 'граждан проголосовали за рубежом' }], voteS: 'МИД — Parliamentary elections 2025; финальная цифра — ЦИК',
      s6: '06 · Возвращение', s6T: 'Сколько людей возвращается', s6D: 'Проверенных данных пока нет. Опубликуем их по Статистическому компендиуму IGM и данным НБС о миграции.', s6S: 'Compendiul Statistic al PME, ed. 2024 (IGM)',
      srcT: 'Источники', soon: 'Данные собираются'
    },
    en: {
      eyebrow: 'Diaspora in numbers', title: 'How many we are, and where',
      lead: 'Diaspora figures come from different institutions and don’t always match. Under every figure we give the source and year; where sources differ, we give a range and explain why.',
      s1: '01 · Abroad', s1T: 'How many Moldovans live abroad',
      abroadV: '864,257', abroadL: 'emigrants from Moldova, according to the UN', abroadS: 'UN DESA, International Migrant Stock 2024',
      trendT: 'UN estimates over time', govV: 'over 1M', govL: 'Moldovan citizens abroad — government estimate', govS: 'Concept of the “Diaspora” Programme, particip.gov.md',
      whyT: 'Why the figures differ', why: 'Some people live on Romanian or other EU passports and are not counted as “Moldovans”; some work seasonally or informally; and countries count differently — by citizenship or by place of birth.',
      s2: '02 · At home', s2T: 'Moldova’s population',
      home: [{ v: '2,401.2k', l: 'permanent residents at the 2024 census', s: 'NBS, 2024 Census', u: U.bns }, { v: '2,381.3k', l: 'residents on 1 January 2025', s: 'NBS', u: U.bns }, { v: '106.7k', l: 'residents (4.4%) were born in other countries', s: 'NBS, 2024 Census — migration characteristics', u: U.bns }, { v: '−450,000', l: 'population decline from 2014 to 2023', s: 'Prague Process / Moldova', u: U.prague }],
      s3: '03 · By country', s3T: 'Where Moldovans live', sharesT: 'Share of all migrants from Moldova', sharesS: 'UN DESA (via the World Bank)',
      offT: 'Official data from host countries', offCols: ['Country', 'Figure', 'Source'],
      off: [{ c: 'Italy', v: '89,693 legal residents on 31.12.2024', s: 'Ministero del Lavoro, The Moldovan Community in Italy 2025', u: U.ita, flag: '' }, { c: 'Germany', v: '120,000+ at the 2022 census', s: 'Destatis, Zensus 2022', u: '', flag: 'being verified' }, { c: 'Poland', v: '8,000+ first work permits in 2023', s: 'Prague Process / Moldova', u: U.prague, flag: '' }],
      estT: 'Expert estimate (unofficial)', est: 'Italy ~300,000, France 100–160k, Germany ~100,000, United Kingdom ~50,000.', estS: 'OSW, 2025',
      s4: '04 · Money sent home', s4T: 'Remittances', remit: [{ y: '2006', v: 34.5, l: 'peak' }, { y: '2024', v: 10.5, l: 'today' }], remitL: 'of GDP', remitS: 'World Bank, World Development Indicators (BX.TRF.PWKR.DT.GD.ZS)',
      s5: '05 · The diaspora’s voice', s5T: 'Parliamentary elections, 28.09.2025', vote: [{ v: '301', l: 'polling stations abroad' }, { v: '45', l: 'countries' }, { v: '260,000+', l: 'citizens voted abroad' }], voteS: 'MFA — Parliamentary elections 2025; final figure — CEC',
      s6: '06 · Return', s6T: 'How many come back', s6D: 'We don’t have verified data yet. We will publish it from the IGM Statistical Compendium and NBS migration data.', s6S: 'Compendiul Statistic al PME, 2024 ed. (IGM)',
      srcT: 'Sources', soon: 'Data being collected'
    }
  };
  const fmt = { ro: n => String(n).replace('.', ','), ru: n => String(n).replace('.', ','), en: n => String(n) };
  const trendRaw = [[2015, 930000], [2020, 1160000], [2024, 864257]];
  const trendLbl = { ro: ['930 mii', '1,16 mln', '864 mii'], ru: ['930 тыс.', '1,16 млн', '864 тыс.'], en: ['930k', '1.16M', '864k'] };
  Object.keys(T).forEach(l => {
    const t = T[l];
    t.shares = shares.map(s => ({ n: s[L[l]], v: s[3] + '%', w: (s[3] / 25 * 100) + '%' }));
    t.trend = trendRaw.map((r, i) => ({ y: r[0], v: trendLbl[l][i], h: (r[1] / 1160000 * 100).toFixed(1) + '%', fill: r[0] === 2024 ? '#7A1F2B' : '#C9C6C0' }));
    t.remit = t.remit.map(r => ({ ...r, txt: fmt[l](r.v) + '%', w: (r.v / 34.5 * 100) + '%' }));
    t.off = t.off.map(o => ({ ...o, hasU: !!o.u, noU: !o.u, hasFlag: !!o.flag }));
    t.sources = [
      ['UN DESA — International Migrant Stock 2024', U.desa], ['Prague Process — Moldova', U.prague], ['particip.gov.md — Concepția Programului «Diaspora»', U.gov],
      ['BNS — Recensământul populației 2024 (RPL 2024)', U.bns], ['Ministero del Lavoro — The Moldovan Community in Italy 2025', U.ita], ['OSW — A disappearing country (2025)', U.osw],
      ['World Bank — Personal remittances, received (% of GDP)', U.wb], ['MAE/MFA — Parliamentary elections 2025', U.mfa], ['IGM — Compendiul Statistic al PME, ed. 2024', U.igm]
    ].map(([n, u]) => ({ n, u }));
    t.U = U;
  });
  const apply = () => { if (window.TM) { Object.keys(T).forEach(l => { window.TM.T[l].nd = T[l]; }); } else setTimeout(apply, 20); };
  apply();
})();
