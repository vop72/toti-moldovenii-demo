(function () {
  const T = {
    ro: {
      eyebrow: 'Congresul Mondial al Moldovenilor', title: 'Congresul Mondial al Moldovenilor 2027',
      lead: 'Adunăm într-un singur loc moldovenii din Moldova și de peste hotare, discutăm problemele principale și adoptăm un apel comun către autorități.',
      when: 'Data și locul — în curând',
      whyT: 'Despre ce vorbim', whyD: 'Temele vin de la oameni — din pre-înregistrări și din întâlnirile comunităților. Primele pe listă:',
      topics: ['Muncă', 'Acte și documente', 'Implicarea în viața țării', 'Revenirea acasă', 'Educația copiilor'],
      resultT: 'La final', result: 'Un apel comun către autorități — și un raport public peste un an despre ce s-a făcut.',
      whoT: 'Cine este invitat', who: 'Toți cei care se simt parte din Moldova: cetățenii de acasă și de peste hotare, oamenii originari din Moldova și descendenții lor.',
      pathT: 'Drumul spre Congres', pathD: 'Congresul nu e un eveniment de o zi, ci un proces de un an.',
      path: [{ t: 'Înregistrare și sondaj', d: 'Ne spui cine ești și ce problemă vrei să ridici.' }, { t: 'Întâlnirile comunităților', d: 'Online și offline, în orașele unde suntem.' }, { t: 'Agenda', d: 'Alegem temele din ce s-a adunat.' }, { t: 'Congresul', d: 'Moldovenii de acasă și din diasporă, la aceeași masă.' }, { t: 'Rezoluția', d: 'Apelul comun către autorități.' }, { t: 'Raportul', d: 'Peste un an: ce s-a făcut și ce nu.' }],
      diffT: 'O inițiativă a cetățenilor', diff: 'Congresul Mondial al Moldovenilor este o inițiativă privată a unui grup de cetățeni. Nu este organizat de stat, de partide sau de instituții publice și nu depinde de ele. Îi unește pe moldoveni și acasă, și peste hotare.', diffS: [],
      formT: 'Pre-înregistrare', formLead: 'Durează două minute. Te anunțăm primul când stabilim data și locul.',
      f: { name: 'Nume și prenume', email: 'E-mail sau telefon', country: 'Țara în care locuiești', city: 'Orașul', role: 'Domeniul tău', roles: ['Business', 'IT', 'Medicină', 'Educație', 'Construcții', 'Agricultură', 'Studii', 'Altul'], issue: 'Ce problemă vrei să ridici la Congres?', issuePh: 'De exemplu: recunoașterea diplomelor, votul din străinătate, școala în limba română pentru copii…', coord: 'Vreau să devin coordonator al comunității din orașul meu', consent: 'Sunt de acord cu prelucrarea datelor personale (GDPR / Legea RM nr. 133/2011 privind protecția datelor cu caracter personal).', submit: 'Trimite pre-înregistrarea', req: 'obligatoriu' },
      thanks: 'Mulțumim! Te-am trecut pe listă.', thanksD: 'Îți scriem când stabilim data și locul Congresului.'
    },
    ru: {
      eyebrow: 'Всемирный конгресс молдаван', title: 'Всемирный конгресс молдаван 2027',
      lead: 'Собираем в одном месте молдаван из Молдовы и из-за рубежа, обсуждаем главные проблемы и принимаем общее обращение к власти.',
      when: 'Дата и место — скоро',
      whyT: 'О чём говорим', whyD: 'Темы приходят от людей — из предрегистраций и встреч общин. Первые в списке:',
      topics: ['Работа', 'Документы', 'Участие в жизни страны', 'Возвращение', 'Образование детей'],
      resultT: 'Итог', result: 'Общее обращение к власти — и публичный отчёт через год: что сделано.',
      whoT: 'Кто приглашён', who: 'Все, кто считает себя частью Молдовы: граждане в стране и за рубежом, выходцы из Молдовы и их потомки.',
      pathT: 'Путь к Конгрессу', pathD: 'Конгресс — это не событие одного дня, а процесс длиной в год.',
      path: [{ t: 'Регистрация и опрос', d: 'Рассказываешь, кто ты и какую проблему хочешь поднять.' }, { t: 'Встречи общин', d: 'Онлайн и офлайн, в городах, где мы есть.' }, { t: 'Повестка', d: 'Выбираем темы из того, что собрали.' }, { t: 'Конгресс', d: 'Молдаване дома и в диаспоре — за одним столом.' }, { t: 'Резолюция', d: 'Общее обращение к власти.' }, { t: 'Отчёт', d: 'Через год: что сделано, а что нет.' }],
      diffT: 'Инициатива граждан', diff: 'Всемирный конгресс молдаван — частная инициатива группы граждан. Его не организуют государство, партии или госучреждения, и он от них не зависит. Он объединяет молдаван и дома, и за рубежом.', diffS: [],
      formT: 'Предрегистрация', formLead: 'Займёт две минуты. Сообщим первым, когда определимся с датой и местом.',
      f: { name: 'Имя и фамилия', email: 'E-mail или телефон', country: 'Страна проживания', city: 'Город', role: 'Твоя сфера', roles: ['Бизнес', 'IT', 'Медицина', 'Образование', 'Строительство', 'Сельское хозяйство', 'Учёба', 'Другое'], issue: 'Какую проблему ты хочешь поднять на Конгрессе?', issuePh: 'Например: признание дипломов, голосование из-за рубежа, школа на румынском для детей…', coord: 'Хочу стать координатором общины в своём городе', consent: 'Согласен(на) на обработку персональных данных (GDPR / Закон РМ №133/2011 о защите персональных данных).', submit: 'Отправить предрегистрацию', req: 'обязательно' },
      thanks: 'Спасибо! Ты в списке.', thanksD: 'Напишем, когда определимся с датой и местом Конгресса.'
    },
    en: {
      eyebrow: 'World Congress of Moldovans', title: 'World Congress of Moldovans 2027',
      lead: 'We bring Moldovans from home and abroad together in one place, discuss the main problems and adopt a joint appeal to the authorities.',
      when: 'Date and venue — coming soon',
      whyT: 'What we’ll talk about', whyD: 'The topics come from people — from pre-registrations and community meetups. First on the list:',
      topics: ['Work', 'Documents', 'Taking part in the life of the country', 'Return', 'Children’s education'],
      resultT: 'The outcome', result: 'A joint appeal to the authorities — and a public report a year later on what has been done.',
      whoT: 'Who is invited', who: 'Everyone who feels part of Moldova: citizens at home and abroad, people from Moldova and their descendants.',
      pathT: 'The road to the Congress', pathD: 'The Congress is not a one-day event but a year-long process.',
      path: [{ t: 'Registration and survey', d: 'Tell us who you are and which issue you want to raise.' }, { t: 'Community meetups', d: 'Online and offline, in the cities where we are.' }, { t: 'Agenda', d: 'We pick the topics from what we’ve gathered.' }, { t: 'The Congress', d: 'Moldovans from home and the diaspora at one table.' }, { t: 'Resolution', d: 'A joint appeal to the authorities.' }, { t: 'Report', d: 'A year later: what was done and what wasn’t.' }],
      diffT: 'A citizens’ initiative', diff: 'The World Congress of Moldovans is a private initiative of a group of citizens. It is not organised by the state, parties or public institutions, and does not depend on them. It brings together Moldovans both at home and abroad.', diffS: [],
      formT: 'Pre-registration', formLead: 'It takes two minutes. You’ll be the first to know once the date and venue are set.',
      f: { name: 'Full name', email: 'Email or phone', country: 'Country of residence', city: 'City', role: 'Your field', roles: ['Business', 'IT', 'Healthcare', 'Education', 'Construction', 'Agriculture', 'Studying', 'Other'], issue: 'Which issue do you want to raise at the Congress?', issuePh: 'For example: diploma recognition, voting from abroad, Romanian-language school for children…', coord: 'I want to become a community coordinator in my city', consent: 'I agree to the processing of my personal data (GDPR / Moldovan Law No. 133/2011 on personal data protection).', submit: 'Send pre-registration', req: 'required' },
      thanks: 'Thank you! You’re on the list.', thanksD: 'We’ll write to you once the date and venue of the Congress are set.'
    }
  };
  Object.keys(T).forEach(l => { T[l].path = T[l].path.map((p, i) => ({ ...p, n: String(i + 1).padStart(2, '0'), hl: i === 3 })); T[l].topics = T[l].topics.map(x => ({ t: x })); });
  const apply = () => {
    if (!window.TM) return setTimeout(apply, 20);
    Object.keys(T).forEach(l => {
      const c = window.TM.T[l].congress;
      Object.assign(c, { eyebrow: T[l].eyebrow, title: T[l].title, lead: T[l].lead, formT: T[l].formT, formLead: T[l].formLead, f: T[l].f, thanks: T[l].thanks, thanksD: T[l].thanksD });
      window.TM.T[l].cg = T[l];
    });
  };
  apply();
})();
