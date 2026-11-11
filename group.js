(function () {
  const people = {
    ro: [['Antreprenor, construcții', 'Torino', 'Italia'], ['Medic', 'Chișinău', 'Moldova'], ['Inginer IT', 'Dublin', 'Irlanda'], ['Profesoară', 'Bălți', 'Moldova'], ['Jurist', 'Paris', 'Franța'], ['Manager de proiect', 'München', 'Germania'], ['Student, sociologie', 'București', 'România']],
    ru: [['Предприниматель, строительство', 'Турин', 'Италия'], ['Врач', 'Кишинёв', 'Молдова'], ['IT-инженер', 'Дублин', 'Ирландия'], ['Учительница', 'Бельцы', 'Молдова'], ['Юрист', 'Париж', 'Франция'], ['Менеджер проектов', 'Мюнхен', 'Германия'], ['Студент, социология', 'Бухарест', 'Румыния']],
    en: [['Entrepreneur, construction', 'Turin', 'Italy'], ['Doctor', 'Chișinău', 'Moldova'], ['IT engineer', 'Dublin', 'Ireland'], ['Teacher', 'Bălți', 'Moldova'], ['Lawyer', 'Paris', 'France'], ['Project manager', 'Munich', 'Germany'], ['Student, sociology', 'Bucharest', 'Romania']]
  };
  const T = {
    ro: {
      nav: 'Grupul de inițiativă', eyebrow: 'Despre noi', title: 'Grupul de inițiativă',
      lead: 'Suntem câțiva cetățeni ai Moldovei — unii acasă, alții peste hotare — care au pornit această inițiativă. Nu reprezentăm statul, partide sau instituții publice.',
      forT: 'Pentru cine facem asta', forD: 'Pentru fiecare moldovean, oriunde ar trăi: pentru cei plecați, care vor să rămână legați de casă, și pentru cei de acasă, care vor să fie auziți împreună cu ei.',
      listT: 'Membrii grupului', cols: ['Nume', 'Activitate', 'Oraș, țară'], name: 'Nume Prenume', note: 'Lista se completează.',
      joinT: 'Vrei să ajuți?', joinD: 'Căutăm coordonatori de comunități și voluntari. Scrie-ne sau înscrie-te la pre-înregistrare.', joinCta: 'Scrie-ne',
      aboutLinkT: 'Cine stă în spatele inițiativei', aboutLinkD: 'Un grup mic de cetățeni din Moldova și din diasporă.', aboutLink: 'Grupul de inițiativă'
    },
    ru: {
      nav: 'Инициативная группа', eyebrow: 'О нас', title: 'Инициативная группа',
      lead: 'Мы — несколько граждан Молдовы, одни дома, другие за рубежом, — которые запустили эту инициативу. Мы не представляем государство, партии или госучреждения.',
      forT: 'Для кого мы это делаем', forD: 'Для каждого молдаванина, где бы он ни жил: для уехавших, которые хотят оставаться связанными с домом, и для тех, кто дома и хочет, чтобы их услышали вместе с ними.',
      listT: 'Участники группы', cols: ['Имя', 'Род деятельности', 'Город, страна'], name: 'Имя Фамилия', note: 'Список дополняется.',
      joinT: 'Хочешь помочь?', joinD: 'Ищем координаторов общин и волонтёров. Напиши нам или пройди предрегистрацию.', joinCta: 'Написать нам',
      aboutLinkT: 'Кто стоит за инициативой', aboutLinkD: 'Небольшая группа граждан из Молдовы и диаспоры.', aboutLink: 'Инициативная группа'
    },
    en: {
      nav: 'Initiative group', eyebrow: 'About us', title: 'Initiative group',
      lead: 'We are a few citizens of Moldova — some at home, some abroad — who started this initiative. We do not represent the state, parties or public institutions.',
      forT: 'Who we do this for', forD: 'For every Moldovan, wherever they live: for those who left and want to stay connected to home, and for those at home who want to be heard together with them.',
      listT: 'Group members', cols: ['Name', 'Occupation', 'City, country'], name: 'First Last', note: 'The list is being completed.',
      joinT: 'Want to help?', joinD: 'We are looking for community coordinators and volunteers. Write to us or pre-register.', joinCta: 'Write to us',
      aboutLinkT: 'Who is behind the initiative', aboutLinkD: 'A small group of citizens from Moldova and the diaspora.', aboutLink: 'Initiative group'
    }
  };
  Object.keys(T).forEach(l => { T[l].people = people[l].map(([a, c, k]) => ({ n: T[l].name, a, loc: c + ', ' + k })); });
  const apply = () => { if (!window.TM) return setTimeout(apply, 20); Object.keys(T).forEach(l => { window.TM.T[l].grp = T[l]; }); };
  apply();
})();
