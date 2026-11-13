(function () {
  const T = {
    ro: {
      brand: 'Congresul Mondial al Moldovenilor', brandSub: 'CMM.md',
      nav: { home: 'Acasă', about: 'Despre noi', congress: 'Congresul 2027', communities: 'Comunități', numbers: 'Diaspora în cifre' },
      join: 'Alătură-te', menu: 'Meniu', close: 'Închide',
      about: {"eyebrow": "Despre noi", "mission": "Unim moldovenii din Moldova și din toată lumea, ca vocea fiecăruia să fie auzită în deciziile despre viitorul țării — oriunde ar trăi.", "whoT": "Pe cine numim moldoveni din diaspora", "who": "Pentru noi, moldovenii din diaspora sunt cetățenii Moldovei care trăiesc peste hotare, toți cei originari din Moldova și descendenții lor.", "whoSrc": "Strategia națională «Diaspora-2025», HG nr. 200/2016", "pilT": "Trei direcții", "pilD": "Ce facem concret", "pil": [{"t": "Vocea", "d": "Adunăm problemele și propunerile oamenilor de acasă și de peste hotare și pregătim, după Congres, un apel către autorități."}, {"t": "Legătura", "d": "Comunități pe țări și orașe, coordonatori, întâlniri."}, {"t": "Revenirea (Acasă)", "d": "Informație și sprijin pentru cei care vor să revină, să investească sau să-și ajute satul natal."}], "prT": "Principiile noastre", "pr": [{"t": "Independență", "d": "Nu depindem de partide, instituții sau finanțatori care ne-ar dicta agenda."}, {"t": "Nepartinic", "d": "Nu susținem niciun partid sau candidat; vorbim despre probleme, nu despre politicieni."}, {"t": "Deschidere", "d": "Spunem public ce facem, cu cine și pe ce bani."}, {"t": "Respect", "d": "Sunt bineveniți toți cei care se simt parte din Moldova — oricare le-ar fi limba sau originea."}], "teamT": "Echipa și documente", "team": [{"t": "Echipa", "d": "Oamenii din spatele inițiativei"}, {"t": "Documentele organizației", "d": "Statut, certificat de înregistrare"}, {"t": "Rechizite", "d": "Date juridice ale ONG-ului"}], "soon": "În curând", "ctaT": "Construim împreună", "ctaD": "Alătură-te ca să participi la pregătirea Congresului și la viața comunității din orașul tău."},
      hero: {
        eyebrow: 'Moldoveni acasă și în lume',
        title: 'Acasă sau departe — o singură Moldovă',
        sub: 'Platforma moldovenilor din Moldova și din toată lumea. Împreună — spre Congresul Mondial al Moldovenilor 2027.',
        cta2: 'Despre Congres'
      },
      stats: {
        title: 'Cine suntem, în câteva cifre',
        items: [
          { v: '~1 mln', l: 'moldoveni trăiesc peste hotare', s: 'Sursa: UN DESA, International Migrant Stock 2024 — 864 257; estimări oficiale — peste 1 mln' },
          { v: '2,4 mln', l: 'trăiesc acasă, în Moldova', s: 'Sursa: BNS, Recensământul populației 2024' },
          { v: '45', l: 'de țări în care cetățenii au votat în 2025', s: 'Sursa: CEC / MAE, alegerile parlamentare 2025' },
          { v: '10,5%', l: 'din PIB — transferuri de bani din străinătate', s: 'Sursa: Banca Mondială, 2024' },
          { v: '260 000+', l: 'de voturi din străinătate în 2025', s: 'Sursa: CEC, alegerile din 28.09.2025' }
        ]
      },
      pillars: {
        eyebrow: 'Misiunea noastră', title: 'Trei lucruri pe care le facem împreună',
        items: [
          { t: 'Vocea', d: 'Adunăm problemele și propunerile oamenilor de acasă și de peste hotare și pregătim, după Congres, un apel către autorități.' },
          { t: 'Legătura', d: 'Comunități pe țări și orașe, coordonatori, întâlniri.' },
          { t: 'Întoarcerea', d: 'Informație și sprijin pentru cei care vor să revină, să investească sau să-și ajute satul natal.' }
        ]
      },
      cd: {
        eyebrow: 'Congresul Mondial al Moldovenilor', title: 'Congresul Mondial al Moldovenilor 2027',
        d: 'Moldovenii de acasă și de peste hotare, în același loc: muncă, acte, implicarea în viața țării, revenirea, educația copiilor — și un apel comun către autorități.',
        when: 'Data și locul — în curând', days: 'zile', hours: 'ore', min: 'minute', sec: 'secunde',
        cta: 'Pre-înregistrare'
      },
      mapT: { eyebrow: 'Harta comunităților', title: 'Suntem deja în peste 50 de țări', d: 'Harta crește odată cu fiecare înregistrare: o comunitate apare când dintr-un oraș se adună suficienți oameni.', cta: 'Vezi toate comunitățile' },
      final: { title: 'Ești parte din Moldova, oriunde ai fi.', d: 'Alătură-te și află primul despre Congres, întâlnirile din orașul tău și proiectele comune.', ph: 'Adresa ta de e-mail', cta: 'Alătură-te' },
      footer: { about: 'Organizație non-profit care unește moldovenii de acasă și din diasporă.', contact: 'Contact', follow: 'Urmărește-ne', rights: '© 2026 Congresul Mondial al Moldovenilor · Asociație obștească', privacy: 'Confidențialitate', a11y: 'Accesibilitate' },
      congress: {
        eyebrow: 'Congresul Mondial al Moldovenilor 2027', title: 'Trei zile pentru o Moldovă care se aude de oriunde',
        lead: 'Congresul este o întâlnire deschisă între moldovenii din diasporă, cei de acasă, autoritățile locale și societatea civilă. Fără discursuri lungi: ateliere, mese rotunde și angajamente concrete.',
        whyT: 'De ce un Congres',
        why: [
          { t: 'Să ne cunoaștem', d: 'Comunitățile din 45+ țări se întâlnesc față în față, nu doar online.' },
          { t: 'Să numim problemele', d: 'Pornim de la întrebările trimise de voi la pre-înregistrare.' },
          { t: 'Să plecăm cu un plan', d: 'Fiecare atelier se încheie cu pași concreți și oameni responsabili.' }
        ],
        whoT: 'Cine este invitat',
        who: ['Liderii comunităților din diasporă', 'Tineri și studenți de acasă și din străinătate', 'Antreprenori și investitori', 'Primari și reprezentanți ai autorităților locale', 'Oameni de cultură, artiști, meșteri populari', 'Cercetători, medici, profesori'],
        facts: [{ k: 'Când', v: '26–28 august 2027' }, { k: 'Unde', v: 'Chișinău, cu sesiuni în regiuni' }, { k: 'Format', v: 'Fizic + transmisie online' }, { k: 'Participare', v: 'Gratuită, cu înregistrare' }],
        formT: 'Pre-înregistrare', formLead: 'Durează două minute. Confirmăm locul în primăvara lui 2027.',
        f: { name: 'Nume și prenume', email: 'E-mail', country: 'Țara în care locuiești', city: 'Orașul', role: 'Vin ca', roles: ['Membru al diasporei', 'Locuitor al Moldovei', 'Lider de comunitate', 'Antreprenor', 'Student', 'Altul'], issue: 'Ce problemă vrei să ridici la Congres?', issuePh: 'De exemplu: recunoașterea diplomelor, votul din străinătate, școala în limba română pentru copii…', consent: 'Sunt de acord să fiu contactat(ă) despre Congres.', submit: 'Trimite pre-înregistrarea', req: 'obligatoriu' },
        thanks: 'Mulțumim! Te-am trecut pe listă.', thanksD: 'Îți vom scrie pe e-mail cu detalii și program. Între timp, spune și altora.', again: 'Încă o înregistrare'
      },
      comm: {
        eyebrow: 'Comunități', title: 'Găsește moldovenii din orașul tău',
        lead: 'Comunități, asociații și grupuri locale din întreaga lume. Selectează un oraș pe hartă sau din listă.',
        search: 'Caută oraș sau țară', all: 'Toate', count: 'comunități', members: 'membri activi', coord: 'Coordonator', since: 'Activă din', next: 'Următorul eveniment', contact: 'Scrie comunității', joinC: 'Alătură-te comunității', none: 'Nicio comunitate găsită.', add: 'Nu ești pe hartă? Adaugă comunitatea ta', of: 'Comunitatea moldovenilor din'
      },
      num: {
        eyebrow: 'Diaspora în cifre', title: 'Cât de mare e Moldova de fapt',
        lead: 'Datele despre diasporă sunt dispersate între instituții din zeci de țări. Le adunăm într-un singur loc și indicăm sursa pentru fiecare cifră.',
        mapT: 'Unde trăiesc moldovenii', mapD: 'Estimarea numărului de moldoveni pe țări', chartT: 'Primele 10 țări', tableT: 'Tabel pe țări',
        cols: ['Țara', 'Estimare', 'Comunități', 'Sursa'], srcT: 'Surse și metodă',
        note: 'Cifrele pe țări sunt orientative și servesc machetei. Se vor înlocui cu date verificate de la BRD, OIM și oficiile naționale de statistică.',
        sources: ['Biroul Național de Statistică (BNS) — Recensământul populației și locuințelor 2024', 'Organizația Internațională pentru Migrație (OIM) — Profilul migrațional extins al Republicii Moldova', 'Banca Mondială — Personal remittances, received (% of GDP), 2023', 'Banca Națională a Moldovei — Transferuri de mijloace bănești din străinătate', 'Biroul Relații cu Diaspora (BRD) — Cartografierea diasporei'],
        share: 'din populația născută în Moldova trăiește peste hotare', shareS: 'Calcul pe baza OIM 2023 și BNS 2024', remitT: 'Transferuri de bani', remitD: 'din PIB în 2023', other: 'Alte țări'
      }
    },
    ru: {
      brand: 'Всемирный конгресс молдаван', brandSub: 'CMM.md',
      nav: { home: 'Главная', about: 'О нас', congress: 'Конгресс 2027', communities: 'Общины', numbers: 'Диаспора в цифрах' },
      join: 'Присоединиться', menu: 'Меню', close: 'Закрыть',
      about: {"eyebrow": "О нас", "mission": "Объединить молдаван в Молдове и по всему миру, чтобы голос каждого был услышан в решениях о будущем страны — где бы он ни жил.", "whoT": "Кого мы называем молдаванами диаспоры", "who": "Для нас молдаване диаспоры — это граждане Молдовы за рубежом, все выходцы из Молдовы и их потомки.", "whoSrc": "Национальная стратегия «Diaspora-2025», ПП №200/2016", "pilT": "Три направления", "pilD": "Что мы делаем", "pil": [{"t": "Голос", "d": "Собираем проблемы и предложения людей дома и за рубежом, готовим обращение к власти по итогам Конгресса."}, {"t": "Связь", "d": "Общины по странам и городам, координаторы, встречи."}, {"t": "Возвращение (Acasă)", "d": "Информация и поддержка для тех, кто хочет вернуться, инвестировать или помогать родному селу."}], "prT": "Наши принципы", "pr": [{"t": "Независимость", "d": "Не зависим от партий, ведомств или спонсоров, которые диктовали бы нам повестку."}, {"t": "Внепартийность", "d": "Не поддерживаем ни одну партию или кандидата: говорим о проблемах, а не о политиках."}, {"t": "Открытость", "d": "Публично рассказываем, что делаем, с кем и на какие деньги."}, {"t": "Уважение", "d": "Рады всем, кто считает себя частью Молдовы, — на каком бы языке он ни говорил и откуда бы ни был родом."}], "teamT": "Команда и документы", "team": [{"t": "Команда", "d": "Люди, которые стоят за инициативой"}, {"t": "Документы организации", "d": "Устав, свидетельство о регистрации"}, {"t": "Реквизиты", "d": "Юридические данные НКО"}], "soon": "Скоро", "ctaT": "Строим вместе", "ctaD": "Присоединяйся, чтобы участвовать в подготовке Конгресса и в жизни общины своего города."},
      hero: {
        eyebrow: 'Молдаване дома и в мире',
        title: 'Дома или далеко — одна Молдова',
        sub: 'Платформа молдаван в Молдове и по всему миру. Вместе — к Всемирному конгрессу молдаван 2027.',
        cta2: 'О Конгрессе'
      },
      stats: {
        title: 'Кто мы — в нескольких цифрах',
        items: [
          { v: '~1 млн', l: 'молдаван живут за рубежом', s: 'Источник: UN DESA, International Migrant Stock 2024 — 864 257; госоценки — более 1 млн' },
          { v: '2,4 млн', l: 'живут в Молдове', s: 'Источник: НБС, Перепись населения 2024' },
          { v: '45', l: 'стран, где граждане голосовали в 2025', s: 'Источник: ЦИК / МИД, парламентские выборы 2025' },
          { v: '10,5%', l: 'ВВП — переводы из-за рубежа', s: 'Источник: Всемирный банк, 2024' },
          { v: '260 000+', l: 'голосов из-за рубежа в 2025', s: 'Источник: ЦИК, выборы 28.09.2025' }
        ]
      },
      pillars: {
        eyebrow: 'Наша миссия', title: 'Три вещи, которые мы делаем вместе',
        items: [
          { t: 'Голос', d: 'Собираем проблемы и предложения людей дома и за рубежом, готовим обращение к власти по итогам Конгресса.' },
          { t: 'Связь', d: 'Общины по странам и городам, координаторы, встречи.' },
          { t: 'Возвращение', d: 'Информация и поддержка для тех, кто хочет вернуться, инвестировать или помогать родному селу.' }
        ]
      },
      cd: {
        eyebrow: 'Всемирный конгресс молдаван', title: 'Всемирный конгресс молдаван 2027',
        d: 'Молдаване из Молдовы и из-за рубежа в одном месте: работа, документы, участие в жизни страны, возвращение, образование детей — и общее обращение к власти.',
        when: 'Дата и место — скоро', days: 'дней', hours: 'часов', min: 'минут', sec: 'секунд',
        cta: 'Предрегистрация'
      },
      mapT: { eyebrow: 'Карта общин', title: 'Мы уже более чем в 50 странах', d: 'Карта растёт с каждой регистрацией: община появляется, когда из города набирается достаточно людей.', cta: 'Все общины' },
      final: { title: 'Ты — часть Молдовы, где бы ты ни был.', d: 'Присоединяйся и первым узнавай о Конгрессе, встречах в твоём городе и общих проектах.', ph: 'Ваш e-mail', cta: 'Присоединиться' },
      footer: { about: 'Некоммерческая организация, объединяющая молдаван дома и в диаспоре.', contact: 'Контакты', follow: 'Мы в соцсетях', rights: '© 2026 Congresul Mondial al Moldovenilor · Общественная ассоциация', privacy: 'Конфиденциальность', a11y: 'Доступность' },
      congress: {
        eyebrow: 'Всемирный конгресс молдаван 2027', title: 'Три дня для Молдовы, которую слышно отовсюду',
        lead: 'Конгресс — открытая встреча молдаван диаспоры, тех, кто дома, местных властей и гражданского общества. Без долгих речей: мастерские, круглые столы и конкретные обязательства.',
        whyT: 'Зачем Конгресс',
        why: [
          { t: 'Познакомиться', d: 'Общины из 45+ стран встречаются лично, а не только онлайн.' },
          { t: 'Назвать проблемы', d: 'Начинаем с вопросов, которые вы присылаете при предрегистрации.' },
          { t: 'Уйти с планом', d: 'Каждая мастерская заканчивается конкретными шагами и ответственными.' }
        ],
        whoT: 'Кто приглашён',
        who: ['Лидеры общин диаспоры', 'Молодёжь и студенты дома и за рубежом', 'Предприниматели и инвесторы', 'Примары и представители местных властей', 'Деятели культуры, артисты, народные мастера', 'Учёные, врачи, учителя'],
        facts: [{ k: 'Когда', v: '26–28 августа 2027' }, { k: 'Где', v: 'Кишинёв и сессии в регионах' }, { k: 'Формат', v: 'Очно + онлайн-трансляция' }, { k: 'Участие', v: 'Бесплатно, по регистрации' }],
        formT: 'Предрегистрация', formLead: 'Займёт две минуты. Подтвердим участие весной 2027 года.',
        f: { name: 'Имя и фамилия', email: 'E-mail', country: 'Страна проживания', city: 'Город', role: 'Я участвую как', roles: ['Представитель диаспоры', 'Житель Молдовы', 'Лидер общины', 'Предприниматель', 'Студент', 'Другое'], issue: 'Какую проблему ты хочешь поднять на Конгрессе?', issuePh: 'Например: признание дипломов, голосование за рубежом, школа на румынском для детей…', consent: 'Я согласен(на) получать сообщения о Конгрессе.', submit: 'Отправить предрегистрацию', req: 'обязательно' },
        thanks: 'Спасибо! Вы в списке.', thanksD: 'Мы напишем вам на e-mail с деталями и программой. А пока расскажите другим.', again: 'Ещё одна регистрация'
      },
      comm: {
        eyebrow: 'Общины', title: 'Найди молдаван в своём городе',
        lead: 'Общины, ассоциации и местные группы по всему миру. Выберите город на карте или в списке.',
        search: 'Поиск города или страны', all: 'Все', count: 'общин', members: 'активных участников', coord: 'Координатор', since: 'Активна с', next: 'Ближайшее событие', contact: 'Написать общине', joinC: 'Вступить в общину', none: 'Общины не найдены.', add: 'Вас нет на карте? Добавьте свою общину', of: 'Община молдаван —'
      },
      num: {
        eyebrow: 'Диаспора в цифрах', title: 'Насколько велика Молдова на самом деле',
        lead: 'Данные о диаспоре разбросаны по учреждениям десятков стран. Мы собираем их в одном месте и указываем источник каждой цифры.',
        mapT: 'Где живут молдаване', mapD: 'Оценка числа молдаван по странам', chartT: 'Топ-10 стран', tableT: 'Таблица по странам',
        cols: ['Страна', 'Оценка', 'Общины', 'Источник'], srcT: 'Источники и методика',
        note: 'Цифры по странам ориентировочные и служат для макета. Будут заменены проверенными данными БСД, МОМ и национальных статистических служб.',
        sources: ['Национальное бюро статистики (НБС) — Перепись населения и жилищ 2024', 'Международная организация по миграции (МОМ) — Расширенный миграционный профиль Республики Молдова', 'Всемирный банк — Personal remittances, received (% of GDP), 2023', 'Национальный банк Молдовы — Денежные переводы из-за рубежа', 'Бюро по связям с диаспорой (БСД) — Картирование диаспоры'],
        share: 'родившихся в Молдове живут за рубежом', shareS: 'Расчёт по данным МОМ 2023 и НБС 2024', remitT: 'Денежные переводы', remitD: 'ВВП в 2023 году', other: 'Другие страны'
      }
    },
    en: {
      brand: 'World Congress of Moldovans', brandSub: 'CMM.md',
      nav: { home: 'Home', about: 'About', congress: 'Congress 2027', communities: 'Communities', numbers: 'Diaspora in numbers' },
      join: 'Join us', menu: 'Menu', close: 'Close',
      about: {"eyebrow": "About us", "mission": "We unite Moldovans at home and around the world so that every voice is heard in decisions about the country’s future — wherever they live.", "whoT": "Who we mean by the Moldovan diaspora", "who": "For us, the Moldovan diaspora means Moldovan citizens living abroad, everyone who comes from Moldova, and their descendants.", "whoSrc": "National Strategy “Diaspora-2025”, Government Decision No. 200/2016", "pilT": "Three directions", "pilD": "What we do", "pil": [{"t": "Voice", "d": "We gather the problems and proposals of people at home and abroad and prepare an appeal to the authorities after the Congress."}, {"t": "Connection", "d": "Communities by country and city, coordinators, meetups."}, {"t": "Return (Acasă)", "d": "Information and support for those who want to return, invest or help their home village."}], "prT": "Our principles", "pr": [{"t": "Independence", "d": "We do not depend on parties, institutions or funders who could dictate our agenda."}, {"t": "Non-partisanship", "d": "We back no party or candidate: we talk about problems, not politicians."}, {"t": "Openness", "d": "We say publicly what we do, with whom and on what money."}, {"t": "Respect", "d": "Everyone who feels part of Moldova is welcome — whatever their language or origin."}], "teamT": "Team and documents", "team": [{"t": "Team", "d": "The people behind the initiative"}, {"t": "Organisation documents", "d": "Statute, registration certificate"}, {"t": "Legal details", "d": "The NGO’s legal data"}], "soon": "Coming soon", "ctaT": "Let’s build it together", "ctaD": "Join to take part in preparing the Congress and in the life of the community in your city."},
      hero: {
        eyebrow: 'Moldovans at home and around the world',
        title: 'At home or far away — one Moldova',
        sub: 'The platform for Moldovans at home and around the world. Together — towards the 2027 World Congress of Moldovans.',
        cta2: 'About the Congress'
      },
      stats: {
        title: 'Who we are, in a few numbers',
        items: [
          { v: '~1M', l: 'Moldovans live abroad', s: 'Source: UN DESA, International Migrant Stock 2024 — 864,257; official estimates — over 1M' },
          { v: '2.4M', l: 'live in Moldova', s: 'Source: NBS, 2024 Population Census' },
          { v: '45', l: 'countries where citizens voted in 2025', s: 'Source: CEC / MFA, 2025 parliamentary elections' },
          { v: '10.5%', l: 'of GDP — remittances from abroad', s: 'Source: World Bank, 2024' },
          { v: '260,000+', l: 'votes cast abroad in 2025', s: 'Source: CEC, 28.09.2025 elections' }
        ]
      },
      pillars: {
        eyebrow: 'Our mission', title: 'Three things we do together',
        items: [
          { t: 'Voice', d: 'We gather the problems and proposals of people at home and abroad and prepare an appeal to the authorities after the Congress.' },
          { t: 'Connection', d: 'Communities by country and city, coordinators, meetups.' },
          { t: 'Return', d: 'Information and support for those who want to return, invest or help their home village.' }
        ]
      },
      cd: {
        eyebrow: 'World Congress of Moldovans', title: 'World Congress of Moldovans 2027',
        d: 'Moldovans from home and abroad in one place: work, documents, taking part in the life of the country, return, children’s education — and a joint appeal to the authorities.',
        when: 'Date and venue — coming soon', days: 'days', hours: 'hours', min: 'minutes', sec: 'seconds',
        cta: 'Pre-register'
      },
      mapT: { eyebrow: 'Community map', title: 'We are already in 50+ countries', d: 'The map grows with every registration: a community appears once enough people from a city have joined.', cta: 'See all communities' },
      final: { title: 'You are part of Moldova, wherever you are.', d: 'Join to be the first to hear about the Congress, meetups in your city and shared projects.', ph: 'Your email address', cta: 'Join us' },
      footer: { about: 'A non-profit bringing together Moldovans at home and in the diaspora.', contact: 'Contact', follow: 'Follow us', rights: '© 2026 Congresul Mondial al Moldovenilor · Non-profit association', privacy: 'Privacy', a11y: 'Accessibility' },
      congress: {
        eyebrow: 'World Congress of Moldovans 2027', title: 'Three days for a Moldova that is heard from everywhere',
        lead: 'The Congress is an open meeting of Moldovans in the diaspora, those at home, local authorities and civil society. No long speeches: workshops, round tables and concrete commitments.',
        whyT: 'Why a Congress',
        why: [
          { t: 'To meet', d: 'Communities from 45+ countries meet face to face, not only online.' },
          { t: 'To name the issues', d: 'We start from the questions you send us when you pre-register.' },
          { t: 'To leave with a plan', d: 'Every workshop ends with concrete steps and named owners.' }
        ],
        whoT: 'Who is invited',
        who: ['Diaspora community leaders', 'Young people and students, at home and abroad', 'Entrepreneurs and investors', 'Mayors and local authority representatives', 'Artists, musicians and folk craftspeople', 'Researchers, doctors and teachers'],
        facts: [{ k: 'When', v: '26–28 August 2027' }, { k: 'Where', v: 'Chișinău, with regional sessions' }, { k: 'Format', v: 'In person + live stream' }, { k: 'Attendance', v: 'Free, registration required' }],
        formT: 'Pre-registration', formLead: 'It takes two minutes. We confirm places in spring 2027.',
        f: { name: 'Full name', email: 'Email', country: 'Country you live in', city: 'City', role: 'I am coming as', roles: ['Diaspora member', 'Resident of Moldova', 'Community leader', 'Entrepreneur', 'Student', 'Other'], issue: 'Which issue do you want to raise at the Congress?', issuePh: 'For example: recognition of diplomas, voting abroad, Romanian-language school for children…', consent: 'I agree to be contacted about the Congress.', submit: 'Send pre-registration', req: 'required' },
        thanks: 'Thank you! You are on the list.', thanksD: 'We will email you with details and the programme. In the meantime, tell others.', again: 'Another registration'
      },
      comm: {
        eyebrow: 'Communities', title: 'Find the Moldovans in your city',
        lead: 'Communities, associations and local groups around the world. Pick a city on the map or from the list.',
        search: 'Search city or country', all: 'All', count: 'communities', members: 'active members', coord: 'Coordinator', since: 'Active since', next: 'Next event', contact: 'Message the community', joinC: 'Join this community', none: 'No communities found.', add: 'Not on the map? Add your community', of: 'Moldovan community of'
      },
      num: {
        eyebrow: 'Diaspora in numbers', title: 'How big Moldova really is',
        lead: 'Data on the diaspora is spread across institutions in dozens of countries. We bring it together in one place and cite the source for every figure.',
        mapT: 'Where Moldovans live', mapD: 'Estimated number of Moldovans by country', chartT: 'Top 10 countries', tableT: 'By country',
        cols: ['Country', 'Estimate', 'Communities', 'Source'], srcT: 'Sources and method',
        note: 'Country figures are indicative and used for this mockup. They will be replaced with verified data from the BDR, IOM and national statistics offices.',
        sources: ['National Bureau of Statistics (NBS) — 2024 Population and Housing Census', 'International Organization for Migration (IOM) — Extended Migration Profile of the Republic of Moldova', 'World Bank — Personal remittances, received (% of GDP), 2023', 'National Bank of Moldova — Money transfers from abroad', 'Bureau for Diaspora Relations (BDR) — Diaspora mapping'],
        share: 'of people born in Moldova live abroad', shareS: 'Based on IOM 2023 and NBS 2024', remitT: 'Remittances', remitD: 'of GDP in 2023', other: 'Other countries'
      }
    }
  };

  const R = { // regions
    we: { ro: 'Europa de Vest', ru: 'Западная Европа', en: 'Western Europe' },
    ce: { ro: 'Europa Centrală și de Est', ru: 'Центральная и Восточная Европа', en: 'Central & Eastern Europe' },
    cis: { ro: 'Rusia, Ucraina, Turcia', ru: 'Россия, Украина, Турция', en: 'Russia, Ukraine, Türkiye' },
    na: { ro: 'America de Nord', ru: 'Северная Америка', en: 'North America' },
    me: { ro: 'Orientul Mijlociu și Asia', ru: 'Ближний Восток и Азия', en: 'Middle East & Asia-Pacific' }
  };

  // est = indicative mockup values
  const COUNTRIES = [
    { id: '643', n: { ro: 'Rusia', ru: 'Россия', en: 'Russia' }, est: 200000, src: 'Rosstat / estimare', r: 'cis' },
    { id: '380', n: { ro: 'Italia', ru: 'Италия', en: 'Italy' }, est: 115000, src: 'ISTAT 2023', r: 'we' },
    { id: '826', n: { ro: 'Regatul Unit', ru: 'Великобритания', en: 'United Kingdom' }, est: 60000, src: 'ONS / estimare', r: 'we' },
    { id: '642', n: { ro: 'România', ru: 'Румыния', en: 'Romania' }, est: 55000, src: 'INS / estimare', r: 'ce' },
    { id: '276', n: { ro: 'Germania', ru: 'Германия', en: 'Germany' }, est: 45000, src: 'Destatis 2023', r: 'we' },
    { id: '840', n: { ro: 'SUA', ru: 'США', en: 'United States' }, est: 45000, src: 'US Census ACS', r: 'na' },
    { id: '250', n: { ro: 'Franța', ru: 'Франция', en: 'France' }, est: 35000, src: 'INSEE / estimare', r: 'we' },
    { id: '124', n: { ro: 'Canada', ru: 'Канада', en: 'Canada' }, est: 25000, src: 'StatCan 2021', r: 'na' },
    { id: '376', n: { ro: 'Israel', ru: 'Израиль', en: 'Israel' }, est: 20000, src: 'CBS / estimare', r: 'me' },
    { id: '724', n: { ro: 'Spania', ru: 'Испания', en: 'Spain' }, est: 15000, src: 'INE 2023', r: 'we' },
    { id: '804', n: { ro: 'Ucraina', ru: 'Украина', en: 'Ukraine' }, est: 15000, src: 'estimare', r: 'cis' },
    { id: '792', n: { ro: 'Turcia', ru: 'Турция', en: 'Türkiye' }, est: 12000, src: 'TÜİK / estimare', r: 'cis' },
    { id: '372', n: { ro: 'Irlanda', ru: 'Ирландия', en: 'Ireland' }, est: 12000, src: 'CSO 2022', r: 'we' },
    { id: '203', n: { ro: 'Cehia', ru: 'Чехия', en: 'Czechia' }, est: 10000, src: 'ČSÚ 2023', r: 'ce' },
    { id: '620', n: { ro: 'Portugalia', ru: 'Португалия', en: 'Portugal' }, est: 8000, src: 'AIMA 2023', r: 'we' },
    { id: '056', n: { ro: 'Belgia', ru: 'Бельгия', en: 'Belgium' }, est: 8000, src: 'Statbel / estimare', r: 'we' },
    { id: '528', n: { ro: 'Țările de Jos', ru: 'Нидерланды', en: 'Netherlands' }, est: 6000, src: 'CBS NL', r: 'we' },
    { id: '616', n: { ro: 'Polonia', ru: 'Польша', en: 'Poland' }, est: 6000, src: 'GUS / estimare', r: 'ce' },
    { id: '300', n: { ro: 'Grecia', ru: 'Греция', en: 'Greece' }, est: 6000, src: 'ELSTAT / estimare', r: 'ce' },
    { id: '040', n: { ro: 'Austria', ru: 'Австрия', en: 'Austria' }, est: 4000, src: 'Statistik Austria', r: 'ce' },
    { id: '756', n: { ro: 'Elveția', ru: 'Швейцария', en: 'Switzerland' }, est: 3000, src: 'FSO', r: 'we' },
    { id: '752', n: { ro: 'Suedia', ru: 'Швеция', en: 'Sweden' }, est: 3000, src: 'SCB', r: 'we' },
    { id: '784', n: { ro: 'Emiratele Arabe Unite', ru: 'ОАЭ', en: 'UAE' }, est: 3000, src: 'estimare', r: 'me' },
    { id: '036', n: { ro: 'Australia', ru: 'Австралия', en: 'Australia' }, est: 2000, src: 'ABS 2021', r: 'me' }
  ];

  const C = [
    ['roma', 'Roma', 'Рим', 'Rome', '380', 41.9, 12.5],
    ['milano', 'Milano', 'Милан', 'Milan', '380', 45.46, 9.19],
    ['padova', 'Padova', 'Падуя', 'Padua', '380', 45.41, 11.88],
    ['bologna', 'Bologna', 'Болонья', 'Bologna', '380', 44.49, 11.34],
    ['torino', 'Torino', 'Турин', 'Turin', '380', 45.07, 7.69],
    ['bucuresti', 'București', 'Бухарест', 'Bucharest', '642', 44.43, 26.1],
    ['iasi', 'Iași', 'Яссы', 'Iași', '642', 47.16, 27.59],
    ['berlin', 'Berlin', 'Берлин', 'Berlin', '276', 52.52, 13.4],
    ['munchen', 'München', 'Мюнхен', 'Munich', '276', 48.14, 11.58],
    ['frankfurt', 'Frankfurt', 'Франкфурт', 'Frankfurt', '276', 50.11, 8.68],
    ['paris', 'Paris', 'Париж', 'Paris', '250', 48.86, 2.35],
    ['london', 'Londra', 'Лондон', 'London', '826', 51.51, -0.13],
    ['dublin', 'Dublin', 'Дублин', 'Dublin', '372', 53.35, -6.26],
    ['madrid', 'Madrid', 'Мадрид', 'Madrid', '724', 40.42, -3.7],
    ['lisboa', 'Lisabona', 'Лиссабон', 'Lisbon', '620', 38.72, -9.14],
    ['bruxelles', 'Bruxelles', 'Брюссель', 'Brussels', '056', 50.85, 4.35],
    ['amsterdam', 'Amsterdam', 'Амстердам', 'Amsterdam', '528', 52.37, 4.9],
    ['praga', 'Praga', 'Прага', 'Prague', '203', 50.08, 14.44],
    ['varsovia', 'Varșovia', 'Варшава', 'Warsaw', '616', 52.23, 21.01],
    ['viena', 'Viena', 'Вена', 'Vienna', '040', 48.21, 16.37],
    ['geneva', 'Geneva', 'Женева', 'Geneva', '756', 46.2, 6.14],
    ['stockholm', 'Stockholm', 'Стокгольм', 'Stockholm', '752', 59.33, 18.07],
    ['atena', 'Atena', 'Афины', 'Athens', '300', 37.98, 23.73],
    ['moscova', 'Moscova', 'Москва', 'Moscow', '643', 55.76, 37.62],
    ['spb', 'Sankt Petersburg', 'Санкт-Петербург', 'St Petersburg', '643', 59.93, 30.34],
    ['odesa', 'Odesa', 'Одесса', 'Odesa', '804', 46.48, 30.72],
    ['istanbul', 'Istanbul', 'Стамбул', 'Istanbul', '792', 41.01, 28.98],
    ['telaviv', 'Tel Aviv', 'Тель-Авив', 'Tel Aviv', '376', 32.08, 34.78],
    ['dubai', 'Dubai', 'Дубай', 'Dubai', '784', 25.2, 55.27],
    ['newyork', 'New York', 'Нью-Йорк', 'New York', '840', 40.71, -74.0],
    ['chicago', 'Chicago', 'Чикаго', 'Chicago', '840', 41.88, -87.63],
    ['sacramento', 'Sacramento', 'Сакраменто', 'Sacramento', '840', 38.58, -121.49],
    ['toronto', 'Toronto', 'Торонто', 'Toronto', '124', 43.65, -79.38],
    ['montreal', 'Montréal', 'Монреаль', 'Montreal', '124', 45.5, -73.57],
    ['sydney', 'Sydney', 'Сидней', 'Sydney', '036', -33.87, 151.21]
  ];
  const coords = ['Ana Rusu', 'Ion Ciobanu', 'Maria Lungu', 'Victor Cebotari', 'Elena Moraru', 'Andrei Popa', 'Natalia Botnaru', 'Sergiu Țurcanu', 'Olga Rotaru', 'Dumitru Cojocaru'];
  const ev = [
    { ro: 'Hramul comunității · 14 octombrie', ru: 'Храм общины · 14 октября', en: 'Community feast day · 14 October' },
    { ro: 'Școala de duminică în limba română · în fiecare săptămână', ru: 'Воскресная школа на румынском · каждую неделю', en: 'Romanian Sunday school · every week' },
    { ro: 'Mărțișor la noi · 1 martie', ru: 'Мэрцишор у нас · 1 марта', en: 'Mărțișor gathering · 1 March' },
    { ro: 'Masă rotundă pre-Congres · 20 noiembrie', ru: 'Круглый стол перед Конгрессом · 20 ноября', en: 'Pre-Congress round table · 20 November' },
    { ro: 'Seară de muzică populară · 6 decembrie', ru: 'Вечер народной музыки · 6 декабря', en: 'Folk music evening · 6 December' }
  ];
  const cById = Object.fromEntries(COUNTRIES.map(c => [c.id, c]));
  const COMMUNITIES = C.map((c, i) => ({
    id: c[0], city: { ro: c[1], ru: c[2], en: c[3] }, cid: c[4], lat: c[5], lon: c[6],
    country: cById[c[4]].n, region: cById[c[4]].r,
    members: [1200, 340, 860, 210, 480, 2100, 150, 640, 390, 920][i % 10] + (i * 37) % 200,
    coord: coords[i % coords.length], since: 2008 + (i * 3) % 15, event: ev[i % ev.length],
    email: c[0] + '@cmm.md'
  }));
  COUNTRIES.forEach(c => { c.cities = COMMUNITIES.filter(m => m.cid === c.id).length; });

  window.TM = { T, R, COUNTRIES, COMMUNITIES, HOME: { lat: 47.01, lon: 28.86 }, CONGRESS: '2027-08-26T10:00:00+03:00' };
})();
