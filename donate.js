(function () {
  const acc = (l) => ({
    mdl: { t: { ro: 'Transfer bancar în lei (MDL)', ru: 'Банковский перевод в леях (MDL)', en: 'Bank transfer in lei (MDL)' }[l], rows: [['beneficiary', '—'], ['idno', '—'], ['iban', 'MD00 XX00 0000 0000 0000 0000'], ['bank', '—'], ['purpose', 'purposeV']] },
    eur: { t: { ro: 'Transfer din străinătate (EUR)', ru: 'Перевод из-за рубежа (EUR)', en: 'Transfer from abroad (EUR)' }[l], rows: [['beneficiary', '—'], ['iban', 'MD00 XX00 0000 0000 0000 0000'], ['swift', '—'], ['bank', '—'], ['purpose', 'purposeV']] }
  });
  const T = {
    ro: {
      nav: 'Susține', eyebrow: 'Susține inițiativa', title: 'Fiecare contribuție contează',
      lead: 'Congresul și platforma sunt o inițiativă a cetățenilor, fără bani de la stat sau de la partide. Ne sprijinim pe contribuțiile voluntare ale celor care cred în ea — de acasă și de peste hotare.',
      cta: 'Vezi rechizitele', forT: 'La ce merg banii',
      for: [{ t: 'Congresul', d: 'Sala, logistica, transmisia online.' }, { t: 'Întâlnirile comunităților', d: 'Spații și materiale pentru întâlnirile din orașe.' }, { t: 'Platforma', d: 'Site-ul, găzduirea, înregistrările, protecția datelor.' }, { t: 'Traduceri', d: 'Tot conținutul în română, rusă și engleză.' }],
      reqT: 'Rechizite', reqD: 'Rechizitele vor fi publicate după înregistrarea organizației.', soon: 'În curând',
      labels: { beneficiary: 'Beneficiar', idno: 'IDNO', iban: 'IBAN', bank: 'Banca', swift: 'SWIFT / BIC', purpose: 'Destinația plății', purposeV: 'Donație pentru Congresul Mondial al Moldovenilor' },
      copy: 'Copiază', copied: 'Copiat',
      online: 'Plata online cu cardul', onlineD: 'Lucrăm la o modalitate simplă de a dona cu cardul, direct de pe site.',
      trT: 'Transparență', tr: 'Donațiile sunt voluntare. Nu oferim nimic în schimb și nu acceptăm bani de la partide sau instituții de stat. Publicăm regulat câți bani am primit și pe ce i-am cheltuit.',
      otherT: 'Alte moduri de a ajuta', other: [{ t: 'Devino coordonator', d: 'Adună moldovenii din orașul tău.', go: 'form' }, { t: 'Fii voluntar', d: 'Traduceri, design, organizare, IT.', go: 'group' }, { t: 'Spune altora', d: 'Trimite site-ul prietenilor și familiei.', go: 'home' }]
    },
    ru: {
      nav: 'Поддержать', eyebrow: 'Поддержать инициативу', title: 'Важен каждый вклад',
      lead: 'Конгресс и платформа — инициатива граждан, без денег государства или партий. Мы держимся на добровольных взносах тех, кто в неё верит, — дома и за рубежом.',
      cta: 'Смотреть реквизиты', forT: 'На что идут деньги',
      for: [{ t: 'Конгресс', d: 'Зал, логистика, онлайн-трансляция.' }, { t: 'Встречи общин', d: 'Помещения и материалы для встреч в городах.' }, { t: 'Платформа', d: 'Сайт, хостинг, регистрации, защита данных.' }, { t: 'Переводы', d: 'Всё содержимое на румынском, русском и английском.' }],
      reqT: 'Реквизиты', reqD: 'Реквизиты будут опубликованы после регистрации организации.', soon: 'Скоро',
      labels: { beneficiary: 'Получатель', idno: 'IDNO', iban: 'IBAN', bank: 'Банк', swift: 'SWIFT / BIC', purpose: 'Назначение платежа', purposeV: 'Пожертвование для Всемирного конгресса молдаван' },
      copy: 'Копировать', copied: 'Скопировано',
      online: 'Оплата картой онлайн', onlineD: 'Работаем над простым способом пожертвовать картой прямо на сайте.',
      trT: 'Прозрачность', tr: 'Пожертвования добровольные. Мы ничего не даём взамен и не принимаем деньги от партий и госучреждений. Регулярно публикуем, сколько получили и на что потратили.',
      otherT: 'Другие способы помочь', other: [{ t: 'Стань координатором', d: 'Собери молдаван своего города.', go: 'form' }, { t: 'Стань волонтёром', d: 'Переводы, дизайн, организация, IT.', go: 'group' }, { t: 'Расскажи другим', d: 'Отправь сайт друзьям и родным.', go: 'home' }]
    },
    en: {
      nav: 'Support', eyebrow: 'Support the initiative', title: 'Every contribution counts',
      lead: 'The Congress and the platform are a citizens’ initiative, with no money from the state or parties. We rely on voluntary contributions from people who believe in it — at home and abroad.',
      cta: 'See bank details', forT: 'Where the money goes',
      for: [{ t: 'The Congress', d: 'Venue, logistics, online streaming.' }, { t: 'Community meetups', d: 'Spaces and materials for meetups in cities.' }, { t: 'The platform', d: 'Website, hosting, registrations, data protection.' }, { t: 'Translations', d: 'All content in Romanian, Russian and English.' }],
      reqT: 'Bank details', reqD: 'Bank details will be published once the organisation is registered.', soon: 'Coming soon',
      labels: { beneficiary: 'Beneficiary', idno: 'IDNO', iban: 'IBAN', bank: 'Bank', swift: 'SWIFT / BIC', purpose: 'Payment reference', purposeV: 'Donation to the World Congress of Moldovans' },
      copy: 'Copy', copied: 'Copied',
      online: 'Online card payment', onlineD: 'We are working on a simple way to donate by card, right on the website.',
      trT: 'Transparency', tr: 'Donations are voluntary. We give nothing in return and accept no money from parties or state institutions. We regularly publish how much we received and what we spent it on.',
      otherT: 'Other ways to help', other: [{ t: 'Become a coordinator', d: 'Bring together Moldovans in your city.', go: 'form' }, { t: 'Volunteer', d: 'Translation, design, organisation, IT.', go: 'group' }, { t: 'Tell others', d: 'Send the site to friends and family.', go: 'home' }]
    }
  };
  Object.keys(T).forEach(l => {
    const a = acc(l);
    T[l].accounts = ['mdl', 'eur'].map(k => ({ id: k, t: a[k].t, rows: a[k].rows.map(([key, v]) => ({ k: key, label: T[l].labels[key], v: v === 'purposeV' ? T[l].labels.purposeV : v, canCopy: key === 'iban' || key === 'purpose' })) }));
  });
  const apply = () => { if (!window.TM) return setTimeout(apply, 20); Object.keys(T).forEach(l => { window.TM.T[l].don = T[l]; }); };
  apply();
})();
